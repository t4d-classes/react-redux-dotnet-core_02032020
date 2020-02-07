# Exercise 17

1. Implement the Append REST API operation with the React/Redux client portion of Car Tool App. After you do the append on the REST API, refresh cars from the REST API. You will need to implement the API Controller part.

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

# Exercise 18

1. Implement delete. Here is some code EFCore to do delete.

```csharp
var carDataModel = await _carToolContext.Cars.FindAsync(carId);

_carToolContext.Cars.Remove(carDataModel);
await _carToolContext.SaveChangesAsync();

return _mapper.Map<CarDataModel, CarModel>(carDataModel);
```