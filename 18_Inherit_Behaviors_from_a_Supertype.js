/*
We can also create an inherited Object by using the following syntax. Although we can use this 'let nameOfNewObjec = new supertype()', but it has some disadvantages.

Task:
Use Object.create to make two instances of Animal named duck and beagle.
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Only change code below this line

let duck // Change this line
let beagle// Change this line

*/


function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Only change code below this line

let duck = Object.create(Animal.prototype); // Change this line
let beagle = Object.create(Animal.prototype); // Change this line