import React from 'react'

const ThumbnailBar = (props) => {
  const format = {
    height: 100,
    width: 80,
    padding: 10
  }
  return (
    <div class="thumbnail-bar">
      {props.photos.map((photo) =>
        <img style={format} src={photo.thumbnail_url}></img>
      )}
    </div>
  )
}


export default ThumbnailBar;