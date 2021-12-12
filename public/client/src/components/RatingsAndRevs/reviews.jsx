import React from 'react'
import Review from './review.jsx'

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div id="reviews">
      <h4>Reviews Component</h4>
      <h5>999 reviews. Sort on:</h5>
      <select name="review-sort-options" id="review-sort-options">
        <option value="relevance">Relevant</option>
        <option value="helpful">Helpful</option>
        <option value="newest">Newest</option>
      </select>
        <Review review={this.props.reviews.results[0]}/>
        <Review review={this.props.reviews.results[1]}/>
        <button>More Reviews</button>
        <button>Add A Review +</button>
      </div>
    )
  }
}

export default Reviews