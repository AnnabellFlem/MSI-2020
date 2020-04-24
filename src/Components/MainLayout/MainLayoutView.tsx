import React from 'react'
import './MainLayoutStyle.scss'
import SearchPanel from '../SearchPanel'
import JokesList from '../JokesLIst'
import { ModJokesListType } from '../../Types'

type Props = {
  list: ModJokesListType
  handleJokesList: any
}

const MainLayoutView: React.FC<Props> = ({ list, handleJokesList }) => {
  return (
    <main>
      <section className="main">
        <h2 className="main__title">
          <strong>Hey!</strong>
          Let’s try to find a joke for you:
        </h2>
        <SearchPanel />
        <JokesList handleJokesList={ handleJokesList }
          list={ list } />
      </section>
    </main>
  )
}

export default MainLayoutView
