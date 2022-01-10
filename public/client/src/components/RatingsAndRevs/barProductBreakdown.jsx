import React from 'react'
import fullStar from '../../../../../assets/images/full-gold-star.png';

const BarProductBreakdown = (props) => {
  const {position} = props;

  const style = {
    // left: `${position}`
    position: 'relative',
    left: `${position}%`,
    height: '21px',
    width: '21px',
    top: '-0.1em'
  }

  const imgSrc = fullStar

  return (
    <div className="product-breakdown-bar-container">
      <img src={imgSrc} style={style}></img>
      {/* <div className="product-breakdown-pointer"></div> */}
    </div>
  )
}

export default BarProductBreakdown