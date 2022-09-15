/*
We can avoid duplication of variable in the Constructor Function by using 'prptotype' keyword.
For Example:
in the previous tasks, the Object Dog has a variabe called 'numLegs' so it was duplicated in each time when we create a new Object from it.

Task:
Add a numLegs property to the prototype of Dog

function Dog(name) {
  this.name = name;
}

// Only change code above this line
let beagle = new Dog("Snoopy");
*/


function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 2;
  
  // Only change code above this line
  let beagle = new Dog("Snoopy");