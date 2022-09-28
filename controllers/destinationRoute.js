// const net = require('follow-redirects').http;
const fs = require('fs');
const auth_key = Buffer.from('7b21d750af3d46aeee2c5f7f8e5c5cf3:445484a4df09e1531dd6745bfc8d6483').toString('base64');
const axios = require('axios');


const options = {
    'method': 'GET',
    'url': 'http://api.roadgoat.com/api/v2/destinations/auto_complete?q=barcelona',
    'headers': {
      'Authorization': `Basic ${auth_key}`
    },
  };
  
  axios (options).then(data => res.json(data.data)).catch(error => console.log(error));