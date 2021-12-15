import React from 'react';
import StarRating from './starRating.jsx'
import Category from './Category.jsx'
import axios from 'axios'

class Overview extends React.Component{
  constructor(props) {
    super(props)
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

  getProducts()  {
  }
  //on component did mount-- query api for products



  render() {
    return (
      <div>
        <h2>Overview</h2>
        <StarRating ratings={this.state.ratings.ratings}/>
        <Category category = {this.state.product.category}/>
      </div>


    )
  }
}

export default Overview;