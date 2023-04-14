const express = require('express');
const ejs = require('ejs');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  const address = req['headers']['cf-connecting-ip'];

  res.render('index', { 
    manifest_version: 2,
    endpoint: "https://hbtn.hugochilemme.com/api/v3",
    address,
   });
});

app.listen(2016, () => {
  console.log('Serveur démarré sur le port 2016');
});
