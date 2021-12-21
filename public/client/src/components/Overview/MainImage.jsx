import React from 'react'
import ThumbnailBar from './ThumbnailBar.jsx'

const MainImage = (props) => {
  const format = {
    height: 700,
    width: 590,
    padding: 10
  }
  return (
    <div class="wrapper">
      <img style={format} src={props.photos[0].url}/>
      <ThumbnailBar photos={props.photos} />
    </div>
  )
}

export default MainImage;