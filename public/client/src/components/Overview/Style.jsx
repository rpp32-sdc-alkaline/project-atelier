import React from 'react';

const Style = (props) => {
  const format = {
    height: 100,
    width: 80,
    padding: 10
  }
  return (
  <img style={format} src={props.photos[0].thumbnail_url} onClick={(e)=>props.changeStyle(props.name, props.salePrice)}></img>
  )
}

export default Style;