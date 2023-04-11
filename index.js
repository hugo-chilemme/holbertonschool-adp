const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(2016, () => {
  console.log('Serveur démarré sur le port 2016');
});
