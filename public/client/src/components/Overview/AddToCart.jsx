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
    var display;
    if (this.props.noSizeSelected) {
      display = <div>Please Select a Size</div>
    }
  return (
    <div>
      {display}
      <button onClick={this.handleClick} style={{margin: 10}}>Add To Cart</button>
    </div>
  )
}
}

export default AddToCart