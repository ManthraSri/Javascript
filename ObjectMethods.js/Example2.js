// FREEZE - modification is prevented
let user = { name: "John", age: 20 };
Object.freeze(user);
user.age = 35; //no change
console.log(user); 

// SEAL - Allows modifications but prevents adding/removing properties
let detail = { name: "Manthra", age: 21 };
Object.seal(detail);
detail.age = 30; // allowed
detail.city = "New York"; //not allowed
console.log(detail); // 

// HASOWNPROPERTY - Check if property exists
let person1 = { name: "Manthra", age: 21 };
console.log(person1.hasOwnProperty("age"));  
console.log(person1.hasOwnProperty("city")); 
console.log(person1);

// OBJECT FROM ENTRIES - Convert array to object
let entries = [['name', 'Manthra'], ['age', 28]];
let person2 = Object.fromEntries(entries);
console.log(person2); 
