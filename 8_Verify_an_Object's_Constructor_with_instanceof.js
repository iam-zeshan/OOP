/*
The new Object that we're being created from the Constructor Function, we can verify it by using the 'instanceof' keyword. If the new created Object was made from the Constructor Function then, it would return the 'True' otherwise it would return 'false'.


Task:
Create a new instance of the House constructor, calling it myHouse and passing a number of bedrooms. Then, use instanceof to verify that it is an instance of House.
*/

function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  
  // Only change code below this line
  let myHouse = new House(10);
  myHouse instanceof House;