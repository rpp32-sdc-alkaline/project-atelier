import React from 'react'
import Star from './star.jsx'

let StarsRatingBreakdown = (props) => {
  let {average} = props;
  let fullStars = Math.floor(average)
  let quarters = Math.round((average - fullStars)*4)
  let greyStars = Math.floor(5 - average)
  console.log('average', average, 'full stars', fullStars, 'quarters', quarters, 'greystars', greyStars)
  let starsColors=[]
  for (var i = 0; i < fullStars; i++) {
    starsColors.push('gold')
  } starsColors.push(quarters)
  for (var i = 0; i < greyStars; i++) {
    starsColors.push('grey')
  }
  console.log('starsColors', starsColors)
  return (
    <div>
      {/* {starsColors.map((color) =>
      <Star color={color}/>)
      } */}
    </div>
  )
}

export default StarsRatingBreakdown