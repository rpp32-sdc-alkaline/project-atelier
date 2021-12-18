import React from 'react'
import Reviews from './reviews.jsx'
import RatingBreakdown from './ratingBreakdown.jsx'
import ProductBreakdown from './productBreakdown.jsx'
import axios from 'axios'
const token = require('../../../dist/config.js');



class RatingsAndReviews extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      haveData: false,
      product: 0,
      sort: 'helpful',
      page: 1,
      count: 5,
      reviews: [],
      metadata: []
    }
    this.getReviewData.bind(this)
  }

  componentDidMount() {
    console.log('API_KEY', token)
    let id = this.props.id
    console.log('id', id)
    this.setState({
      product: id
    })
    this.getReviewData(id, 'helpful', 1, 5)
  }

  getReviewData(product, sort, page, count) {
    let reviews
    let metadata
    let reviewsUrl = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews?sort=${sort}&product_id=${product}&page=${page}&count=${count}`
    let metadataUrl = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta?&product_id=${product}`
    let headers = {
      'Authorization': token.TOKEN
    }
    axios.get(reviewsUrl, {
      headers: headers
    })
    .then(result => {
      console.log('reviews in client', result.data),
      this.setState({
        reviews: result.data
      })
    })
    .catch(error => console.log('error!', error))
      //get metadata
    axios.get(metadataUrl, {
      headers: headers
    })
    .then (result => {
      console.log('metadata', result.data),
      this.setState({
        metadata: result.data,
        haveData: true
      })
    })
    .catch(error => console.log('error!', error))
    console.log('this.state', this.state)
  }

  render() {
    if (!this.state.haveData) {
      return(<div>
        <p>Loading Reviews</p>
      </div>)
    } else {
    return (
      <div>
        <h3>Ratings and Reviews</h3>
        <Reviews reviews={this.state.reviews}/>
        <RatingBreakdown metadata={this.state.metadata}/>
        <ProductBreakdown metadata={this.state.metadata}/>
      </div>
    )
  }
}
}

export default RatingsAndReviews;