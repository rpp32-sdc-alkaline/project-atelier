import React from 'react'
import StarRating from './starRating.jsx'
import Category from './Category.jsx'
import ProductTitle from './ProductTitle.jsx'
import Description from './Description.jsx'
import StyleSelector from './StyleSelector.jsx'
import Price from './Price.jsx'
import axios from 'axios'
var token = require('../../../dist/config.js')

class Overview extends React.Component{
  constructor(props) {
    super(props)
    this.getProductById = this.getProductById.bind(this)

    this.state = {
      product: {
        "id": 1,
        "name": "Camo Onesie",
        "slogan": "Blend in to your crowd",
        "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
        "category": "Jackets",
        "default_price": "140"
    },

    styles: [
      {
        "style_id": 1,
        "name": "Forest Green & Black",
        "original_price": "140",
        "sale_price": "0",
        "default?": true,
        "photos": [
          {
          "thumbnail_url": "urlplaceholder/style_1_photo_number_thumbnail.jpg",
          "url": "urlplaceholder/style_1_photo_number.jpg"
          },
          {
          "thumbnail_url": "urlplaceholder/style_1_photo_number_thumbnail.jpg",
          "url": "urlplaceholder/style_1_photo_number.jpg"
          }
        ],
        "skus": {
                "37": {
                      "quantity": 8,
                      "size": "XS"
                },
                "38": {
                      "quantity": 16,
                      "size": "S"
                },
                "39": {
                      "quantity": 17,
                      "size": "M"
                },

                }
      }
    ],

    ratings: {
      "product_id": "2",
      "ratings": {
        1: 1,
        2: 1,
        3: 1,
        4: 2,
      },

    }

  }
}

  getProductById(id)  {
    var options = {
      method: 'GET',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${id}`,
      headers: {
        'Authorization': token.TOKEN
      }
    }
    axios(options)
    .then(result => {
      console.log('product by id', result.data)
      this.setState({
        'productDetails': result.data[0]
      })
    })
    .catch(err =>
      console.log('error in get product by id')
    )

  }
  //on component did mount-- query api for products
  componentDidMount() {
    this.setState({
      'id': this.props.id
    })
    this.getProductById(this.props.id)
  }


  render() {
    var description;
    if(this.state.product.description) {
      description = <Description description={this.state.product.description} />
    }
    return (
      <div>
        <h2>Overview</h2>
        <StarRating ratings={this.state.ratings.ratings}/>
        <Category category = {this.state.product.category}/>
        <ProductTitle name={this.state.product.name}/>
        <Price style={this.state.styles[0]}/>
        {description}
        <StyleSelector styles={this.state.styles[0]} />
      </div>

    )
  }
}

export default Overview;