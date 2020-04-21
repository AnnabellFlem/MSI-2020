import React from 'react'
import './JokesListStyle.scss'
import JokeItem from '../JokeItem'

type Props = {
  list: {id: number}[]
}

const JokesListView: React.FC<Props> = ({ list }) => {
  const handleItem = (id: number) => {
    console.log(id)
  }

  return (
    <div className="Jokes">
      <ul className="Jokes__list">
        { list.map(({ id }) => {
          return <JokeItem handleItem={ () => handleItem(id) } id={ id } className="Jokes__item" key={ id } />
        }) }
      </ul>
    </div>
  )
}

export default JokesListView
