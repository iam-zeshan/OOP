/*
We can add multiple proptotype property to an Object by using the below method.


Task:

Add the property numLegs and the two methods eat() and describe() to the prototype of Dog by setting the prototype to a new object.

function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line

};
*/

function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype = {
    // Only change code below this line
    numLegs: 2,
    eat() {
      console.log("nom nom nom");
    },
    describe() {
      console.log("My name is " + this.name);
    }
  };