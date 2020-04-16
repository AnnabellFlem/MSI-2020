import React from 'react'
import './JokesListStyle.scss'
import JokeItem from '../JokeItem'

const JokesListView: React.FC = () => {
  return (
    <ul className="Jokes">
      <JokeItem className="Jokes__item" />
      <JokeItem className="Jokes__item" />
      <JokeItem className="Jokes__item" />
      <JokeItem className="Jokes__item" />
    </ul>
  )
}

export default JokesListView
