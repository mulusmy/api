import requests

url = "https://api.mulusmy.com/bh/v1/"
params = {"year": 2016, "key": "YOUR_API_KEY"}

response = requests.get(url, params=params)
print(response.json())
