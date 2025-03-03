---
id: challenges
title: Challenges & Solutions
---

# Challenges & Solutions

1. **API Rate Limits**  
   *Solution:* We minimized the frequency of API calls by fetching data only when the user refreshes or the page first loads.

2. **Filtering Crypto**  
   *Solution:* We maintain a local `searchTerm` state and filter the crypto array in-memory to avoid unnecessary network calls.

3. **Responsiveness**  
   *Solution:* We used a simple, responsive layout with CSS. For production, consider a UI library or custom breakpoints to ensure the dashboard is mobile-friendly.
