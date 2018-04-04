// Accessing a function before its declaration

assert(
  typeof fun === "function",
  "fun is a function even though its definition isn't reached yet!"
);

assert(
  typeof myFunExp === "undefined",
  "But we cannot access function expressions"
);

assert(typeof myArrow === "undefined", "Nor arrow functions");

function fun() {}

var myFunExp = function() {};
var myArrow = x => x;
