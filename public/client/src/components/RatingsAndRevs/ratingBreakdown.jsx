import React from 'react'

class RatingBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {
    console.log('this.props.metadata', this.props.metadata)
  }

  render() {
    let ratings = this.props.metadata.ratings
    let totalRatings = JSON.parse(ratings[1]) + JSON.parse(ratings[2]) + JSON.parse(ratings[3]) + JSON.parse(ratings[4]) + JSON.parse(ratings[5])
    let avgRating = ((JSON.parse(ratings[1]) + 2 * JSON.parse(ratings[2]) + 3 * JSON.parse(ratings[3]) + 4 * JSON.parse(ratings[4]) + 5 * JSON.parse(ratings[5])) / totalRatings ).toFixed(2)
    let numFiveStars = Math.floor(JSON.parse(ratings[5])/totalRatings*100)
    let numFourStars = Math.floor(JSON.parse(ratings[4])/totalRatings*100)
    let numThreeStars = Math.floor(JSON.parse(ratings[3])/totalRatings*100)
    let numTwoStars = Math.floor(JSON.parse(ratings[2])/totalRatings*100)
    let numOneStar = Math.floor(JSON.parse(ratings[1])/totalRatings*100)

    return (
      <div>
        <h5>Rating Breakdown</h5>
        <p>{avgRating} Stars, {totalRatings} Ratings</p>
        <p>Five Stars: {numFiveStars}% {ratings[5]}</p>
        <p>Four Stars: {numFourStars}% {ratings[4]}</p>
        <p>Three Stars: {numThreeStars}% {ratings[3]}</p>
        <p>Two Stars: {numTwoStars}% {ratings[2]}</p>
        <p>One Stars: {numOneStar}% {ratings[1]}</p>
      </div>
    )
  }
}

export default RatingBreakdown