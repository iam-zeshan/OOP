/*
I've learned the function that, we often need to invoke a function without calling and need to execute it at the time when it is declared. We can do that by using the below pattern.
And this pattern is known as an immediately invoked function expression or IIFE.

Task:
Rewrite the function makeNest and remove its call so instead it's an anonymous immediately invoked function expression (IIFE).

function makeNest() {
  console.log("A cozy nest is ready");
}

makeNest();
*/

(function () {console.log("A cozy nest is ready");})();
  