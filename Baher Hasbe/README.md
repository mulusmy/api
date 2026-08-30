# 📅 Bahire Hasab API Documentation

The **Bahire Hasab API** provides real-time calculation of the Ethiopian liturgical calendar.

### 🌐 Endpoint
`GET https://api.mulusmy.com/bh/v1/`

### 🛠 Parameters
| Param | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `year` | `int` | No | Ethiopian year (e.g., 2016). |
| `key` | `string` | **Yes** | Your 12-character API Key. |

### 📦 JSON Response Example
const axios = require('axios');

axios.get('https://api.mulusmy.com/bh/v1/', {
    params: { year: 2016, key: 'YOUR_API_KEY' }
})
.then(res => console.log(res.data))
.catch(err => console.error(err));

### 📂 [See Implementation Examples](/examples/)
