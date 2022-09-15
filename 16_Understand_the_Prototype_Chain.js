/*
I've learned the chain of Prototype and how it is made, I mean, the 'Object' is the supertype of all the JavaScript objects i.e Constructor Function also. And then the Constructor Function is the prototype of the those objects that has been made out of it.


Task:
Modify the code to show the correct prototype chain.
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // yields true

// Fix the code below so that it evaluates to true
???.isPrototypeOf(Dog.prototype);
*/

function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // yields true

// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);