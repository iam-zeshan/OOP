/*
I understand that, we can also use this anonymos function to make a group of the Mixin functions for instance Objects.


Task:
Create a module named funModule to wrap the two mixins isCuteMixin and singMixin. funModule should return an object.
let isCuteMixin = function(obj) {
  obj.isCute = function() {
    return true;
  };
};
let singMixin = function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
  };
};

*/

let funModule = (function () {
    return {
      isCuteMixin: function (obj) {
        obj.isCute = function () {
          return true;
        };
      },
      singMixin: function (obj) {
        obj.sing = function () {
          console.log("Singing to an awesome tune");
        };
      }
    }
  }
  )();