import React from 'react'
import ThumbnailBar from './ThumbnailBar.jsx'

class MainImage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentMain: ''
      // currentMain: props.photos[0].url
    }
  this.changeThumbnail = this.changeThumbnail.bind(this)
  }

  changeThumbnail(photo) {
    this.setState({
      currentMain: photo
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
        <img style={format} src={this.state.currentMain}/>
        <ThumbnailBar changeThumbnail={this.changeThumbnail}
        photos={this.props.photos} currentMain={this.state.currentMain}/>
      </div>
    )
  }

}

export default MainImage;