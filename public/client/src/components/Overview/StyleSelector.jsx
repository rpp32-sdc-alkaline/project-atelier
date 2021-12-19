import React from 'react'
import Style from './Style.jsx'
// const imageThumbnail = require('image-thumbnail')

const StyleSelector = (props) => {
  const styles = props.styles
  return (
    <div>
    {styles.map(style =>
    <Style key={style.style_id}
    name={style.name} originalPrice={style.original_price}
    salePrice={style.sale_price} default={style.default} photos={style.photos} skus={style.skus} changeStyle={props.changeStyle}/> )
    }
  </div>
  )

}




export default StyleSelector;

