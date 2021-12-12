import React from 'react'
import Review from './review.jsx'

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numToShow: 1,
      showingAll: false
    }
  }

  componentDidMount() {
    if (this.state.numToShow >= this.props.reviews.results.length) {
      this.setState({
        showingAll: true
      })
    }
  }

  showMore() {
    let results = this.props.reviews.results
    if (results.length > this.state.numToShow + 2) {
      let numToShow = this.state.numToShow + 2
      this.setState({
        numToShow: numToShow
      })
    } else {
      this.setState({
        numToShow: results.length,
        showingAll: true})
    }
  }

  render() {
    let reviews = this.props.reviews.results
    return (
      <div id="reviews">
      <h4>Reviews Component</h4>
      <h5>999 reviews. Sort on:</h5>
      <select name="review-sort-options" id="review-sort-options">
        <option value="relevance">Relevant</option>
        <option value="helpful">Helpful</option>
        <option value="newest">Newest</option>
      </select>
      {reviews.slice(0, this.state.numToShow + 1).map(review =>
        <Review review={review} />
      )}
        {!this.state.showingAll &&
        <button onClick={this.showMore.bind(this)}>More Reviews</button>}
        <button>Add A Review +</button>
      </div>
    )
  }
}

export default Reviews