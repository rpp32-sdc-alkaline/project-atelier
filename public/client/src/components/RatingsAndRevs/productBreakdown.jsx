import React from 'react'

class ProductBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  co

  render() {
    let metadata = this.props.metadata
    var chars = metadata.characteristics
    return (
      <div className="product-breakdown">
        <h5>Product Breakdown</h5>
        {chars.Size &&
        <p>Size: JSON.parse{JSON.parse(chars.Size.value).toFixed(1)}</p>}
        {chars.Width &&
        <p>Width: {JSON.parse(chars.Width.value).toFixed(1)}</p>}
        {chars.Comfort &&
        <p>Comfort: {JSON.parse(chars.Comfort.value).toFixed(1)}</p>}
        {chars.Quality &&
        <p>Quality: {JSON.parse(chars.Quality.value).toFixed(1)}</p>}
        {chars.Length &&
        <p>Length: {JSON.parse(chars.Length.value).toFixed(1)}</p>}
        {chars.Fit &&
        <p>Fit: {JSON.parse(chars.Fit.value).toFixed(1)}</p>}
      </div>
    )
  }
}

export default ProductBreakdown