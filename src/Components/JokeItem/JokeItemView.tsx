import React from 'react'
import './JokeItemStyle.scss'
import { ReactComponent as HeartFullIcon } from '../../Images/svg/heart-full.svg'
import { ReactComponent as HeartEmptyIcon } from '../../Images/svg/heart-empty.svg'
import { ReactComponent as MessageIcon } from '../../Images/svg/message.svg'
import { ReactComponent as LinkIcon } from '../../Images/svg/link.svg'

type Prop = {
    className: string
    handleItem: any
    id: number
    isFavourite: boolean
}

const JokeItemView: React.FC<Prop> = ({ className, handleItem, id, isFavourite }) => {
  const heartClick = (id: number) => {
    handleItem(id)
  }

  return (
    <li className={ `${className} JokeItem` }>
      <div className="JokeItem__wrapper">
        <div className="JokeItem__icons">
          { (isFavourite)
            ? <HeartFullIcon onClick={ () => heartClick(id) } />
            : <HeartEmptyIcon onClick={ () => heartClick(id) } /> }
          <MessageIcon />
        </div>
        <div className="JokeItem__text-wrapper">
          <div className="JokeItem__link">
            <span>ID:</span>
            <a href="">XNaAxUduSw6zANDaIEab7A</a>
            <LinkIcon />
          </div>
          <p className="JokeItem__text">
                No one truly knows whos Chuck Norris real father.
                No one is biologically strong enough for this.
                He mustve conceived himself.
          </p>
          <div className="JokeItem__info-wrapper">
            <small className="JokeItem__info">Last update: <mark>1923 hours ago</mark></small>
            <div className="JokeItem__category">
              <span>celebrity</span>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

export default JokeItemView
