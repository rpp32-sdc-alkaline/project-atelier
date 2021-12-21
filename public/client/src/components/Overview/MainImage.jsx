import React from 'react'
import ThumbnailBar from './ThumbnailBar.jsx'

class MainImage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentMain: props.photos[0].url
    }
  this.changeThumbnail = this.changeThumbnail.bind(this)
  }

  changeThumbnail(photo) {
    this.setState({
      currentMain: photo,
    })
  }

  render() {
    const format = {
      height: 700,
      width: 590,
      padding: 10
    }
    return (
      <div class="wrapper">
        <img style={format} src={this.state.currentMain}/>
        <ThumbnailBar changeThumbnail={this.changeThumbnail}
        photos={this.props.photos} currentMain={this.state.currentMain}/>
      </div>
    )
  }

}

export default MainImage;