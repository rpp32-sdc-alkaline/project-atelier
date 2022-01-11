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
  //   // console.log('handleclick called')
  //   var $size = $(".size-selector").val()
  //   // if (this.props.size === 'Select Size') {
  //     console.log('$size', $size)
  //   if ($size === 'Select Size') {
  //   //  this.props.openSizeDropDown()
  //   console.log('size', $size)
  //   this.setState({
  //     noSizeSelected: true
  //   })
  //  } else {
  //   this.props.addToCart()
  // }
  this.props.addToCart()
}


  render() {
    console.log('no size selected', this.props.noSizeSelected)
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
      {/* <button onClick={this.handleClick} style={{margin: 10}} disabled={this.props.disable}>Add To Cart</button> */}
    </div>
  )
}
}

export default AddToCart