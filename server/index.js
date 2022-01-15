require ('dotenv').config()
const express = require('express');
const path = require('path');
const port = 3000;
const app = express();
const axios = require('axios');


app.use(express.static(path.join(__dirname, '..', 'public/client')))
app.use(express.json())

app.post('/overview-products', (req, res) => {
   var id = req.body.data
   let productUrl = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${id}`
   let headers = {
     'Authorization': process.env.API_KEY
   }
   axios.get(productUrl, {headers})
   .then(result => {
     res.send(result.data)
   })
   .catch((error) => {
     res.sendStatus(404)
   })
})

app.post('/overview-ratings', (req, res) => {
  var id = req.body.data
  let ratingsUrl = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta?&product_id=${id}`
  let headers = {
    'Authorization': process.env.API_KEY
  }
  axios.get(ratingsUrl, {headers})
  .then(result => {
    res.send(result.data)
  })
  .catch((error) => {
    res.sendStatus(404)
  })
})

app.post('/overview-styles', (req, res) => {
  var id = req.body.data
  let stylesUrl = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${id}/styles`
  let headers = {
    'Authorization': process.env.API_KEY
  }
  axios.get(stylesUrl, {headers})
  .then(result => {
    res.send(result.data)
  })
  .catch((error) => {
    res.sendStatus(404)
  })
})

app.get('/API', (req, res) => {
  axios({
    method: 'GET',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products',
    headers: {
      'Content-Type': 'application/json',
      // 'Authorization': token.TOKEN
      'Authorization': process.env.API_KEY
      //
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

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})
