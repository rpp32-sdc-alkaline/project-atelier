import React from 'react'

class RatingBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <h5>Rating Breakdown</h5>
        <p>5.0 [stars]</p>
        {/* 5, 4, 3, 2, 1 stars with bars */}
      </div>
    )
  }
}

export default RatingBreakdown