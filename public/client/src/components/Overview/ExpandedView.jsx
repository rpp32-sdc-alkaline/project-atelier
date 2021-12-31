import React from 'react';
import {useState} from 'react';

class ExpandedView extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      zoom: false
    }

    this.handleCloseClick = this.handleCloseClick.bind(this)
    this.handleZoomClick = this.handleZoomClick.bind(this)
    this.handleMouseMove = this.handleMouseMove.bind(this)
  }

  handleCloseClick() {
    console.log('clicked out of modal')
    this.props.close()
  }

  handleZoomClick() {
    console.log('zoom clicked')
    var zoomState = this.state.zoom
    this.setState({
      zoom: !zoomState
    })
  }

  handleMouseMove(e) {
    this.setState({
      zoom: true
    })
  }

  render() {
    var imageStyle = this.state.zoom ? 'zoom-in' : 'zoom-out'

    if (this.props.isOpen) {

      return (
        <div className={"modal-wrapper"}>
          <div onClick={this.handleCloseClick} className={"modal-backdrop"} />
          <div className={"modal-box"}>
            <button onClick={this.handleCloseClick}>X</button>
          <img onClick={this.handleZoomClick} onMouseMove={this.handleMouseMove}
          className={this.state.zoom} src={this.props.image}/>
          </div>
        </div>
      )
    }
    return null
  }
}



export default ExpandedView;