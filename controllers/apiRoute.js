const options = {
    'method': 'GET',
    'url': 'http://api.roadgoat.com/api/v2/destinations/auto_complete?q=barcelona',
    'headers': {
      'Authorization': `Basic ${auth_key}`
    },
  };
  
  axios (options).then(data => res.json(data.data)).catch(error => console.log(error));