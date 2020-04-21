import React, { useState } from 'react'
import './MainPageStyle.scss'
import MainLayout from '../MainLayout'
import Header from '../Header'
import Footer from '../Footer'
import FavouriteList from '../FavouriteList/FavouriteListView'

const MainPageView: React.FC = () => {
  const [openFavList, setOpenFavList] = useState(false)

  const handleBtnClick = () => {
    setOpenFavList(!openFavList)
  }

  return (<>
    <Header handleBtnClick={ () => handleBtnClick() } />
    <MainLayout />
    <FavouriteList openFavList={ openFavList } />
    <Footer />
  </>)
}

export default MainPageView
