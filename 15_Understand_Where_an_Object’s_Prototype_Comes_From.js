/*
We know that, the Objects that we are creating from the Constructor Function are actually inherites it's prototype, so we can find that out by using the 'isPrototypeOf' keyword to find the Object's relation.

Task:
Use isPrototypeOf to check the prototype of beagle.

function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// Only change code below this line
*/

function Dog(name) {
    this.name = name;
  }
  
  let beagle = new Dog("Snoopy");
  
  // Only change code below this line
  Dog.prototype.isPrototypeOf(beagle);