import React from 'react'
import BarRatingBreakdown from './barRatingBreakdown.jsx'


class IndividualRatingBreakdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="individual-rating-breakdown-row">
        <p>{this.props.numStars} Stars</p>
        <BarRatingBreakdown percent={this.props.percent} stars={this.props.numStars}/>
        <p>{this.props.ratings}</p>

      </div>
      )
    }
}

export default IndividualRatingBreakdown