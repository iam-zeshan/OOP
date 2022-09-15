/*
We can add the common behavior to an unrelated objects by using mixin method.


Task:
Create a mixin named glideMixin that defines a method named glide. Then use the glideMixin to give both bird and boat the ability to glide.

let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Only change code below this line

*/
let bird = {
    name: "Donald",
    numLegs: 2
  };
  
  let boat = {
    name: "Warrior",
    type: "race-boat"
  };
  
  // Only change code below this line
  
  let glideMixin = function (obj){
    obj.glide = function(){
      console.log("Yeyy! I'm gliding");
    }
  }
  glideMixin(bird);
  glideMixin(boat);
  