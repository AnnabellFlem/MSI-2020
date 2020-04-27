import React, { useEffect } from 'react'
import './JokesListStyle.scss'
import JokeItem from '../JokeItem'
import { ModJokesListType } from '../../Types'
import LazyLoad from 'react-lazyload'
import Loader from '../Loader'

type Props = {
  list: ModJokesListType
  handleJokesList: any
}

const JokesListView: React.FC<Props> = ({ list, handleJokesList }) => {
  return (<div className="Jokes">
    <ul className="Jokes__list">
      { list.map(({ id, isFavourite, description }) => {
        return <LazyLoad key={ id } overflow placeholder={ <Loader /> } >
          <JokeItem handleItem={ () => handleJokesList(id) }
            id={ id }
            isFavourite={ isFavourite }
            className="Jokes__item"
            key={ id }
            description = { description } />
        </LazyLoad>
      }) }
    </ul>
  </div>)
}

export default JokesListView
