import React from 'react'
import Date from './date.jsx'
import Helpful from './helpful.jsx'
import Stars from './stars.jsx'

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
  }

  render() {
    let review = this.props.review

    return (
      <div className="individual-review">
        <h5>Individual Review</h5>
        <Stars average={review?.rating} size={15}/>
        <p>Summary: {review?.summary}</p>
        <p>Body: {review?.body}</p>
        {review?.response &&
        <p>{review?.response}</p>}
        {review?.recommend &&
        <p>I recommend this product [check]</p>}
        <p>{review?.reviewer_name}</p>
        <Date date={review?.date.slice(0,10)} />
        <Helpful helpfulness={review?.helpfulness} />
        {review?.photos.map(photo =>
          <img key={photo.id} src={photo.url} height="45px" width="45px"></img>)}
      </div>
    )
  }
}

export default Review