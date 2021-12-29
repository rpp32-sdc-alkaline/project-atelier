import React from 'react'

class ThumbnailBar extends React.Component {
  constructor(props) {
    super(props)
    var photos = [...this.props.photos, ...this.props.photos]
    this.state = {
      clicked: false,
      selected: '',
      photos: photos,
      scrolledPhotos: null,
      currentTopIndex: 0
    }
  this.selectThumbnail = this.selectThumbnail.bind(this)
  this.handleUpClick = this.handleUpClick.bind(this)
  }

  selectThumbnail(photoUrl) {
    // console.log('photo', photoUrl)
    this.setState({
      clicked: true,
      selected: photoUrl
    })
  this.props.changeThumbnail(photoUrl)
  }

  handleUpClick(e) {
    const photos = this.state.photos.slice()
    const index = photos.length - 1
    const photo = photos[index]

    photos.splice(index, 1)
    photos.unshift(photo)

    this.setState({
      photos: photos,
      currentTopIndex: index
    })
  };

  // componentDidMount() {
  //     if (!this.state.scrolledPhotos) {
  //       this.setState({
  //         photos: [...this.props.photos, ...this.props.photos]
  //       })
  //     }
  //   }

  render() {
    // var format = {
    //   height: 100,
    //   width: 80,
    //   padding: 10
    // }
    // var className = this.state.clicked ? 'click-state' : 'base-state'
    var upArrow;
    var downArrow;
    var index;
    var photos;
    if (this.state.photos.length > 6) {
      upArrow = <img className="up-arrow" onClick={this.handleUpClick} src="https://img.icons8.com/color/30/000000/circled-chevron-up--v1.png"/>
      downArrow = <img className="down-arrow" src="https://img.icons8.com/color/30/000000/circled-chevron-down--v1.png"/>
    }
    // if (!this.state.scrolledPhotos) {
    //    photos = this.state.photos
    // } else {
    //   photos = this.state.scrolledPhotos
    // }
    return (
      <div className="thumbnail-bar">
        {upArrow}
        {this.state.photos.map((photo, index) => {
          // console.log('photo index', photo)
          // console.log('this.state.selected', this.state.selected)
          if (index < 7) {
            var className = photo.url === this.state.selected ? 'click-state' : 'base-state'
            return (
              <div key={index}>
              <img className={className} onClick={(e)=>{this.selectThumbnail(photo.url)}}
              src={photo.thumbnail_url}>
              </img>
            </div>
            )
           }
          })
        }
        {downArrow}
     </div>
    )
  }
}



export default ThumbnailBar;

