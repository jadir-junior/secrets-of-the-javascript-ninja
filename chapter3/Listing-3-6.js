// Comparing an arrow functon and a function expression
var greet = name => "Greetings " + name;
assert(greet("Oishi") === "Greetings Oishi", "Oishi is properly greeted");

var anotherGreet = function(name) {
  return "Greetings " + name;
};

assert(
  greet("Oishi") === "Greetings Oishi",
  "Again, Oishi is properly greeted"
);
