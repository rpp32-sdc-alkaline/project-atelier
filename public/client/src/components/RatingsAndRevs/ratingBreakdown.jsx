import React from 'react'

class RatingBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    let ratings = this.props.metadata.ratings
    let totalRatings = ratings[1] + ratings[2] + ratings[3] + ratings[4] + ratings[5]
    let avgRating = ((ratings[1] + 2 * ratings[2] + 3 * ratings[3] + 4 * ratings[4] + 5 * ratings[5]) / totalRatings )
    let numFiveStars = ratings[5]/totalRatings
    let numFourStars = ratings[4]/totalRatings
    let numThreeStars = ratings[3]/totalRatings
    let numTwoStars = ratings[2]/totalRatings
    let numOneStar = ratings[1]/totalRatings

    return (
      <div>
        <h5>Rating Breakdown</h5>
        <p>{avgRating} Stars, {totalRatings} Ratings</p>
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