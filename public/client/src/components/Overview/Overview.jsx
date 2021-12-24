import React from 'react'
import StarRating from './starRating.jsx'
import Category from './Category.jsx'
import ProductTitle from './ProductTitle.jsx'
import Description from './Description.jsx'
import Price from './Price.jsx'
import StyleSelector from './StyleSelector.jsx'
import SizeSelector from './SizeSelector.jsx'
import QuantitySelector from './QuantitySelector.jsx'
import AddToCart from './AddToCart.jsx'
import MainImage from './MainImage.jsx'
import axios from 'axios'
var token = require('../../../dist/config.js')

class Overview extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      product: [],
      ratings: {},
      styles: [],
      displayedStyleName: '',
      skus: {},
      salePrice: null,
      selectedStylePhotos: [],
      hasData: false,
      selectedSize: 'Select Size',
      showSizes: false,
      noSizeSelected: false,
      availableQuantity: '',
      selectedQuantity: '',
      hideAddToCart: false,
      displayAddToCart: false,
      cart: []
    }

    this.getProductData = this.getProductData.bind(this)
    this.changeStyle = this.changeStyle.bind(this)
    this.selectSize = this.selectSize.bind(this)
    this.selectQuantity = this.selectQuantity.bind(this)
    this.addToCart = this.addToCart.bind(this)
    this.hideAddToCart = this.hideAddToCart.bind(this)
    this.openSizeDropDown = this.openSizeDropDown.bind(this)
  };

  getProductData(id)  {
      let productUrl = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${id}`
      let ratingsUrl = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta?&product_id=${id}`
      let stylesUrl = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${id}/styles`
      let headers = {
        'Authorization': token.TOKEN
      }
    axios.get(productUrl, {headers})
    .then(result => {
      // console.log('product by id', result.data)
      this.setState({
        product: result.data
      })
    })
    .then(() => {
      axios.get(ratingsUrl, {headers})
      .then(result => {
        // console.log('ratings data', result.data)
        this.setState({
          ratings: result.data.ratings
        })
      })
    })
   .then(() => {
     axios.get(stylesUrl, {headers})
     .then(result => {
      //  console.log('result from styles', result.data)
       this.setState({
         styles: result.data.results,
         displayedStyleName: result.data.results[0].name,
         selectedStylePhotos: result.data.results[0].photos,
         skus: result.data.results[0].skus,
         salePrice: result.data.results[0].sale_price,
         hasData: true
       })
     })
   })
    .catch(err =>
      console.log('error in get product by id')
    )
 };

  changeStyle(name, salePrice, skus, photos) {
    console.log('change style display called', photos)
    this.setState({
      displayedStyleName: name,
      skus: skus,
      salePrice: salePrice,
      selectedStylePhotos: photos
    })
  };

  selectSize(size, available) {
    // console.log('select size called', size)
    // console.log('available', Number(available))
    this.setState({
      selectedSize: size,
      availableQuantity: Number(available),
      selectedQuantity: 1,
      showSizes: false,
      noSizeSelected: false
    })
  };

  selectQuantity(quantity) {
    // console.log('selectquantity called', quantity)
    this.setState({
      selectedQuantity: quantity
    })
  };

  openSizeDropDown() {
    // console.log('open size parent called')
    this.setState({
      showSizes: true,
      noSizeSelected: true
    })
  }

  addToCart() {
    console.log('add to cart called')
    this.setState({
      displayAddToCart: true
    })
  }

  hideAddToCart() {
    console.log('hide add to cart called')
    this.setState({
      hideAddToCart: true
    })

  }

  //on component did mount-- query api for products
  componentDidMount() {
    this.setState({
      'id': this.props.id
    })
    this.getProductData(this.props.id)
  }


  render() {
    if (!this.state.hasData) {
      return <div>Loading Product Overview</div>
    } else {
      var description;
      var displayAdded;
      if(this.state.product.description) {
        description = <Description description={this.state.product.description} />
      }
      if(this.state.displayAddToCart) {
        displayAdded = <div>
          <p>{`${this.state.displayedStyleName}`}</p>
          <p>{`size: ${this.state.selectedSize}`}</p>
          <p>{`qty: ${this.state.selectedQuantity}`}</p>
          <p>added to cart!</p>
        </div>
      }
    }

      return (
        <div>
          <h2>Overview</h2>
          <StarRating ratings={this.state.ratings}/>
          <Category category = {this.state.product.category}/>
          <ProductTitle name={this.state.product.name}/>
          <Price price={this.state.product.default_price} salePrice={this.state.salePrice}/>
          {description}
          <MainImage photos={this.state.selectedStylePhotos} />
          <h3>{this.state.displayedStyleName}</h3>
          <StyleSelector changeStyle={this.changeStyle} styles={this.state.styles} />
          <SizeSelector skus={this.state.skus} selectSize={this.selectSize}
          openSizeDropDown={this.openSizeDropDown} showSizes={this.state.showSizes}
          hideAddToCart={this.hideAddToCart} />
          <QuantitySelector size={this.state.selectedSize} available={this.state.availableQuantity}
          selectQuantity={this.selectQuantity}/>
          <AddToCart addToCart={this.addToCart} openSizeDropDown={this.openSizeDropDown} noSizeSelected={this.state.noSizeSelected}
          style={this.state.displayedStyleName} size={this.state.selectedSize}
          quantity={this.state.selectedQuantity} hide={this.state.hideAddToCart} />
          {displayAdded}
        </div>
    )
  }
}

export default Overview;