import React from 'react'
import Star from './star.jsx'

let Stars = (props) => {
  let { average, area } = props;
  let fullStars = Math.floor(average)
  let quarters = Math.round((average - fullStars)*4)
  if (quarters === 4) {
    quarters = 'gold'
  }
  let greyStars = Math.floor(5 - average)
  console.log('average', average, 'full stars', fullStars, 'quarters', quarters, 'greystars', greyStars)
  let starsFill=[]
  for (var i = 0; i < fullStars; i++) {
    starsFill.push('gold')
  } if (quarters !== 0) {
    starsFill.push(quarters)
  } for (var i = 0; i < greyStars; i++) {
    starsFill.push('grey')
  }
  console.log('starsColors', starsFill)
  return (
    <div className="stars-row">
      {starsFill.map((info, i) =>
      <Star starFill={info} area={area} key={i}/>)
      }
    </div>
  )
}

export default Stars