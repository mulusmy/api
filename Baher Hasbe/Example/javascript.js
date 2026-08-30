const axios = require('axios');

axios.get('https://api.mulusmy.com/bh/v1/', {
    params: { year: 2016, key: 'YOUR_API_KEY' }
})
.then(res => console.log(res.data))
.catch(err => console.error(err));
