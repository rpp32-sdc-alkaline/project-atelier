const express = require('express');
const path = require('path');
const port = 3000;
const app = express();
const axios = require('axios');
const token = require('../public/client/dist/config.js');

app.use(express.static(path.join(__dirname, '..', 'public/client')))
app.use(express.json())

app.get('/API', (req, res) => {
  axios({
    method: 'GET',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token.TOKEN
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
