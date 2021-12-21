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

  selectThumbnail(photoUrl) {
    console.log('photo', photoUrl)
    this.setState({
      clicked: true,
      selected: photoUrl
    })
  this.props.changeThumbnail(photoUrl)
  }

  render() {
    // var format = {
    //   height: 100,
    //   width: 80,
    //   padding: 10
    // }
    // var className = this.state.clicked ? 'click-state' : 'base-state'

    return (
      <div class="thumbnail-bar">
        {this.props.photos.map((photo) => {
          // console.log('photo.url', photo.url)
          // console.log('this.state.selected', this.state.selected)

          var className = photo.url === this.state.selected ? 'click-state' : 'base-state'
          return (
            <div >
            <img className={className} key={photo.url} onClick={(e)=>{this.selectThumbnail(photo.url)}}
            // style={format}
            src={photo.thumbnail_url}>
            </img>
          </div>
          )
         })
        }
     </div>
    )
  }
}


export default ThumbnailBar;