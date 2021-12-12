import React from 'react'

class RatingBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    let reviews = this.props.reviews
    let numReviews = reviews.length
    let sumOfRatings = 0;
    let numFiveStars = 0;
    let numFourStars = 0;
    let numThreeStars = 0;
    let numTwoStars = 0;
    let numOneStar = 0;
    for (var i = 0; i < reviews.length; i++) {
      sumOfRatings +=reviews[i].rating
      if (reviews[i].rating === 5) {
        numFiveStars++
      } else if (reviews[i].rating === 4) {
        numFourStars++
      } else if (reviews[i].rating === 3) {
        numThreeStars++
      } else if (reviews[i].rating === 2) {
        numTwoStars++
      } else if (reviews[i].rating === 1) {
        numOneStar++
      }
    }
    sumOfRatings /= numReviews
    numFiveStars /= numReviews
    numFourStars /= numReviews
    numThreeStars /= numReviews
    numTwoStars /= numReviews
    numOneStar /= numReviews
    return (
      <div>
        <h5>Rating Breakdown</h5>
        <p>{sumOfRatings} Stars</p>
        <p>Five Stars: {numFiveStars * 100}%</p>
        <p>Four Stars: {numFourStars * 100}%</p>
        <p>Three Stars: {numThreeStars * 100}%</p>
        <p>Two Stars: {numTwoStars *100}%</p>
        <p>One Stars: {numOneStar *100}%</p>
      </div>
    )
  }
}

export default RatingBreakdown