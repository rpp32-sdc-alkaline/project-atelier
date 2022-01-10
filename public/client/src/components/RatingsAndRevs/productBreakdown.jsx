import React from 'react'
import BarProductBreakdown from './barProductBreakdown.jsx'

class ProductBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
//Size
    let sizeOneDescription = 'A size too small';
    let sizeTwoDescription = '1/2 a size too small';
    let sizeThreeDescription = 'Perfect';
    let sizeFourDescription = '1/2 a size too big';
    let sizeFiveDescription = 'A size too wide';
    let widthOneDescription = 'Too narrow';
    let widthTwoDescription = 'Slightly narrow';
    let widthThreeDescription = 'Perfect';
    let widthFourDescription = 'Slightly wide';
    let widthFiveDescription = 'Too wide';
    let comfortOneDescription = 'Uncomfortable';
    let comfortTwoDescription = 'Slightly uncomfortable';
    let comfortThreeDescription = 'Ok';
    let comfortFourDescription = 'Comfortable';
    let comfortFiveDescription = 'Perfect';
    let qualityOneDescription = 'Poor';
    let qualityTwoDescription = 'Below average';
    let qualityThreeDescription = 'What I expected';
    let qualityFourDescription = 'Pretty great';
    let qualityFiveDescription = 'Perfect';
    let lengthOneDescription = 'Runs short';
    let lengthTwoDescription = 'Runs slightly short';
    let lengthThreeDescription = 'Perfect';
    let lengthFourDescription = 'Runs slighly long';
    let lengthFiveDescription = 'Runs long';
    let fitOneDescription = 'Runs tight';
    let fitTwoDescription = 'Runs slightly tight';
    let fitThreeDescription = 'Perfect';
    let fitFourDescription = 'Runs slighly long';
    let fitFiveDescription = 'Runs long';

    let metadata = this.props.metadata
    var chars = metadata.characteristics
    let sizeRating
    let widthRating
    let comfortRating
    let qualityRating
    let lengthRating
    let fitRating
    let sizePercent
    let widthPercent
    let comfortPercent
    let qualityPercent
    let lengthPercent
    let fitPercent
    if (chars.Size) {
      sizeRating = JSON.parse(chars.Size.value).toFixed(1)
      sizePercent = (sizeRating - 1)*25
      console.log('size rating', sizeRating, 'size percent', sizePercent)
    } if (chars.Width) {
      // widthRating = JSON.parse(chars.Width.value).toFixed(1)
      widthRating = 5;
      widthPercent = (widthRating - 1)*25
    } if (chars.Comfort) {
      comfortRating = JSON.parse(chars.Comfort.value).toFixed(1)
      comfortPercent = (comfortRating - 1)*25
    } if (chars.Quality) {
      qualityRating = JSON.parse(chars.Quality.value).toFixed(1)
      qualityPercent = (qualityRating - 1)*25
    } if (chars.Length) {
      lengthRating = JSON.parse(chars.Length.value).toFixed(1)
      lengthPercent = (lengthRating - 1)*25
    } if (chars.Fit) {
      fitRating = JSON.parse(chars.Fit.value).toFixed(1)
      fitPercent = (fitRating - 1)*25
    }

    return (
      <div className="product-breakdown">
        <h5>Product Breakdown</h5>
        {chars.Size &&
        <>
        <p>Size: {sizeRating}</p>
        <BarProductBreakdown position={sizePercent} />
        <p>1: {sizeOneDescription}, 5: {sizeFiveDescription}</p>
        <br></br>
        </>}
        {chars.Width &&
        <>
        <p>Width: {JSON.parse(chars.Width.value).toFixed(1)}</p>
        <BarProductBreakdown position={widthPercent} />
        <p>1: {widthOneDescription}, 5: {widthFiveDescription}</p>
        <br></br>
        </>}
        {chars.Comfort &&
        <>
        <p>Comfort: {JSON.parse(chars.Comfort.value).toFixed(1)}</p>
        <BarProductBreakdown position={comfortPercent} />
        <p>1: {comfortOneDescription}, 5: {comfortFiveDescription}</p>
        <br></br>
        </>}
        {chars.Quality &&
        <>
        <p>Quality: {JSON.parse(chars.Quality.value).toFixed(1)}</p>
        <BarProductBreakdown position={qualityPercent} />
        <p>1: {qualityOneDescription}, 5: {qualityFiveDescription}</p>
        <br></br>
        </>}
        {chars.Length &&
        <>
        <p>Length: {JSON.parse(chars.Length.value).toFixed(1)}</p>
        <BarProductBreakdown position={lengthPercent} />
        <p>1: {lengthOneDescription}, 5: {lengthFiveDescription}</p>
        <br></br>
        </>}
        {chars.Fit &&
        <>
        <p>Fit: {JSON.parse(chars.Fit.value).toFixed(1)}</p>
        <BarProductBreakdown position={fitPercent} />
        <p>1: {fitOneDescription}, 5: {fitFiveDescription}</p>
        <br></br>
        </>}
      </div>
    )
  }
}

export default ProductBreakdown