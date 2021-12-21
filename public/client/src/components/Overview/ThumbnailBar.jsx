import React from 'react'

class ThumbnailBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      clicked: false,
      selected: ''
    }
  this.selectThumbnail = this.selectThumbnail.bind(this)
  }

  selectThumbnail(photo) {
    this.setState({
      clicked: true,
      selected: photo.url
    })
  this.props.changeThumbnail(photo)
  }

  render() {
    // var format = {
    //   height: 100,
    //   width: 80,
    //   padding: 10
    // }
    // var className = this.state.clicked ? 'click-state' : 'base-state'
    var className;
    return (
      <div class="thumbnail-bar">
        {this.props.photos.map((photo) => {
          className = photo.url === this.state.selected ? 'click-state' : 'base-state'
          return (
            <img class={className} key={photo.url} onClick={(e)=>{this.selectThumbnail(photo.url)}}
            // style={format}
            src={photo.thumbnail_url}>
            </img>
          )
         })
        }
     </div>
    )
  }
}


export default ThumbnailBar;