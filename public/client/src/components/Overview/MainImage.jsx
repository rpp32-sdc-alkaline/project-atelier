import React, {useState} from 'react'
import ThumbnailBar from './ThumbnailBar.jsx'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

class MainImage extends React.Component {
  constructor(props) {
    super(props)
    // console.log('index', this.props.index)
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
    var rightArrow;
    var leftArrow;
    if(this.props.index < this.props.photos?.length - 1 && this.props.index > 0) {
      rightArrow = <FaArrowAltCircleRight className="right-arrow" onClick={this.nextSlide} />
      leftArrow = <FaArrowAltCircleLeft className="left-arrow" onClick={this.prevSlide}/>
    }
    if(this.props.index === 0) {
      leftArrow = <div></div>;
      rightArrow = <FaArrowAltCircleRight className="right-arrow" onClick={this.nextSlide} />
    }
    if(this.props.index === this.props.photos?.length - 1) {
      rightArrow = <div></div>
      leftArrow =  <FaArrowAltCircleLeft className="left-arrow" onClick={this.prevSlide}/>
    }

    return (
      <div className="slider">
        {leftArrow}
        {rightArrow}
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