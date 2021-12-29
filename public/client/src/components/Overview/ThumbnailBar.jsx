import React from 'react'

class ThumbnailBar extends React.Component {
  constructor(props) {
    super(props)
    var photos = [...this.props.photos]
    this.state = {
      clicked: false,
      selected: '',
      photos: photos,
      scrolledPhotos: null,
      currentTopIndex: 0
    }
  this.selectThumbnail = this.selectThumbnail.bind(this)
  this.handleUpClick = this.handleUpClick.bind(this)
  this.handleDownClick = this.handleDownClick.bind(this)
  }

  selectThumbnail(photoUrl, index) {
    console.log('photo', index)
    this.setState({
      clicked: true,
      selected: photoUrl
    })
  this.props.changeThumbnail(photoUrl, index)
  }

  handleUpClick(e) {
    const photos = this.props.photos.slice()
    const index = photos.length - 1
    const photo = photos[index]

    photos.splice(index, 1)
    photos.unshift(photo)

    this.props.thumbnailScrollUp(photos)
  };

  handleDownClick() {
    const photos = this.props.photos.slice()
    const photo = photos[0]

    photos.splice(0, 1)
    photos.push(photo)

    this.props.thumbnailScrollDown(photos)
  }

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
    if (this.state.photos.length > 5) {
      upArrow = <img className="up-arrow" onClick={this.handleUpClick}
      src="https://img.icons8.com/color/30/000000/circled-chevron-up--v1.png"/>
      downArrow = <img className="down-arrow" onClick={this.handleDownClick}
      src="https://img.icons8.com/color/30/000000/circled-chevron-down--v1.png"/>
    }
    return (
      <div className="thumbnail-bar">
        {upArrow}
        {this.props.photos.map((photo, index) => {
          // console.log('photo index', photo)
          // console.log('this.state.selected', this.state.selected)
          if (index < 7) {
            var className = photo.url === this.state.selected ? 'click-state' : 'base-state'
            return (
              <div key={index}>
              <img className={className} onClick={(e)=>{this.selectThumbnail(photo.url, index)}}
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

