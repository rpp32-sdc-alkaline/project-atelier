import React from 'react'
import CharacteristicReview from './characteristicReview.jsx'

class WriteReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        rating: null,
        recommend: false,
        characteristics: {},
        summary: null,
        body: null,
        photos: {},
        nickname: null,
        email: null
      },
      characteristics: ['size', 'fit', 'width', 'comfort', 'quality', 'length']
    }
  }

  render() {
    let chars = Array.from(this.state.characteristics)
    console.log('chars', chars)
    return (
      <div>
        <h3>Write Your Review</h3>
        <h5>About the [Product Name Here]</h5>
        <form>
          <p>Overall Rating*</p>
          <select id="rating" name="rating">
            <option value="5">5 Stars</option>
            <option value="4">4 Stars</option>
            <option value="3">3 Stars</option>
            <option value="2">2 Stars</option>
            <option value="1">1 Stars</option>
          </select>
          <p>Do you recommend this product?*</p>
          <input type="radio" id="yes-recommend" name="recommend" value={true}></input>
          <label for="yes-recommend">Yes</label>
          <input type="radio" id="no-recommend" name="recommend" value={false}></input>
          <label for="no-recommend">No</label>
          {chars.map(char =>
          <CharacteristicReview thisChar={char} key={char}/>
          )}
        </form>
      </div>
    )
  }
}

export default WriteReview