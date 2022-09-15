/*
We can make a new Object by using the blue print of the Constructer Function with the help of 'this' keyword. And the 'this' inside of the Constructor Function would tell the JavaScript that the Object is being created.

Task:
Use the Dog constructor from the last lesson to create a new instance of Dog, assigning it to a variable hound.

function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Only change code below this line
*/

function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
  }
  // Only change code below this line
  let hound = new Dog()

  //Now we can use the above Object's property by just typing "hound.name = "...