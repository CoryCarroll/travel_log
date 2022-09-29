const Buffer = require('buffer/').Buffer;
const net = require('follow-redirects').https;
const fs = require('fs');
const auth_key = Buffer.from('7b21d750af3d46aeee2c5f7f8e5c5cf3:445484a4df09e1531dd6745bfc8d6483').toString('base64');
// const searchBtn = $('#search');
// const destSearch = $('#destination');
// const nameEl = $('#name');
// const photoEl = $('#photo');
// const knownFor = $('#known-for');
// const budgetEl = $('#budget');
// const safetyEl = $('#safety');
// const covidEl = $('#covid');
// const walkEl = $('#walk-score');
// const popEl = $('#population');
const router = require('express').Router()
const axios = require('axios');
// const searchInput = "Mexico"

// searchBtn.on('click', function () {
//     displayDestination(destSearch.val());
//     console.log('clicked!');
// });

// function displayDestination(name) {
//     var queryURL = {
//         'method': 'GET',
//         'url': `http://api.roadgoat.com/api/v2/destinations/:id?=${name}`,
//         'headers': {
//             'Authorization': `Basic ${auth_key}`
//         }
//     };
//     fetch(queryURL).then(function (response) {
//         return response.json();
//     }).then(function(goatData) {
//         console.log(goatData);
//     })
// };

// const options = router.get('/', (req, res) => {
    // var queryURL = {
    //     'method': 'GET',
    //     'url': `http://api.roadgoat.com/api/v2/destinations/:id?=barcelona`,
    //     'headers': {
    //         'Authorization': `Basic ${auth_key}`
    //     }
    // };
    // fetch(queryURL).then(function (response) {
    //     return response.json();
    // }).then(function(goatData) {
    //     console.log(goatData);
    // })
// })

// const net = require('follow-redirects').http;
// const fs = require('fs');
// const auth_key = Buffer.from('7b21d750af3d46aeee2c5f7f8e5c5cf3:445484a4df09e1531dd6745bfc8d6483').toString('base64');
// const axios = require('axios');

router.get('/', (req, res) => {
const options = {
    'method': 'GET',
    'url': `http://api.roadgoat.com/api/v2/destinations/auto_complete?q=${data}`, // change barcelona to ${}
    'headers': {
      'Authorization': `Basic ${auth_key}`
    },
  
  };
  console.log(data);
  res.json(JSON.parse(options))
});



module.exports = router