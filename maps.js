//<h2>JavaScript Map Objects</h2>
//p>Objects as keys in a Map:</p>//


// Create Objects
const apples = {name: 'Apples'};         //object names apples, bananas and oranges
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};

// Create a new Map
const fruits = new Map();

// Add the Objects to the Map
fruits.set(apples, 500);           //value of the object in to the Map
fruits.set(bananas, 300);
fruits.set(oranges, 200);

// Display Object Type
console.log(fruits);             //printed with arrow functions.//