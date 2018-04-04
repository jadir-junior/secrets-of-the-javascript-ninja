// Invocation as a function

function ninja() {
  return this;
}

function samurai() {
  "use strict";
  return this;
}

assert(
  ninja() === window,
  "In a 'nonstrict' ninja function, the context is the global window object"
);
assert(
  samurai() === undefined,
  "In a 'strict' samurai function, the context is undefined"
);
