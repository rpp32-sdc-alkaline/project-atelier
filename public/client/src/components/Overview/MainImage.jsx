import React, {useState} from 'react'
import ThumbnailBar from './ThumbnailBar.jsx'
import ExpandedView from './ExpandedView.jsx'
import Modal from 'react-modal'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

class MainImage extends React.Component {
  constructor(props) {
    super(props)
    // console.log('index', this.props.index)
    this.state = {
     hovered: false,
     expand: false
    }
  // this.changeThumbnail = this.changeThumbnail.bind(this)
  this.nextSlide = this.nextSlide.bind(this)
  this.prevSlide = this.prevSlide.bind(this)
  this.handleMouseEnter = this.handleMouseEnter.bind(this)
  this.handleClick = this.handleClick.bind(this)
  }

  nextSlide() {
   this.props.mainImageNext()
  }

  prevSlide() {
  this.props.mainImagePrev()
  }

  handleMouseEnter() {
    this.setState({
      hovered: true
    })
  }

  handleClick() {
    console.log('image clicked')
    this.setState({
      expand: true
    })
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
    var cursor = this.state.hovered ? 'hovered' : 'not-hovered'

    return (
      <div className="slider">
        {leftArrow}
        {rightArrow}
            <img className={cursor} onMouseEnter={this.handleMouseEnter} onClick={this.handleClick} style={format} src={this.props.image}/>
            <ExpandedView isOpen={this.state.expand} image={this.props.image}/>

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