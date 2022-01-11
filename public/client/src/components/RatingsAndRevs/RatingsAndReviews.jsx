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
      sort: 'relevant',
      page: 1,
      count: 5,
      allReviews: [],
      metadata: [],
      filters: [],
      filteredReviews: [],
      name: ''
    }
    this.getReviewData.bind(this)
    this.filterReviews.bind(this)
    this.updateFilters.bind(this)
  }

  componentDidMount() {
    let id = this.props.id
    this.setState({
      product: id
    })
    this.getReviewData(id, 'relevant', 1, 100)
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.filters !== prevState.filters) {
      this.filterReviews()
    } if (this.props.id !== prevProps.id) {
      this.setState({
        id: this.props.id
      })
      this.getReviewData(this.props.id, this.state.sort, 1, 100)
    }
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
      this.setState({
        allReviews: result.data.results,
        filteredReviews: result.data.results
      })
    })
    .catch(error => console.log('error!', error))
    axios.get(metadataUrl, {
      headers: headers
    })
    .then (result => {
      this.setState({
        metadata: result.data,
        haveData: true
      })
    })
    .catch(error => console.log('error!', error))
  }

  changeSort(sort) {
    this.setState({
      sort: sort
    })
    this.getReviewData(this.state.product, sort, 1, 100)
  }

  updateFilters(rating) {
    let currentFilters = Array.from(this.state.filters)
    if (currentFilters.length === 0) {
      currentFilters.push(rating)
    } else {
      let ratingIndex = currentFilters.indexOf(rating)
      //if current filters contain [input rating]
      if (ratingIndex !== -1) {
        //remove current rating from filters
        currentFilters.splice(ratingIndex, 1)
      } else {
        currentFilters.push(rating)
      }
    } this.setState({
        filters: currentFilters
    })

  }
  //review filtering function that will update state with only the reviews to show
  filterReviews() {
    let filters = Array.from(this.state.filters)
    let allReviews = Array.from(this.state.allReviews)
    let filteredReviews = []
    if (filters.length === 0) {
      filteredReviews = allReviews
    } else {
      for (var i = 0; i < allReviews.length; i++) {
        for (var j = 0; j < filters.length; j++) {
          if (allReviews[i].rating === filters[j]) {
            filteredReviews.push(allReviews[i])
          }
        }
      }
    } this.setState({
        filteredReviews: filteredReviews
    })
  }

  render() {
    if (!this.state.haveData) {
      return(<div>
        <p>Loading Reviews</p>
      </div>)
    } else {
    return (
      <div className="ratings-grid-container">
        <Reviews
        reviews={this.state.filteredReviews}
        product={this.state.product}
        name={this.props.name}
        metadata={this.state.metadata}
        changeSort={this.changeSort.bind(this)}/>
        <div className="ratings-left-sidebar">
          <RatingBreakdown metadata={this.state.metadata} updateFilters={this.updateFilters.bind(this)}/>
          <ProductBreakdown metadata={this.state.metadata}/>
        </div>
      </div>
    )
  }
}
}

export default RatingsAndReviews;