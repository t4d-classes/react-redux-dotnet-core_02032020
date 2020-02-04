# Exercise 9

GitHub [https://github.com/t4d-classes/react-redux-dotnet-core_02032020](https://github.com/t4d-classes/react-redux-dotnet-core_02032020)

## Steps

1. Implement the save button. When you click save update the row to show the new car data using the View Row Component.

Hint: to perform the save, find the index of the car which needs to replaced. Make a copy of the array. Then replace the car at that index in the new array and save the new array with `setCars`.

Array Functions:

findIndex
concat // use concat to copy the array

2. Implement the cancel button. Discard the changes and show the original car in the View Row Component.

3. If a row is being edited, and the user fills out and submits the add car form then, save the new car and change the edit row to a view row discarding the changes.

4. If a row is being edited, and the user clicks delete on another row, delete the row and change the edit row to a view row discarding the changes.

5. Ensure it works.