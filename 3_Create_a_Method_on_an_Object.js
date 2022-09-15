/*
We can use a function in the Object's Property, and can achieve our desired functionality.


Task:
Using the dog object, give it a method called sayLegs. The method should return the sentence This dog has 4 legs.
let dog = {
  name: "Spot",
  numLegs: 4,

};

dog.sayLegs();
*/

let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {
      return "This dog has " + dog.numLegs + " legs.";
    }
  };
  
  dog.sayLegs();