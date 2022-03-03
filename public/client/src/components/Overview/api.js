const axios = require('axios')
var token = require('../../../dist/config.js')
require ('dotenv').config()

getProductData(id)  {
  //let productUrl = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${id}`
  let productUrl = process.env.ROB_HOST_URL + `/products/${id}`;
  //let ratingsUrl = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta?&product_id=${id}`
  let stylesUrl = process.env.ROB_HOST_URL + `/styles/${id}`;
  // let headers = {
  //   'Authorization': token.TOKEN
  // }
axios.get(productUrl, {headers})
.then(result => {
  console.log('product by id', result.data)
  this.setState({
    'product': result.data
  })
})
// .then(() => {
//   axios.get(ratingsUrl, {headers})
//   .then(result => {
//     console.log('ratings data', result.data)
//     this.setState({
//       'ratings': result.data.ratings
//     })
//   })
// })
.then(() => {
 //axios.get(stylesUrl, {headers})
 console.log('styles url: ', stylesUrl);
 axios.get(stylesUrl)
 .then(result => {
   console.log('result from styles', result)
   this.setState({
     'styles': result.data.results,
     'hasData': true
   })
 })
})
.catch(err =>
  console.log('error in get product by id')
)
}

module.exports = getProductData

