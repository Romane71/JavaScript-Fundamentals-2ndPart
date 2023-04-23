'use strict';

/*const Person = function (firstName, birthYear) {
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

*/
//ES6 CLASSES
// class expression
//const PersonCl = class {
//}

//// class declaration

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property of the PersonCl class
  calcAge() {
    console.log(2023 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.fullName}`);
  }
  get age() {
    return 2023 - this.birthYear;
  }
  // Set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes('')) this._fullName = name; // add _ to avoid conflict
    else alert(`The given name is not a full name`);
  }
  get fullName() {
    return this._fullName;
  }
}
const romane = new PersonCl('Romane Van', 1994);
console.log(romane);
romane.calcAge();
console.log(romane.age);

console.log(romane.__proto__ === PersonCl.prototype);

//PersonCl.prototype.greet = function () {
///console.log(`Hey ${this.firstName}`);
//};
romane.greet();

// 1. classes are NOT hoisted (hoisted = means we can use them BEFORE they are declared in the code)
//2. Classes are first-class citizens = we can pass them into function and also return them from functions
//3. Classes are executed in strict mode automatically

// Setters and Getters- basically functions that get and set a value, still look like regular properties

const account = {
  owner: 'Romane',
  movements: [200, 300, 500, 600],

  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest); // use as a simple property

account.latest = 50;
console.log(account.movements);
