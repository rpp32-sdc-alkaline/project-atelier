import React from 'react'

const AddToCart = (props) => {

  const handleClick = () => {
    console.log('handleclick called')
    props.addToCart()

  }
  return (
    <button onClick={handleClick} style={{margin: 10}}>Add To Cart</button>
  )
}

export default AddToCart