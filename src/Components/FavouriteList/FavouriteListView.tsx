import React from 'react'
import './FavouriteListStyle.scss'
import JokeItem from '../JokeItem'
import { ModJokesListType } from '../../Types'

type Props = {
  openFavList: boolean
  favList: ModJokesListType
  handleFavorites: any
}

const FavouriteListView: React.FC<Props> = ({ openFavList, favList, handleFavorites }) => {
  return (
    <aside className={ `Favorite ${openFavList ? '' : 'Favorite--open'}` }>
      <h2 className="Favorite_title">Favourite</h2>
      <ul className="Favorite_list">
        { favList.map(({ id, isFavourite }) => {
          if (isFavourite) {
            return <JokeItem handleItem={ () => handleFavorites(id) }
              id={ id } key={ id }
              isFavourite={ isFavourite }
              className="Favorite_item" />
          }
        }) }
      </ul>
    </aside>
  )
}

export default FavouriteListView
