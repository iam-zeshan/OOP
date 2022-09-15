/*
In the previouse Challanges I've learned that, there are two type of properties of Constructor Function:
No 1. ownProperty
No 2. prototype
I've learned the way that how we can add the ownProperty to an array, But in this Challange I've understand that how we can add the prototype property with the use of 'else'.

Task:
Add all of the own properties of beagle to the array ownProps. Add all of the prototype properties of Dog to the array prototypeProps.

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Only change code below this line
*/

function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  let beagle = new Dog("Snoopy");
  
  let ownProps = [];
  let prototypeProps = [];
  
  // Only change code below this line
  
  for (let prop in beagle)
  {
    if (Dog.hasOwnProperty(prop))
    {
      ownProps.push(prop);
    }else {
      prototypeProps.push(prop);
    }
  }