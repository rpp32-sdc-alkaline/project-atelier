const express = require('express');
const path = require('path');
const port = 3000;
const app = express()

app.use(express.static(path.join(__dirname, '..', 'public/client')))
app.use(express.json())

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})
