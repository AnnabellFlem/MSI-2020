import React from 'react'
import './MainLayoutStyle.scss'
import SearchPanel from '../SearchPanel'
import JokesList from '../JokesLIst'

const MainLayoutView: React.FC = () => {
  return (
    <main>
      <section className="main">
        <h2 className="main__title">
          <strong>Hey!</strong>
                Let’s try to find a joke for you:
        </h2>
        <SearchPanel />
        <JokesList />
      </section>
    </main>
  )
}

export default MainLayoutView
