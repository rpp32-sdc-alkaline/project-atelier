import React from 'react'
import BarRatingBreakdown from './barRatingBreakdown.jsx'


class IndividualRatingBreakdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <p>{this.props.numStars} Stars: <BarRatingBreakdown percent={this.props.percent} stars={this.props.numStars}/> {this.props.ratings}</p>

      </div>
      )
    }
}

export default IndividualRatingBreakdown