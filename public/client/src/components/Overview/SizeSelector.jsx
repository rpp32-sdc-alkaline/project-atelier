import React from 'react'
import SizeDropDown from './SizeDropDown.jsx'

class SizeSelector extends React.Component {
  constructor(props) {
    super(props)
    // console.log('skus', this.props)
    this.state = {
       disabled: false,
       display: '',
       testData: {
        2122801: {quantity: 1, size: 'XS'},
        2122802: {quantity: 0, size: 'S'},
        2122803: {quantity: 0, size: 'M'},
        2122804: {quantity: 0, size: 'L'},
        2122805: {quantity: 0, size: 'XL'},
        2122806: {quantity: 0, size: 'XXL'}
      }
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    console.log('value', e.target.value.split(' '))
    const selected = e.target.value.split(' ')
    const size = selected[0]
    const quantity = selected[1]
    this.props.selectSize(size, quantity)
    if(quantity === '0') {
      this.setState({
        disabled: true
      })
    }

  }

  componentDidMount() {
    var sum = 0;
    var display;
    for (let sku in this.props.skus) {
      const quantity = this.props.skus[sku].quantity
      console.log('quant', quantity)
      sum += quantity
    }
    if (sum === 0) {
       this.setState({
         disabled: true,
         display: 'OUT OF STOCK'
       })
    } else {
      this.setState({
        disabled: false,
        display: 'Select Size'
      })
    }
    console.log('sum', sum)
  }


  render() {
  return (
      <select onChange={this.handleChange} disabled={this.state.disabled}>
        <option>{this.state.display}</option>

        <SizeDropDown
        skus={this.props.skus}
        // skus={this.state.testData}
        />
      </select>
  )
}
}

export default SizeSelector;
