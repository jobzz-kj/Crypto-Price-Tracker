---
id: api-integration
title: API Integration
---

# API Integration

## API Source
We use the [CoinGecko API](https://www.coingecko.com/en/api) to fetch real-time crypto data.

## API Endpoint
```bash
GET https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,ripple,litecoin,cardano


## Example Response
[
  {
    "id": "bitcoin",
    "name": "Bitcoin",
    "current_price": 45000.25
  },
  {
    "id": "ethereum",
    "name": "Ethereum",
    "current_price": 3000.75
  }
]

## Error Handling
If an error occurs during fetching, we display an appropriate message to the user:

if (!res.ok) {
    throw new Error('Failed to fetch crypto prices');
}