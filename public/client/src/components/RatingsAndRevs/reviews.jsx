import React from 'react'
import Review from './review.jsx'
import WriteReview from './writeReview.jsx'

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numToShow: 2,
      showingAll: false,
      showWriteReview: false
    }
  }

  componentDidMount() {
    if (this.props.reviews.results) {
      if (this.state.numToShow >= this.props.reviews.results.length) {
        this.setState({
          showingAll: true
        })
      }
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

  showWriteReview() {
    this.setState({
      showWriteReview: true
    })
  }

  render() {
    let reviews = this.props.reviews.results
    if (!reviews) {
      return (
        <div>
          <h4>Reviews</h4>
        </div>
      )
    }
    return (
      <div id="reviews">
        <h4>Reviews</h4>
        <h5>999 reviews. Sort on:</h5>
        <select name="review-sort-options" id="review-sort-options">
          <option value="relevance">Relevant</option>
          <option value="helpful">Helpful</option>
          <option value="newest">Newest</option>
        </select>
        <div id="reviews-scroll">
          {reviews.slice(0, this.state.numToShow).map(review =>
            <Review review={review} key={review.review_id} />
          )}
        </div>
        {!this.state.showingAll &&
        <button onClick={this.showMore.bind(this)}>More Reviews</button>}
        <button onClick={this.showWriteReview.bind(this)}>Add A Review +</button>
        {this.state.showWriteReview &&
        <WriteReview id={this.props.reviews.product}/>
        }
      </div>
    )
  }
}

export default Reviews