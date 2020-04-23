import React from 'react'
import './FavouriteListStyle.scss'
import JokeItem from '../JokeItem'
import { JokesListType } from '../../Types'

type Props = {
  openFavList: boolean
  favList: JokesListType
  handleFavorites: any
}

const FavouriteListView: React.FC<Props> = ({ openFavList, favList, handleFavorites }) => {
  return (
    <aside className={ `Favorite ${openFavList ? '' : 'Favorite--open'}` }>
      <h2 className="Favorite_title">Favourite</h2>
      <ul className="Favorite_list">
        { favList.map(({ id, isHeartFullIcon }) => {
          return <JokeItem handleItem={ () => handleFavorites(id) }
            id={ id } key={ id }
            isHeartFullIcon={ isHeartFullIcon }
            className="Favorite_item" />
        }) }
      </ul>
    </aside>
  )
}

export default FavouriteListView
