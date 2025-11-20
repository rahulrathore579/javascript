// type conversions
let a = "666";
//implicit conversion
let b = 8 + null ;
let s = 5 + null    
let d="5" + null  
let g="5" + 2    
let h="5" - 2     
let j="5" * "2"   


//explicit conversion
console.log(Number(a) + b);
console.log(parseInt("100.55"));

let n = 50;
console.log(n.toString());
console.log(String(500));

console.log(Boolean(1));     // true
console.log(Boolean(0));     // false
console.log(Boolean(""));    // false
console.log(Boolean("Hi"));  // true



// implicit and elicit

console.log(b)
console.log(s)
console.log(d)
console.log(g)
console.log(h)
console.log(j)

//objects

const car = {type:"Fiat", model:"500", color:"white"};
let car2 = {...car , year:2020}
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

const people = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

const details = {};

// Add Properties
details.firstName = "John";
details.lastName = "Doe";
details.age = 50;
details.eyeColor = "blue";

const personD = new Object({
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
});

let x = person.firstName;
let y = person["lastName"];

console.log(x + " " + y);


