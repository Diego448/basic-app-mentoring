const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send({message:'Hello World!'});
});

app.get('/demo/data', (req, res) => {
  data = [
    {
        'name': 'unknown',
        'role': 'developer',
        'prefered_language': 'python'
    }
  ]

  res.send(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
