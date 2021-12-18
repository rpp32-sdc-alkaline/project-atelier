import React from 'react'
import CharacteristicReview from './characteristicReview.jsx'
import axios from 'axios'

class WriteReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      rating: null,
      recommend: null,
      size: null,
      width: null,
      comfort: null,
      quality: null,
      length: null,
      fit: null,
      summary: '',
      body: '',
      photos: [],
      nickname: null,
      email: null,
      chars: ['Size', 'Fit', 'Width', 'Comfort', 'Quality', 'Length']
    }
  }

  handleOverallRating(e) {
    this.setState({
      rating: e.target.value
    })
  }

  rateCharacteristic(char, rating) {
    char = char.toLowerCase()
    this.setState({
      [char]: rating
    })
  }

  handleRecommend(e) {
    this.setState({
      recommend: e.target.value
    })
  }

  handleSummaryChange(e) {
    this.setState({
      summary: e.target.value
    })
  }

  handleBodyChange(e) {
    this.setState({
      body: e.target.value
    })
  }

  uploadPhotos(e) {
    e.preventDefault()
  }

  handleNicknameChange(e) {
    this.setState({
      nickname: e.target.value
    })
  }

  handleEmailChange(e) {
    this.setState({
      email: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault()
    //validate fields
    let invalidFields = ''
    if (!this.state.rating) {
      invalidFields += 'Overall Rating\n'
    } if (this.state.recommend === null) {
      invalidFields += 'Do you recommend this product?\n'
    } for (var i = 0; i < this.state.chars.length; i++) {
      let char = this.state.chars[i].toLowerCase()
      if (this.state[char] === null) {
        invalidFields += `Characteristic: ${this.state.chars[i]}\n`
      }
    } if (this.state.body === '' || this.state.body.length < 50) {
      invalidFields += 'Review body\n'
    } // TODO: handle invalid photo uploads
    if (!this.state.nickname) {
      invalidFields += 'Nickname\n'
    } if (!this.state.email) {
      invalidFields += 'Email\n'
    }
    if (invalidFields) {
      alert(`You must enter the following:\n${invalidFields}`)
    } else {
      let reviewFormData = {
        product_id: parseInt(this.props.id, 10),
        rating: parseInt(this.state.rating, 10),
        summary: this.state.summary,
        body: this.state.body,
        recommend: this.state.recommend,
        name: this.state.nickname,
        email: this.state.email,
        photos: this.state.photos
        }
      }
    }


  render() {
    let chars = Array.from(this.state.chars)
    return (
      <div data-testid="write-1">
        <h3>Write Your Review</h3>
        <h5>About the [Product Name Here]</h5>
        <form>
          <p>Overall Rating*</p>
          <select id="rating" name="rating" onChange={this.handleOverallRating.bind(this)}>
            <option value="5" >5 Stars</option>
            <option value="4">4 Stars</option>
            <option value="3">3 Stars</option>
            <option value="2">2 Stars</option>
            <option value="1">1 Stars</option>
          </select>
          <p>Do you recommend this product?*</p>
          <input type="radio" id="yes-recommend" name="recommend" value={true} onClick={this.handleRecommend.bind(this)}></input>
          <label htmlFor="yes-recommend">Yes</label>
          <input type="radio" id="no-recommend" name="recommend" value={false} onClick={this.handleRecommend.bind(this)}></input>
          <label htmlFor="no-recommend">No</label>
          <br></br>
          <p>Rate these characteristics:</p>
          {chars.map(char =>
          <CharacteristicReview thisChar={char} key={char} rateChar={this.rateCharacteristic.bind(this)}/>
          )}
          <p>Review Summary:</p>
          <textarea name="summary" id="summary" maxLength="60" defaultValue="Example: Best purchase ever!"
          onChange={this.handleSummaryChange.bind(this)}></textarea>
          <p>Review body:</p>
          <textarea name="body" id="body" maxLength="1000" defaultValue="Why did you like the product or not?"
          onChange={this.handleBodyChange.bind(this)}></textarea>
          {this.state.body.length < 50 &&
          <p>Minimum required characters left: {50-this.state.body.length}</p>
          }
          {this.state.body.length >= 50 &&
          <p>Minimum reached</p>
          }
          <button id="photo-button" onClick={this.uploadPhotos.bind(this)}>Upload photos</button>
          <p>What is your nickname?*</p>
          <textarea name="nickname" id="nickname" maxLength="60" defaultValue="Example: jackson11!"
          onChange={this.handleNicknameChange.bind(this)}></textarea>
          <p>For privacy reasons, do not use your full name or email address</p>
          <p>Your email*</p>
          <textarea name="nickname" id="nickname" maxLength="60" defaultValue="Example: jackson11@email.com"
          onChange={this.handleEmailChange.bind(this)}></textarea>
          <p>For authentication reasons, you will not be emailed</p>
          <br></br>
          <button id="submit" onClick={this.onSubmit.bind(this)}>Submit review</button>
        </form>
      </div>
    )
  }
}


export default WriteReview