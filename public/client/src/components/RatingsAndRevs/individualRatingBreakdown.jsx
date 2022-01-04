import React from 'react'
import BarRatingBreakdown from './barRatingBreakdown.jsx'


class IndividualRatingBreakdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleClick() {
    console.log('in handle click. rating:', this.props.numStars)
    console.log('typeof rating', typeof this.props.numStars)
    //call a sort function with this.props.numStars as argument
    this.props.updateFilters(this.props.numStars)
  }

  render() {
    return (
      <div className="individual-rating-breakdown-row" onClick={this.handleClick.bind(this)}>
        <p>{this.props.numStars} Stars</p>
        <BarRatingBreakdown percent={this.props.percent} stars={this.props.numStars}/>
        <p>{this.props.ratings}</p>
      </div>
      )
    }
}

export default IndividualRatingBreakdown