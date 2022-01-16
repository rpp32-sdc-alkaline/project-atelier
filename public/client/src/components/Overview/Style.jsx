import React from 'react';

const Style = (props) => {

  return (
  <img className={props.selected} src={props.photos[0].thumbnail_url}
  onClick={(e)=>
    props.changeStyle(props.name, props.salePrice, props.skus, props.photos)}>
  </img>
  )
}

export default Style;