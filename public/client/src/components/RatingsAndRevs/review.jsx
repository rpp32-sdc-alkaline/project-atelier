import React from 'react'
import Date from './date.jsx'
import Helpful from './helpful.jsx'
import Stars from './stars.jsx'

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showFullReview: false
    }
    this.showFullReview.bind(this)
  }

  componentDidMount() {
    if (this.props.review.body.length < 250) {
      this.setState({
        showFullReview: true
      })
    }
  }

  showFullReview() {
    this.setState({
      showFullReview: true
    })
  }

  render() {
    let review = this.props.review
    console.log('review', review)
    let reviewBody
    if (this.state.showFullReview) {
      reviewBody = review.body
    } else {
      reviewBody = review.body.slice(0, 249)
    }
    return (
      <div className="individual-review">
        <Stars average={review?.rating} size={15}/>
        <p className="summary">{review?.summary}</p>
        {review &&
        <p>{reviewBody}</p>}
        {!this.state.showFullReview &&
        <p className="link" onClick={this.showFullReview.bind(this)}>Show more</p>}
        {review?.recommend &&
        <p>I recommend this product [check]</p>}
        <p>{review?.reviewer_name}</p>
        {review?.response &&
        <p className="response">Response from seller: {review.response}</p>}
        <Date date={review?.date.slice(0,10)} />
        <Helpful helpfulness={review?.helpfulness} />
        {review?.photos.map(photo =>
          <img key={photo.id} src={photo.url} height="45px" width="45px"></img>)}
      </div>
    )
  }
}

export default Review