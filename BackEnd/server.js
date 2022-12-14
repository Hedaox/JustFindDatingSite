const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/', (req, res) => {
  // Handle the request
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});