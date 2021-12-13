import React from 'react'
import Reviews from './reviews.jsx'
import RatingBreakdown from './ratingBreakdown.jsx'
import ProductBreakdown from './productBreakdown.jsx'
import axios from 'axios'
import API_KEY from '../../../dist/config.js'


class RatingsAndReviews extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      haveData: false,
      getParams: {
        product: 1,
        sort: 'helpful',
        page: 1,
        count: 5
      },
      reviews: {},
      metadata: {}
  }
}

  componentDidMount() {
    let params = this.state.getParams
    let reviewsUrl = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews?sort=helpful&product_id=1`
    // let reviewsUrl = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews?sort=${params.sort}&product_id=${params.product}`
    // console.log('url', reviewsUrl)
    // console.log('api key', API_KEY)
    //server calls to get review data and metadata
    // axios.get(reviewsUrl, {
    //   headers: {
    //     'Authorization': API_KEY
    //   }
    // })
    // .then(result => console.log('reviews in client', result.data))
    // .catch(error => console.log('error!', error))
    // axios.get('/reviews/meta', {
    //   params: {
    //     product: 1
    //   }
    // })
    // .then (result => console.log('metadata', result))
    // .catch(error => console.log('error!', error))
    // console.log(`in componentDidMount, reviews = ${reviews}, metadata = ${metadata}`)
    this.setState({
      //TO DO: replace dummy data with data from server calls
      reviews: {
        "product": "2",
        "page": 0,
        "count": 5,
        "results": [
          {
            "review_id": 5,
            "rating": 3,
            "summary": "I'm enjoying wearing these shades",
            "recommend": true,
            "response": null,
            "body": "Comfortable and practical.",
            "date": "2019-04-14T00:00:00.000Z",
            "reviewer_name": "shortandsweeet",
            "helpfulness": 5,
            "photos": [{
                "id": 1,
                "url": "urlplaceholder/review_5_photo_number_1.jpg"
              },
              {
                "id": 2,
                "url": "urlplaceholder/review_5_photo_number_2.jpg"
              },
              // ...
            ]
          },
          {
            "review_id": 3,
            "rating": 4,
            "summary": "I am liking these glasses",
            "recommend": false,
            "response": "Glad you're enjoying the product!",
            "body": "They are very dark. But that's good because I'm in very sunny spots",
            "date": "2019-06-23T00:00:00.000Z",
            "reviewer_name": "bigbrotherbenjamin",
            "helpfulness": 5,
            "photos": [],
          },
          {
            "review_id": 6,
            "rating": 5,
            "summary": "I'm REALLY enjoying wearing these shades",
            "recommend": true,
            "response": null,
            "body": "VERY Comfortable and practical.",
            "date": "2019-04-14T00:00:00.000Z",
            "reviewer_name": "Bob",
            "helpfulness": 5,
            "photos": [{
                "id": 1,
                "url": "urlplaceholder/review_5_photo_number_1.jpg"
              },
              {
                "id": 2,
                "url": "urlplaceholder/review_5_photo_number_2.jpg"
              },
              // ...
            ]
          },
          {
            "review_id": 7,
            "rating": 4,
            "summary": "I'm SUPER DUPER enjoying wearing these shades",
            "recommend": true,
            "response": null,
            "body": "EXTREMELY Comfortable and practical.",
            "date": "2019-04-14T00:00:00.000Z",
            "reviewer_name": "Joe",
            "helpfulness": 5,
            "photos": [{
                "id": 1,
                "url": "urlplaceholder/review_5_photo_number_1.jpg"
              },
              {
                "id": 2,
                "url": "urlplaceholder/review_5_photo_number_2.jpg"
              },
              // ...
            ]
          },
          {
            "review_id": 8,
            "rating": 1,
            "summary": "I'm NOT enjoying wearing these shades",
            "recommend": false,
            "response": null,
            "body": "Uncomfortable and impractical.",
            "date": "2019-04-14T00:00:00.000Z",
            "reviewer_name": "Bill",
            "helpfulness": 5,
            "photos": [{
                "id": 1,
                "url": "urlplaceholder/review_5_photo_number_1.jpg"
              },
              {
                "id": 2,
                "url": "urlplaceholder/review_5_photo_number_2.jpg"
              },
              // ...
            ]
          },
          {
            "review_id": 9,
            "rating": 4,
            "summary": "I'm very much enjoying wearing these shades",
            "recommend": true,
            "response": null,
            "body": "Wow! Comfortable and practical.",
            "date": "2019-04-14T00:00:00.000Z",
            "reviewer_name": "Jane",
            "helpfulness": 5,
            "photos": [{
                "id": 1,
                "url": "urlplaceholder/review_5_photo_number_1.jpg"
              },
              {
                "id": 2,
                "url": "urlplaceholder/review_5_photo_number_2.jpg"
              },
              // ...
            ]
          },
          {
            "review_id": 10,
            "rating": 4,
            "summary": "I'm mostly enjoying wearing these shades",
            "recommend": true,
            "response": null,
            "body": "Nice, comfortable and practical.",
            "date": "2019-04-14T00:00:00.000Z",
            "reviewer_name": "Mary",
            "helpfulness": 5,
            "photos": [{
                "id": 1,
                "url": "urlplaceholder/review_5_photo_number_1.jpg"
              },
              {
                "id": 2,
                "url": "urlplaceholder/review_5_photo_number_2.jpg"
              },
              // ...
            ]
          },
          {
            "review_id": 11,
            "rating": 1,
            "summary": "I'm NOT AT ALL enjoying wearing these shades",
            "recommend": false,
            "response": null,
            "body": "Horrible.",
            "date": "2019-04-14T00:00:00.000Z",
            "reviewer_name": "Suzy",
            "helpfulness": 5,
            "photos": [{
                "id": 1,
                "url": "urlplaceholder/review_5_photo_number_1.jpg"
              },
              {
                "id": 2,
                "url": "urlplaceholder/review_5_photo_number_2.jpg"
              },
              // ...
            ]
          },
        ]
      },
      metadata: {
        "product_id": "2",
        "ratings": {
          1: 3,
          2: 7,
          3: 15,
          4: 26,
          5: 21
          // ...
        },
        "recommended": {
          0: 5
          // ...
        },
        "characteristics": {
          "Size": {
            "id": 14,
            "value": "4.0000"
          },
          "Width": {
            "id": 15,
            "value": "3.5000"
          },
          "Comfort": {
            "id": 16,
            "value": "4.0000"
          },
          // ...
      }
    },
    haveData: true
    })
  }

  render() {
    if (!this.state.haveData) {
      return(<div>
        <p>Loading</p>
      </div>)
    } else {
    return (
      <div>
        <h3>Ratings and Reviews</h3>
        <Reviews reviews={this.state.reviews}/>
        <RatingBreakdown metadata={this.state.metadata}/>
        <ProductBreakdown metadata={this.state.metadata}/>
      </div>
    )
  }
}
}

export default RatingsAndReviews;