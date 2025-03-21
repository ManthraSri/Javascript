let arr = [2, 4, 6, 8];
// chech all numbers are evem
console.log(arr.every(num => num % 2 === 0)); 

//check atleast one 
console.log(arr.some(num => num > 5)); 

//combine it 
let nested = [1, [2, 3], [4, [5, 6]]];
console.log(nested.flat(2)); 

//concatination
let combined = arr.concat([10, 12]);
console.log(combined); 

//filter
let filtered = numbers.filter(num => num > 2);
console.log(filtered);

//map
let doubled = numbers.map(num => num * 2);
console.log(doubled);