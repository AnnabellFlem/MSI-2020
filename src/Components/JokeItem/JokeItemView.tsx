import React from 'react'
import './JokeItemStyle.scss'
import { ReactComponent as HeartFullIcon } from '../../Images/svg/heart-full.svg'
import { ReactComponent as HeartEmptyIcon } from '../../Images/svg/heart-empty.svg'
import { ReactComponent as LinkIcon } from '../../Images/svg/link.svg'
import { ModJokesType } from '../../Types'

type Props = {
    className: string
    handleItem: (id: string) => void
} & ModJokesType

const JokeItemView: React.FC<Props> = ({ className, handleItem, ...props }) => {
  const imgWidth = 60
  const imgHeight = 60

  return (
    <li className={ `${className} JokeItem` }>
      <div className="JokeItem__wrapper">
        <div className="JokeItem__icons">
          { (props.isFavourite)
            ? <HeartFullIcon onClick={ () => handleItem(props.id) } />
            : <HeartEmptyIcon onClick={ () => handleItem(props.id) } /> }
          <img src={ `${props.icon}` } alt="just a Chuck" width={ imgWidth } height={ imgHeight } />
        </div>
        <div className="JokeItem__text-wrapper">
          <div className="JokeItem__link">
            <span>ID:</span>
            <a href="">{ props.url }</a>
            <LinkIcon />
          </div>
          <p className="JokeItem__text">
            { props.text }
          </p>
          <div className="JokeItem__info-wrapper">
            <small className="JokeItem__info">Last update: <mark> { props.updatedAt } </mark></small>
            { props.categories.length
              ? <div className="JokeItem__category">
                <span>{ props.categories }</span>
              </div> : undefined }
          </div>
        </div>
      </div>
    </li>
  )
}

export default JokeItemView
