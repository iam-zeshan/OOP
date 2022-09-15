/*
The new Object which has been created from the Constructor Function then, we can find wheather it is made of 'x' constructor Function OR Not, by using a '.constructor' property. 
The new created Object from the Constructor Function, we called them an 'instance of that x ...'


Task:
Write a joinDogFraternity function that takes a candidate parameter and, using the constructor property, return true if the candidate is a Dog, otherwise return false.

function Dog(name) {
  this.name = name;
}

// Only change code below this line
function joinDogFraternity(candidate) {

}
*/

function Dog(name) {
    this.name = name;
  }
  
  // Only change code below this line
  function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog)
    {
      return true;
    }else
    {
      return false;
    }
  }