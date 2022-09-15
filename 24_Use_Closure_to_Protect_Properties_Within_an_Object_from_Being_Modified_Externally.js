/*
Ok, I've learned the concept of 'closure', we can make the variable private for not being acced publicly in the Constructor Function.

Task:
Change how weight is declared in the Bird function so it is a private variable. Then, create a method getWeight that returns the value of weight 15.

function Bird() {
  this.weight = 15;


}
*/

function Bird() {
    let weight = 15;
    this.getWeight = function (){
      return weight;
    };
  
  }