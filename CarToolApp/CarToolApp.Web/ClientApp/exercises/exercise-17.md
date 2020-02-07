# Exercise 17

1. Implement the Append REST API operation with the React/Redux client portion of Car Tool App. After you do the append on the REST API, refresh cars from the REST API.

- Hint 1

```javascript
const res = await fetch('/api/cars`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(car),
});
```

- Hint 2

You will need to remove the adding code within the reducer.

2. Ensure it works.