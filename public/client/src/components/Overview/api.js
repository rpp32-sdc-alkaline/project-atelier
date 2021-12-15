const axios = require('axios')
const config = require('...../config.js')

module.exports = {
  getAllProducts = () => {
    const options = {
      method: 'GET',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/:hr-rpp/',
      headers: {
        'Authorization': `token ${config.TOKEN}`
      }
    }
  }
}