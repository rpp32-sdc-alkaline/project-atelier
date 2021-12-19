import React from 'react'

const DropDownList = (props) => {
  // console.log('props.skus', props.skus)
  let content = []
   for (let sku in props.skus) {
      const quantity = props.skus[sku].quantity
      const size = props.skus[sku].size
      // console.log('sku in loop', size )
      content.push(<option key={sku} value={quantity} quantity={quantity}>{size}</option>)
   }
  return content
}

export default DropDownList;