import React from 'react'
import Date from './date.jsx'
import Helpful from './helpful.jsx'
import ReviewStars from './reviewStars.jsx'

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    console.log('this.props.review', this.props.review)
  }

  render() {
    let review = this.props.review

    return (
      <div>
        <h5>Individual Review</h5>
        <ReviewStars stars={review.rating} />
        <p>Summary: {review.summary}</p>
        <p>Body: {review.body}</p>
        {review.response &&
        <p>{review.response}</p>}
        {review.recommend &&
        <p>I recommend this product [check]</p>}
        <p>{review.reviewer_name}</p>
        <Date date={review.date.slice(0,10)} />
        <Helpful helpfulness={review.helpfulness} />
        {review.photos.map(photo =>
          <img key={photo.id} src={photo.url}></img>)}
      </div>
    )
  }
}

export default Review