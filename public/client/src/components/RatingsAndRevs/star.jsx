import React from 'react'
import fullStar from '../../../../../assets/images/full-gold-star.png'
import oneQuarterStar from '../../../../../assets/images/one-quarter-gold-star.png'
import halfStar from '../../../../../assets/images/one-half-gold-star.png'
import threeQuartersStar from '../../../../../assets/images/three-quarters-gold-star.png'
import outlineStar from '../../../../../assets/images/star-outline.png'

const Star = (props) => {
  const { starFill, area } = props
  let imgSrc
  let style
  if (typeof starFill === 'number') {
    if (starFill === 1) {
      imgSrc = oneQuarterStar
    } else if (starFill === 2) {
      imgSrc = halfStar
    } else if (starFill === 3) {
      imgSrc = threeQuartersStar
    }
  } else if (starFill === 'gold') {
    imgSrc = fullStar
  } else if (starFill === 'grey') {
    imgSrc = outlineStar
  } if (area === 'review') {
    style = {
      height: '20px',
      width: '20px'
    }
  } else {
    style = {
      height: '35px',
      width: '35px'
    }
  }
  return (
    <div className="star-column">
      <img src={imgSrc} style={style}></img>
    </div>
  )
}

export default Star