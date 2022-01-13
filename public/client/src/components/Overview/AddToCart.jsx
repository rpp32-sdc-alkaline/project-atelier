import React from 'react'
import $ from 'jquery'

class AddToCart extends React.Component {
  constructor(props) {
    super(props)

  this.state= {
    noSizeSelected: false,
  }
  this.handleClick = this.handleClick.bind(this)
}

  handleClick() {
  this.props.addToCart()
}


  render() {
    var button;
    var display;
    if (this.props.hide) {
      button = null
    } else {
      button = <button className="add-to-cart" onClick={this.handleClick} disabled={this.props.disable}>Add To Cart</button>
      if (this.props.noSizeSelected) {
        display = <div className="select-size-alert">Please Select a Size</div>
      }
    }
  return (
    <div>
      {display}
      {button}
    </div>
  )
}
}

export default AddToCart