import React from 'react'

class StarRatingBreakdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <p>{this.props.numStars} Stars: {this.props.percent}% {this.props.ratings}</p>
      </div>
      )
    }
}

export default StarRatingBreakdown