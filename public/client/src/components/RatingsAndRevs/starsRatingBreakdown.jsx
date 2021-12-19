import React from 'react'
import Star from './star.jsx'

let StarsRatingBreakdown = (props) => {
  let {average} = props;
  let fullStars = Math.floor(average)
  let quarters = Math.round((average - fullStars)*4)
  let greyStars = Math.floor(5 - average)
  console.log('average', average, 'full stars', fullStars, 'quarters', quarters, 'greystars', greyStars)
  let starsFill=[]
  for (var i = 0; i < fullStars; i++) {
    starsFill.push('gold')
  } starsFill.push(quarters)
  for (var i = 0; i < greyStars; i++) {
    starsFill.push('grey')
  }
  console.log('starsColors', starsFill)
  return (
    <div className="rating-breakdown-stars">
      {starsFill.map((info, i) =>
      <Star starFill={info} key={i}/>)
      }
    </div>
  )
}

export default StarsRatingBreakdown