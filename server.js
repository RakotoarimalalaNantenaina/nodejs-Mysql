const express = require('express'),
app = express(),
bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
  
port = process.env.PORT || 8080;

const routes = require('./routes/approutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('Serveur demarer dans le port : ' + port);