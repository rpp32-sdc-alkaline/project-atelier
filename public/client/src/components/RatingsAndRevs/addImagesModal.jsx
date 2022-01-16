import React from 'react'

class AddImagesModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoUrls: []
    }
    this.handleCloseClick.bind(this)
  }

  handleCloseClick(e) {
    e.preventDefault()
    this.props.closeModal()
  }

  render() {
    console.log('this.props.show', this.props.show)
    if (!this.props.show) {
      return (
        <div></div>
      )
    } else {
      return (
        <div className="review-modal-backdrop">
          <div className="add-images-modal-box">
          <p>Add Image Modal</p>
          <button onClick={this.handleCloseClick.bind(this)}>X</button>
          </div>
        </div>
      )
    }
  }
}

export default AddImagesModal