const net = require('follow-redirects').https;
const fs = require('fs');
const auth_key = Buffer.from('7b21d750af3d46aeee2c5f7f8e5c5cf3:445484a4df09e1531dd6745bfc8d6483').toString('base64');

const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});


const options = {
  'method': 'GET',
  'hostname': 'api.roadgoat.com',
  'port': 80,
  'path': '/api/v2/destinations/auto_complete?q=barcelona',
  'headers': {
    'Authorization': `Basic ${auth_key}`
  },
  'maxRedirects': 20
};

const req = net.request(options, function (res) {
    const chunks = [];
  console.log(res);
//     res.on("data", function (chunk) {
//       chunks.push(chunk);
//     });
  
//     res.on("end", function (chunk) {
//       const body = Buffer.concat(chunks);
//       console.log(body.toString());
//     });
  
//     res.on("error", function (error) {
//       console.error(error);
//     });
  });
  

