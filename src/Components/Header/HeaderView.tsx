import React, { useState } from 'react'
import './HeaderStyle.scss'
import CloseIcon from '../../Images/svg/close.svg'
import { ReactComponent as BurgerIcon } from '../../Images/svg/burger.svg'

const HeaderView: React.FC = () => {
  const [icon, setButtonIcon] = useState(<BurgerIcon />)

  return (
    <header className="Header">
      <h1 className="Header__logo">MSI 2020</h1>
      <button className="Header__menu" aria-label="Open list of favourite jokes">
        { icon }
        <span>Favourite</span>
      </button>
    </header>
  )
}

export default HeaderView
