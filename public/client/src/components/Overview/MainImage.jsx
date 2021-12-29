import React, {useState} from 'react'
import ThumbnailBar from './ThumbnailBar.jsx'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

class MainImage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentMain: '',
      photos: [],
      current: 0
    }
  // this.changeThumbnail = this.changeThumbnail.bind(this)
  this.nextSlide = this.nextSlide.bind(this)
  this.prevSlide = this.prevSlide.bind(this)
  }

  nextSlide() {
   this.props.mainImageNext()
  }

  prevSlide() {
  this.props.mainImagePrev()
  }

  render() {
    const format = {
      height: 700,
      width: 590,
      padding: 30
    }
    return (
      <div className="slider">
          <FaArrowAltCircleLeft className="left-arrow" onClick={this.prevSlide}/>
          <FaArrowAltCircleRight className="right-arrow" onClick={this.nextSlide} />
            <img style={format} src={this.props.image}/>
      </div>
    )
  }
}

export default MainImage;

 // <div className={index === this.state.current ? 'slide active' : 'slide'} key={index}>
            //   {index === this.state.current && <img className="image" src={photo.url}/>}
            // </div>
 {/* <ThumbnailBar changeThumbnail={this.changeThumbnail}
        photos={this.props.photos} currentMain={this.state.currentMain}/> */}