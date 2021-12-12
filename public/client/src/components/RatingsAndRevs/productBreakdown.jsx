import React from 'react'

class ProductBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    let metadata = this.props.metadata
    var chars = metadata.characteristics
    return (
      <div>
        <h5>Product Breakdown</h5>
        {chars.Size &&
        <p>Size: {chars.Size.value}</p>}
        {chars.Width &&
        <p>Width: {chars.Width.value}</p>}
        {chars.Comfort &&
        <p>Comfort: {chars.Comfort.value}</p>}
        {chars.Quality &&
        <p>Quality: {chars.Quality.value}</p>}
        {chars.Length &&
        <p>Length: {chars.Length.value}</p>}
        {chars.Fit &&
        <p>Fit: {chars.Fit.value}</p>}
      </div>
    )
  }
}

export default ProductBreakdown