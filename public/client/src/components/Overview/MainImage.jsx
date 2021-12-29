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
      // currentMain: props.photos[0].url
    }
  this.changeThumbnail = this.changeThumbnail.bind(this)
  this.nextSlide = this.nextSlide.bind(this)
  this.prevSlide = this.prevSlide.bind(this)
  }

  changeThumbnail(photo) {
    this.setState({
      currentMain: photo
    })
  }

  nextSlide() {
   var newCurrent = this.state.current === this.state.photos.length ? 0
   : this.state.current + 1
   this.setState({
     current: newCurrent
   })

  }

  prevSlide() {
   var newCurrent = this.state.current === 0 ? this.state.photos.length
   :this.state.current - 1
   this.setState({
     current: newCurrent
   })
  }

  componentDidUpdate(prevProps) {
    if(this.props.photos[0] !== prevProps.photos[0]) {
      this.setState({
        currentMain: this.props.photos[0].url,
        photos: this.props.photos
      })
    }
  }

  componentDidMount() {
    this.setState({
      currentMain: this.props.photos[0].url,
      photos: this.props.photos
    })
  }

  render() {
    const format = {
      height: 700,
      width: 590,
      padding: 30
    }
    return (
      <div className="wrapper">
        {/* <img style={format} src={this.state.currentMain}/> */}
        <section className="slider">
          <FaArrowAltCircleLeft className="left-arrow" onClick={this.prevSlide}/>
          <FaArrowAltCircleRight className="right-arrow" onClick={this.nextSlide} />
        {this.state.photos.map((photo, index) => {
          return (
            <div className={index === this.state.current ? 'slide active' : 'slide'} key={index}>
              {index === this.state.current && <img className="image" src={photo.url}/>}
            </div>
          )
        })}
        <ThumbnailBar changeThumbnail={this.changeThumbnail}
        photos={this.props.photos} currentMain={this.state.currentMain}/>
        </section>
      </div>
    )
  }

}

export default MainImage;