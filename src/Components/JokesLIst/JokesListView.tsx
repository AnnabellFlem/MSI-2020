import React from 'react'
import './JokesListStyle.scss'
import JokeItem from '../JokeItem'
import { JokesListType } from '../../Types'

type Props = {
  list: JokesListType
  handleJokesList: any
}

const JokesListView: React.FC<Props> = ({ list, handleJokesList }) => {
  return (<div className="Jokes">
    <ul className="Jokes__list">
      { list.map(({ id, isHeartFullIcon }) => {
        return <JokeItem handleItem={ () => handleJokesList(id) }
          id={ id }
          isHeartFullIcon={ isHeartFullIcon }
          className="Jokes__item"
          key={ id } />
      }) }
    </ul>
  </div>)
}

export default JokesListView
