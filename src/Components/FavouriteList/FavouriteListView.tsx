import React from 'react'
import './FavouriteListStyle.scss'
import JokeItem from '../JokeItem'

type Props = {
  openFavList: boolean
}

const FavouriteListView: React.FC<Props> = ({ openFavList }) => {
  const handleItem = () => {
    return ''
  }

  return (
    <aside className={ `Favorite ${openFavList ? '' : 'Favorite--open'}` }>
      <h2 className="Favorite_title">Favourite</h2>
      <ul className="Favorite_list">
        <JokeItem handleItem={ () => handleItem } id={ 1 } className="Favorite_item" />
        <JokeItem handleItem={ () => handleItem } id={ 2 } className="Favorite_item" />
      </ul>
    </aside>
  )
}

export default FavouriteListView
