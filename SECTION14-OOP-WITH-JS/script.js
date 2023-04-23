'use strict';

const Person = function (firstName, birthYear) {
  //Instance properties. We can reuse them
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  //this.calcAge = function () {
  //  console.log(2037 - this.birthYear);
  // };
};

const romane = new Person('Romane', 1994);
console.log(romane);

// 1. A new {} is created
//2. function is called, this keyword = {}
//3. {} Linked to prototype
//4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jake', 1975);
console.log(matilda, jack);

console.log(romane instanceof Person);

// Prototypes

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

romane.calcAge();

console.log(romane.__proto__);
console.log(romane.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(romane));

//.prototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(romane.species);

console.log(romane.hasOwnProperty('firstName'));

console.log(romane.__proto__);
//Object.prototype(type of prototype chain

console.log(romane.__proto__.__proto__);
console.log(romane.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 4, 5, 6, 7, 8]; // same as using new array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique()); // extending the prototype of a building object
// Not ideal though

const h1 = document.querySelector('h1');
console.dir(x => x + 1);
