import React from 'react'
import CharacteristicReview from './characteristicReview.jsx'
import axios from 'axios'
import fullStar from '../../../../../assets/images/full-gold-star.png';
import outlineStar from '../../../../../assets/images/star-outline.png';
import Star from './star.jsx'


class WriteReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      id: null,
      rating: null,
      starsFill: ['grey', 'grey', 'grey', 'grey', 'grey'],
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
      metadata: null,
      chars: null,
      charRatings : {}
      // chars: ['Size', 'Fit', 'Width', 'Comfort', 'Quality', 'Length']
    }
    this.toggleWriteReview.bind(this)
    this.handleStarClick.bind(this)
    this.openModal.bind(this)
    this.closeModal.bind(this)
    this.setUpChars.bind(this)
    this.postData.bind(this)
  }

  componentDidMount() {
    if (this.props.metadata) {
      this.setState({
        metadata: this.props.metadata
      })
      this.setUpChars()
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.metadata !== prevProps.metadata) {
      this.setState({
        metadata: this.props.metadata
      })
      this.setUpChars()
    }
  }

  postData(formData) {
    console.log('formData', formData)
    this.props.postNewReview(formData)
  }

  setUpChars() {
    let chars = [];
    for (var key in this.props.metadata.characteristics) {
      chars.push({
        [key]: this.props.metadata.characteristics[key].id
      })
    }
    this.setState({
      chars: chars,
    })
  }

  handleOverallRating(e) {
    this.setState({
      rating: e.target.value
    })
  }

  rateCharacteristic(char, rating, id) {
    let charRatings = this.state.charRatings
    charRatings[id] = rating
    this.setState({
      charRatings: charRatings
    })
  }

  handleRecommend(e) {
    let recommendation = (e.target.value === 'true')
    this.setState({
      recommend: recommendation
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
    console.log('in uploadPhotos')
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
    let invalidFields = ''
    let properEmailRegex = /\S+@\S+\.\S{2,5}/i
    if (!this.state.rating) {
      invalidFields += 'Overall Rating\n'
    } if (this.state.recommend === null) {
      invalidFields += 'Do you recommend this product?\n'
    } for (var key in this.state.charRatings) {
      if (!this.state.charRatings[key]) {
        invalidFields += `Characteristic Rating\n`
      }
    } if (this.state.body === '' || this.state.body.length < 50) {
      invalidFields += 'Review body\n'
    } // TODO: handle invalid photo upload
    if (!this.state.nickname) {
      invalidFields += 'Nickname\n'
    } if (!properEmailRegex.test(this.state.email)) {
      invalidFields += 'Email\n'
    } if (invalidFields) {
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
        photos: this.state.photos,
        characteristics: this.state.charRatings
        }
        this.postData(reviewFormData)
      }
    }

    handleStarClick(e) {
      this.setState({
        rating: e.target.value
      })
    }

    openModal() {
      this.setState({
        show: true
      })
    }

    closeModal() {
      this.setState({
        show: false
      })
    }

    toggleWriteReview(e) {
      let currentState = this.state.show
      this.setState({
        show: !currentState
      })
    }

    handleCloseClick() {
      this.props.hideModal
    }

  render() {
    if (!this.state.show) {
      return (
        <button onClick={this.openModal.bind(this)}>Add A Review +</button>
      )
    } let starOneSrc = outlineStar;
    let starTwoSrc = outlineStar;
    let starThreeSrc = outlineStar;
    let starFourSrc = outlineStar;
    let starFiveSrc = outlineStar;
    for (var i = 0; i < 5; i++) {
      if (this.state.starsFill[i] === 'gold') {
        if (i === 0) {
          starOneSrc = fullStar
        } if (i === 1) {
          starTwoSrc = fullStar
        } if (i === 2) {
          starThreeSrc = fullStar
        } if (i === 3) {
          starFourSrc = fullStar
        } if (i === 4) {
          starFiveSrc = fullStar
        }
      }
    }
    let style = {
      height: '20px',
      width: '20px'
    }
    let chars = Array.from(this.state.chars)
    let rating = this.state.rating
    let ratingDesc
    if (rating === '1') {
      ratingDesc = 'Poor'
    } else if (rating === '2') {
      ratingDesc = 'Fair'
    } else if (rating === '3') {
      ratingDesc = 'Average'
    } else if (rating === '4') {
      ratingDesc = 'Good'
    } else if (rating === '5') {
      ratingDesc = 'Great'
    }
    return (
        <div className="write-review-modal-backdrop">
          <div className="write-review-modal-box">
            <button className="close-button" onClick={this.closeModal.bind(this)}>X</button>
            <h3>Write Your Review</h3>
            <h5>About the {this.props.name}</h5>
            <form>
              <p>Overall Rating*</p>
              <div className='review-stars'>
                {[ ...Array(5)].map((star, i) => {
                  let ratingValue = i + 1;
                  let id = `star-rating-${i}`
                  return (
                    <label>
                      <input
                      type="radio"
                      name="star-rating"
                      id={id}
                      value={ratingValue}
                      onClick={this.handleStarClick.bind(this)}
                      />
                      <Star className="star" size={25} starFill={ratingValue <= rating ? 'gold' : 'grey'}/>
                    </label>
                  )}
                )}
                <p>{ratingDesc}</p>
              </div>
              <br></br>
              <p>Do you recommend this product?*</p>
              <input type="radio" id="yes-recommend" name="recommend" value={true} onClick={this.handleRecommend.bind(this)}></input>
              <label htmlFor="yes-recommend">Yes</label>
              <input type="radio" id="no-recommend" name="recommend" value={false} onClick={this.handleRecommend.bind(this)}></input>
              <label htmlFor="no-recommend">No</label>
              <br></br>
              <br></br>
              <p>Rate these characteristics:*</p>
              {chars.map(char => {
                let charName
                let charId
                for (var key in char) {
                  charName = key;
                  charId = char[key]
                }
                return (
                  <CharacteristicReview
                  thisChar={charName}
                  key={charName}
                  id={charId}
                  rateChar={this.rateCharacteristic.bind(this)}/>
                )
              }
              )}
              <p>Review Summary:</p>
              <textarea name="summary" id="summary" maxLength="60" defaultValue="Example: Best purchase ever!"
              onChange={this.handleSummaryChange.bind(this)}></textarea>
              <p>Review body:</p>
              <textarea name="body" id="body" maxLength="1000" defaultValue="Why did you like the product or not?"
              onChange={this.handleBodyChange.bind(this)}></textarea>
              {this.state.body.length < 50 &&
              <p>Minimum required characters left: {50-this.state.body.length}</p>}
              {this.state.body.length >= 50 &&
              <p>Minimum reached</p>}
              <label htmlFor="photos">Upload photos:</label>
              <input type="file" id="photos" name="photos"></input>
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
        </div>
    )
  }
}


export default WriteReview