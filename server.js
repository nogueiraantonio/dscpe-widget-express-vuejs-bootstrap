const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use('/widget', express.static(path.join(__dirname, 'widget')));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})