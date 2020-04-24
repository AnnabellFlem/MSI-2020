import React, { useEffect, useState } from 'react'
import './MainPageStyle.scss'
import MainLayout from '../MainLayout'
import Header from '../Header'
import Footer from '../Footer'
import FavouriteList from '../FavouriteList/FavouriteListView'
import { JokesListType, ModJokesListType, FavListType } from '../../Types'

const MainPageView: React.FC = () => {
  const [openFavList, setOpenFavList] = useState(false)
  const [favList, setFavList] = useState<FavListType>([])
  const list = [{
    id: 1,
    name: 'aaa'
  }, {
    id: 2,
    name: 'qqq'
  }]
  const initJokeList = (list: JokesListType) => {
    return list.map((item, index) => {
      if (favList && item.id === favList[index]) {
        return { ...item, isFavourite: true }
      } else {
        return { ...item, isFavourite: false }
      }
    })
  }

  const jokeListInitial = initJokeList(list)
  const [jokeList, setJokeList] = useState<ModJokesListType>(jokeListInitial)

  // useEffect(() => {
  //   const initList = window.localStorage.getItem('favList')
  //   if (initList) {
  //     setFavList(() => [...JSON.parse(initList)])
  //     console.log(initList)
  //   }
  // }, [])
  useEffect(() => window.localStorage.setItem('favList', JSON.stringify(favList)), [favList])

  const addFavItem = (id: number) => {
    const obj = jokeList.find(o => o.id === id)
    if (obj) {
      setFavList(favList => [...favList, obj.id])
      setJokeList(jokeList => jokeList.map(item => item.id === id ? { ...item, isFavourite: true } : item))
    }
    return favList
  }

  const deleteFavItem = (id: number, elem: number) => {
    setFavList(favList => favList.filter(e => e !== elem))
    setJokeList(jokeList => jokeList.map(item => item.id === id ? { ...item, isFavourite: false } : item))
  }

  const handleJokesList = (id: number) => {
    const elem = favList.indexOf(id)
    if (elem !== -1) {
      deleteFavItem(id, favList[elem])
    } else {
      addFavItem(id)
    }
  }

  const handleFavorites = (id: number) => {
    const elem = favList.indexOf(id)
    if (elem !== -1) {
      deleteFavItem(id, favList[elem])
    }
  }

  const handleBtnClick = () => {
    setOpenFavList(!openFavList)
  }

  return (<>
    <Header handleBtnClick={ () => handleBtnClick() } />
    <MainLayout handleJokesList={ handleJokesList } list={ jokeList } />
    <FavouriteList handleFavorites={ handleFavorites } openFavList={ openFavList } favList={ jokeList } />
    <Footer />
  </>)
}

export default MainPageView
