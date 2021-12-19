import React from 'react'
import DropDownList from './DropDownList.jsx'

class SizeSelector extends React.Component {
  constructor(props) {
    super(props)
    // console.log('skus', this.props)
    this.state = {
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
       selectedSize: '',
       selectValue: '',
       testData: {
        2122801: {quantity: 8, size: 'XS'},
        2122802: {quantity: 0, size: 'S'},
        2122803: {quantity: 17, size: 'M'},
        2122804: {quantity: 0, size: 'L'},
        2122805: {quantity: 15, size: 'XL'},
        2122806: {quantity: 6, size: 'XXL'}
      }
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    console.log('value', e.target.value)
    const quantity = e.target.value
    // this.props.selectSize(e.target.value)
    if(quantity === 0) {
      this.setState({
        selectValue: 'OUT OF STOCK'
      })
    } else {
      this.setState({
        selectValue: e.target.value
      })
    }
  }

  render() {
    var placeholder;
    if(this.state.outOfStock) {
      placeholder = 'OUT OF STOCK'
    } else {
      placeholder = 'Select Size'
    }
  return (
      <select value={this.state.selectValue} onChange={this.handleChange}>
        <option>{placeholder}</option>
        <DropDownList
        data={this.state.sizes}
        // skus={this.props.skus}
        skus={this.state.testData}
        value={this.state.selectValue}
        handleChange={this.handleChange}
        />
      </select>
  )
}
}

export default SizeSelector;
