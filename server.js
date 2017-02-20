const express = require('express');
const app     = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/',(req, res) => {
  res.sendFile(__dirname + '/index.html');
  // res.send('Hello world Sonbkt');
})
// app.post('/quotes', (req, res) => {
//   console.log(req.body);
// })

app.listen(3000);
