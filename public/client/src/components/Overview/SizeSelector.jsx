import React from 'react'
import SizeDropDown from './SizeDropDown.jsx'

class SizeSelector extends React.Component {
  constructor(props) {
    super(props)
    // console.log('skus', this.props)
    this.state = {
       disabled: false,
       display: '',
       openList: false,
       testData: {
        2122801: {quantity: 0, size: 'XS'},
        2122802: {quantity: 0, size: 'S'},
        2122803: {quantity: 0, size: 'M'},
        2122804: {quantity: 0, size: 'L'},
        2122805: {quantity: 0, size: 'XL'},
        2122806: {quantity: 0, size: 'XXL'}
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.openDropDown = this.openDropDown.bind(this)
  }

  handleChange(size, quantity) {
    // console.log('value', size)
    this.props.selectSize(size, quantity)
    this.setState({
      openList: false,
      display: size
    })

      //if they've selected a size aka not 'Select Size'
      //then change 'selected' state prop to true --> allow add to cart
      //form input type as form --> dropdown
    };

  openDropDown() {
    // console.log('open drop down called')
    this.setState({
      openList: true
    })
    // return (
    //   <SizeDropDown skus={this.props.skus} handleChange={this.handleChange}/>
    //   // skus={this.state.testData}
    // )
  }

  componentDidMount() {
    var sum = 0;
    var display;
    for (let sku in this.props.skus) {
      const quantity = this.props.skus[sku].quantity
      // console.log('quant', quantity)
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
    // console.log('sum', sum)
  }


  render() {
    var list;
    if(this.state.openList) {
      list = <SizeDropDown skus={this.props.skus} handleChange={this.handleChange}/>
    } else {
      list = null
    }
  return (
   <div>
     <button onClick={this.openDropDown}>{this.state.display}</button>
     {/* <div style={{margin: 10}} onClick={this.openDropDown}>{this.state.display}</div> */}

     {list}
   </div>


      // <select style={{margin: 10}} onChange={this.handleChange} disabled={this.state.disabled}>
      //   <option>{this.state.display}</option>

      //   <SizeDropDown
      //   skus={this.props.skus}
      //   // skus={this.state.testData}
      //   />
  // </select>
  )
}
}

export default SizeSelector;
