import React from 'react';
import {useState, useEffect} from 'react';
import $ from 'jquery'

const ExpandedView = (props) => {


  const [zoom, setZoom] = useState(false)
  const [imageStyle, setImageStyle] = useState('zoom-out')
  //when compdoesmount and when zoom (whatever is in array) state changes, runs
  //use reducer, use dispatch, use ref, use callback robin wieruch--react blog


  useEffect(()=> {
    if(zoom) {
      setImageStyle('zoom-in')
    } else {
      setImageStyle('zoom-out')
    }
  }, [zoom])

  const handleCloseClick = () => {
    setZoom(false)
    props.close()
  }

  const handleZoomClick = () => {
    setZoom(prev => !prev)
    //setImage
  }

  const handleMouseMove = () => {
    const {clientX: x, clientY: y} = event;
    var $image = $('img')
    $image.css('transform-origin', `${x}px ${y}px`)
  }

  // var imageStyle = zoom ? 'zoom-in' : 'zoom-out'
    if (props.isOpen) {
      return (
        <div className={"modal-wrapper"}>
          <div onClick={handleCloseClick} className={"modal-backdrop"} />
            <div className={"modal-box"}>
              <button onClick={handleCloseClick}>X</button>

              <div className="icon-wrapper">
              {props.photos.map((photo, index) =>
                <div key={index} className={"thumbnail-icon"}>test</div>
                )}
                </div>
              <img onClick={handleZoomClick} onMouseMove={handleMouseMove}
              className={imageStyle} src={props.image}/>
              </div>

        </div>
      )
    }
    return null
}

export default ExpandedView


