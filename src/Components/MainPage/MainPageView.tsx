import React from 'react'
import './MainPageStyle.scss'
import MainLayout from '../MainLayout'
import Header from '../Header'
import Footer from '../Footer'
import FavouriteList from '../FavouriteList/FavouriteListView'

const MainPageView: React.FC = () => {
  return (<>
    <Header />
    <MainLayout />
    <FavouriteList />
    <Footer />
  </>)
}

export default MainPageView
