// Using the arguments object to perform operations on all function arguments

// function sum() {
//   var sum = 0;
//   for (var i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }

//   return sum;
// }

// Exercise rest params

function sum(...numberToSum) {
  return numberToSum.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
}

assert(sum(1, 2) === 3, "We can add two numbers");
assert(sum(1, 2, 3) === 6, "We can add three numbers");
assert(sum(1, 2, 3, 4) === 10, "We can add four numbers");
