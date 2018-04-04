// Using strict mode to avoid arguments aliasing
"use strict";

function infiltrate(person) {
  assert(person === "gardener", "The person is a gardener");
  assert(arguments[0] === "gardener", "The first argument is a gardener");

  arguments[0] = "ninja";

  assert(arguments[0] === "ninja", "The person is a ninja now");
  assert(person === "gardener", "The person is still a gardener");
}

infiltrate("gardener");
