---
id: state-management
title: State Management
---

# State Management

For state management, we use **React Query** (a.k.a TanStack Query). It allows us to:

- Cache and automatically refetch data.
- Simplify fetching/loading/error states.
- Easily implement manual refresh actions.

When users click the "Refresh" button, we call `refetch()` from React Query to request fresh data from the API.
