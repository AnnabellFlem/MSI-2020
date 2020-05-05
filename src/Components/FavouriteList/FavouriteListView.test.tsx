import React from 'react'
import { mount } from 'enzyme'
import FavouriteList from './FavouriteListView'

const MOCK_HANDLE_FUNC = jest.fn()
const MOCK_OPEN_FAV_LIST = true
const MOCK_FAV_LIST = {
  id: 'string',
  url: 'string',
  text: 'string',
  categories: 'string',
  updatedAt: 'string',
  isFavourite: true,
  isDataFromServer: true
}

describe('<FavouriteList /> test', () => {
  const wrapper = mount(<FavouriteList openFavList={ MOCK_OPEN_FAV_LIST } favList={ [MOCK_FAV_LIST] } handleFavorites={ MOCK_HANDLE_FUNC } />)

  it('Component should render without crashing', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
