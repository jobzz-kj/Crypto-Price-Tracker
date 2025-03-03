---
id: api-integration
title: API Integration
---

# API Integration

We use the [CoinGecko API](https://www.coingecko.com/en/api) to fetch real-time crypto data. Specifically, we consume the following endpoint:


## Error Handling

We wrap the fetch call in a try/catch block (or check `res.ok`) and display an error message to the user if the request fails.
