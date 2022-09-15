/*
When we dofome the new property to the instance Object using 'prototype', then by using this we'd get the side effect. 
And the side effect is that, we can't use the constructor property to find wheather the Object is the instance of which constructor Function?
so by solving this issue whenever we assign the new proptotype property to the Object, we need to define the constructor property (constructor: Constructor Function name here) also.

Task:

Define the constructor property on the Dog prototype.
function Dog(name) {
  this.name = name;
}

// Only change code below this line
Dog.prototype = {

  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
*/

function Dog(name) {
    this.name = name;
  }
  
  // Only change code below this line
  Dog.prototype = {
    constructor: Dog,
    numLegs: 4,
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
  };