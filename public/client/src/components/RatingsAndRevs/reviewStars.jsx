import React from 'react'

class ReviewStars extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <p>{this.props.stars} stars</p>
        </div>
    )
  }
}

export default ReviewStars