const express = require('express');
const path = require('path');
const port = 3000;
const app = express();
const axios = require('axios');
const token = require('../public/client/dist/config.js');
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

app.post('/questionAndAnswers', (req, res) => {
  let id = req.body.data.id;
  let page = req.body.data.page;
  let count = req.body.data.count;
  let headers = {
    'Authorization': process.env.API_KEY
  }
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions?product_id=${id}&page=${page}&count=${count}&sort=helpful`, {headers: headers})
    .then((result) => {
      res.send(result.data);
    })
    .catch((error) => {
      throw error;
    })
})

app.post('/getAnswerData', (req, res) => {
  let id = req.body.data.id;
  let headers = {
    'Authorization': process.env.API_KEY
  }
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/${id}/answers?page=1&count=100`, {headers: headers})
  .then((result) => {
    res.send(result.data);
  })
  .catch((error) => {
    throw error;
  })
})

app.post('/markAHelpful', (req, res) => {
  let headers = {
    'Authorization': process.env.API_KEY
  }
  let id = req.body.data.id;
  axios({
    method: 'put',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/answers/${id}/helpful`,
    headers: headers
  })
  .then((result) => {
    res.send(result.data);
  })
  .catch((error) => {
    throw error;
  })
})

app.post('/markQHelpful', (req, res) => {
  let headers = {
    'Authorization': process.env.API_KEY
  }
  let id = req.body.data.id;
  axios({
    method: 'put',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/${id}/helpful`,
    headers: headers
  })
  .then((result) => {
    res.send(result.data);
  })
  .catch((error) => {
    throw error;
  })
})

app.post('/reportAnswer', (req, res) => {
  let headers = {
    'Authorization': process.env.API_KEY
  }
  let id = req.body.data.id;
  axios({
    method: 'put',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/answers/${id}/report`,
    headers: headers
  })
  .then((result) => {
    res.send('reported');
  })
  .catch((error) => {
    throw error;
  })
})

app.post('/addQuestion', (req, res) => {
  let headers = {
    'Authorization': process.env.API_KEY
  }
  let body = req.body.data.body;
  let name = req.body.data.name;
  let email = req.body.data.email;
  let id = req.body.data.product_id;
  axios({
    method: 'post',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions`,
    headers: headers,
    data: {body: body, name: name, email: email, product_id: id}
  })
  .then((result) => {
    res.send('Question added')
  })
  .catch((error) => {
    console.error(error);
  })
})

app.post(`/addAnswer`, (req, res) => {
  let headers = {
    'Authorization': process.env.API_KEY
  }
  let body = req.body.data.body;
  let name = req.body.data.name;
  let email = req.body.data.email;
  let id = req.body.data.id;

  axios({
    method: 'post',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/${id}/answers`,
    headers: headers,
    data: {body: body, name: name, email: email}

  })
  .then((result) => {
    res.send('answer added')
  })
  .catch((error) => {
    console.error(error);
  })
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})
