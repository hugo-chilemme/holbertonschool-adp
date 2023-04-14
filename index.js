const express = require('express');
const ejs = require('ejs');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

const router = { 
  manifest_version: 3,
  endpoint: "https://hbtn.hugochilemme.com/api/v3",
}

app.get('/', (req, res) => {
  res.render('index', router);
});

app.listen(2016);
