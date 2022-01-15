const express = require('express');
const path = require('path');
const port = 3000;
const app = express();
const axios = require('axios');
require ('dotenv').config()

app.use(express.static(path.join(__dirname, '..', 'public/client')))
app.use(express.json())

app.get('/API', (req, res) => {
  axios({
    method: 'GET',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': process.env.API_KEY
    }
  })
  .then ((res) => {
    return res
  })
  .then( data => {
    res.json(data.data);
  })
  .catch((error) => {
    throw error;
  })
})

//routes for the ratings widget
app.post('/getreviews', (req, res) => {
  console.log('req', req.body.data)
  let reviewsUrl = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews?sort=${req.body.data.sort}&product_id=${req.body.data.product}&page=${req.body.data.page}&count=${req.body.data.count}`
  let headers = {
    'Authorization': process.env.API_KEY
  }
  axios.get(reviewsUrl, {
    headers: headers
  })
  .then(result => {
    res.send(result.data)
  })
  .catch(error =>
    console.log('error in server', error)
    )
})

app.post('/getreviewsmetadata', (req, res) => {
  let metadataUrl = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta?&product_id=${req.body.data.product}`
  let headers = {
    'Authorization': process.env.API_KEY
  }
  axios.get(metadataUrl, {
    headers: headers
  })
  .then (result => {
    res.send(result.data)
  })
  .catch(error =>
    res.send(error))
})

app.post('/newreview', (req, res) => {
  console.log('req.body.data in new review', req.body.data)
  let url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews`
  let headers = {
    'Content-Type' : 'application/json',
    'Accept' : 'application/json',
    'Authorization': process.env.API_KEY
  }
  axios.post(url, req.body.data, {
    headers: headers})
  .then(result => {
    console.log('Posted review! result in server: ', result)
    res.send(result)
  })
  .catch(error => {
    res.send(error)
  })
})

app.post('/markhelpful', (req, res) => {
  let url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/${req.body.data}/helpful`
  let headers = {
    'Authorization': process.env.API_KEY
  }
  axios({
    method: 'PUT',
    url: url,
    headers: headers
  })
  .then(result => {
    res.send(result)
  })
  .catch(error => {
    res.send(error)
  })
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})
