import React from 'react'

const SizeDropDown = (props) => {
  // console.log('props.skus', props.skus)
  let content = []
   for (let sku in props.skus) {
      const skuObject = props.skus[sku]
      const quantity = props.skus[sku].quantity
      const size = props.skus[sku].size
      const quanAndSize = `${size} ${quantity}`
      console.log('valuestring', quanAndSize)

      // console.log('sku in loop', size )
      if (quantity) {
        content.push(<option key={sku} value={quanAndSize}>{size}</option>)
      }
   }
  return content
}

export default SizeDropDown;