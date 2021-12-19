import React from 'react'

const Star = (props) => {
  const {color} = props
  let className
  let quarters
  if (typeof color === 'number') {

  } else {
    className = `full-star ${color}`
  }

  return (
    <div>
      <p>I am {color}</p>
    </div>
  )
}

export default Star