import React from 'react'
import './SearchPanelStyle.scss'

const SearchPanelView: React.FC = () => {
  return (
    <div className="SearchPanel">
      <div className="SearchPanel__item">
        <input className="SearchPanel__input" type="radio" id="random" name="filters" value="random" defaultChecked />
        <label htmlFor="random">Random</label>
      </div>
      <div className="SearchPanel__item">
        <input className="SearchPanel__input" type="radio" id="categories" name="filters" value="categories" />
        <label htmlFor="categories">From categories</label>
        <ul className="SearchPanel__categories">
          <li>
            <input className="SearchPanel__checkbox" id="animal" type="checkbox" value="animal" defaultChecked />
            <label htmlFor="animal">animal</label>
          </li>
          <li>
            <input className="SearchPanel__checkbox" id="career" type="checkbox" value="career" />
            <label htmlFor="career">career</label>
          </li>
          <li>
            <input className="SearchPanel__checkbox" id="celebrity" type="checkbox" value="celebrity" />
            <label htmlFor="celebrity">celebrity</label>
          </li>
          <li>
            <input className="SearchPanel__checkbox" id="dev" type="checkbox" value="dev" />
            <label htmlFor="dev">dev</label>
          </li>
        </ul>
      </div>
      <div className="SearchPanel__item">
        <input className="SearchPanel__input" type="radio" id="search" name="filters" value="search" />
        <label htmlFor="search">Search</label>
        <input className="SearchPanel__search" type="search" id="SiteSearch" name="search"
          placeholder="Free text search..."
          aria-label="Search through jokes" />
      </div>
      <button className="SearchPanel__button" >
        <span>Get a joke</span>
      </button>
    </div>
  )
}

export default SearchPanelView
