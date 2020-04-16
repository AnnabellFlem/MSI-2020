import React from 'react'
import './FavouriteListStyle.scss'
import JokeItem from '../JokeItem'

const FavouriteListView: React.FC = () => {
  return (
    <aside className="Favorite">
      <h2 className="Favorite_title">Favourite</h2>
      <ul className="Favorite_list">
        <JokeItem className="Favorite_item" />
        <JokeItem className="Favorite_item" />
      </ul>
    </aside>
  )
}

export default FavouriteListView
