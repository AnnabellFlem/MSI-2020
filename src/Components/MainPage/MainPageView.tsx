import React, { useState } from 'react'
import './MainPageStyle.scss'
import MainLayout from '../MainLayout'
import Header from '../Header'
import Footer from '../Footer'
import FavouriteList from '../FavouriteList/FavouriteListView'
import { JokesListType } from '../../Types'

const MainPageView: React.FC = () => {
  const [openFavList, setOpenFavList] = useState(false)
  const [favList, setFavList] = useState([] as JokesListType)
  const [jokeList, setJokeList] = useState([{
    id: 1,
    isHeartFullIcon: false
  }, {
    id: 2,
    isHeartFullIcon: false
  }])

  const addFavItem = (id: number) => {
    const obj = jokeList.find(o => o.id === id)
    if (obj) {
      obj.isHeartFullIcon = true
      setFavList(favList => [...favList, obj])
    }
  }

  const deleteFavItem = (id: number, obj: {}) => {
    setFavList(favList => favList.filter(e => e !== obj))
  }

  const findFavItem = (id: number, list: JokesListType) => {
    return list.find(o => o.id === id)
  }

  const handleJokesList = (id: number) => {
    const obj = findFavItem(id, favList)
    if (obj) {
      deleteFavItem(id, obj)
      setJokeList(jokeList => jokeList.map(item => item.id === id ? { ...item, isHeartFullIcon: false } : item))
    } else {
      addFavItem(id)
      setJokeList(jokeList => jokeList.map(item => item.id === id ? { ...item, isHeartFullIcon: true } : item))
    }
  }

  const handleFavorites = (id: number) => {
    const obj = findFavItem(id, favList)
    if (obj) {
      deleteFavItem(id, obj)
      setJokeList(jokeList => jokeList.map(item => item.id === id ? { ...item, isHeartFullIcon: false } : item))
    }
  }

  const handleBtnClick = () => {
    setOpenFavList(!openFavList)
  }

  return (<>
    <Header handleBtnClick={ () => handleBtnClick() } />
    <MainLayout handleJokesList={ handleJokesList } list={ jokeList } />
    <FavouriteList handleFavorites={ handleFavorites } openFavList={ openFavList } favList={ favList } />
    <Footer />
  </>)
}

export default MainPageView
