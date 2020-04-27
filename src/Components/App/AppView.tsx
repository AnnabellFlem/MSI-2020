import React from 'react'
import MainPage from '../MainPage'
import './AppStyles.scss'

const AppView: React.FC = () => {
  const list = [{
    id: 1, name: 'aaa', description: 'aaaa'
  }, {
    id: 2, name: 'qqq', description: 'ad'
  }, {
    id: 3, name: 'qqq', description: 'aaaaaaa'
  }, {
    id: 4, name: 'qqq', description: 'aaaaa'
  }, {
    id: 5, name: 'qqq', description: 'aaraa'
  }, {
    id: 6, name: 'qqq', description: 'aataa'
  }, {
    id: 7, name: 'qqq', description: 'aauaa'
  }, {
    id: 8, name: 'qqq', description: 'aaiaa'
  }, {
    id: 9, name: 'qqq', description: 'aaoaa'
  }, {
    id: 10, name: 'qqq', description: 'aamaa'
  }, {
    id: 11, name: 'qqq', description: 'aaana'
  }]

  return (
    <div className="App">
      <MainPage list={ list } />
    </div>
  )
}

export default AppView
