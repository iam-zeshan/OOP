/*
In this section, I've learned how we can inherite the supertype Object (which is Animal in this situation) in the Constructor Function.


Task:
Modify the code so that instances of Dog inherit from Animal.

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Only change code below this line

let beagle = new Dog();
*/

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();