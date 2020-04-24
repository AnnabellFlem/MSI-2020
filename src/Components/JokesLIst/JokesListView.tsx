import React from 'react'
import './JokesListStyle.scss'
import JokeItem from '../JokeItem'
import { ModJokesListType } from '../../Types'

type Props = {
  list: ModJokesListType
  handleJokesList: any
}

const JokesListView: React.FC<Props> = ({ list, handleJokesList }) => {
  return (<div className="Jokes">
    <ul className="Jokes__list">
      { list.map(({ id, isFavourite }) => {
        return <JokeItem handleItem={ () => handleJokesList(id) }
          id={ id }
          isFavourite={ isFavourite }
          className="Jokes__item"
          key={ id } />
      }) }
    </ul>
  </div>)
}

export default JokesListView
