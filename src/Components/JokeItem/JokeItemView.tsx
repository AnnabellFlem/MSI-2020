import React from 'react'
import './JokeItemStyle.scss'
import { ReactComponent as HeartFullIcon } from '../../Images/svg/heart-full.svg'
import { ReactComponent as HeartEmptyIcon } from '../../Images/svg/heart-empty.svg'
import { ReactComponent as MessageIcon } from '../../Images/svg/message.svg'
import { ReactComponent as LinkIcon } from '../../Images/svg/link.svg'

type Prop = {
    className: string
}

const JokeItemView: React.FC<Prop> = ({ className }) => {
  return (
    <li className={ `${className} JokeItem` }>
      <div className="JokeItem__wrapper">
        <div className="JokeItem__icons">
          <HeartFullIcon />
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
