import React from 'react'

class AddToCart extends React.Component {
  constructor(props) {
    super(props)

  this.state= {
    noSizeSelected: false,
  }
  this.handleClick = this.handleClick.bind(this)
}

  handleClick() {
    // console.log('handleclick called')
    if (this.props.size === 'Select Size') {
     this.props.openSizeDropDown()
   } else {
    this.props.addToCart()
  }
}

  render() {
    var button;
    var display;
    if (this.props.hide) {
      button = null
    } else {
      button = <button onClick={this.handleClick} style={{margin: 10}} disabled={this.props.disable}>Add To Cart</button>
      if (this.props.noSizeSelected) {
        display = <div>Please Select a Size</div>
      }
    }
  return (
    <div>
      {display}
      {button}
      {/* <button onClick={this.handleClick} style={{margin: 10}} disabled={this.props.disable}>Add To Cart</button> */}
    </div>
  )
}
}

export default AddToCart