// Tackling default parameters before ES6

function performAction(ninja, action) {
  action = typeof action === "undefined" ? "skulking" : action;
  return ninja + " " + action;
}

assert(
  performAction("Fuma") === "Fuma skulking",
  "The default value is used for Fuma"
);
assert(
  performAction("Yoshi") === "Yoshi skulking",
  "The default value is used for Yoshi"
);
assert(
  performAction("Hattori") === "Hattori skulking",
  "The default value is used for Hattori"
);
assert(
  performAction("Yagyu", "sneaking") === "Yagyu sneaking",
  "Yagyu can do whatever he pleases, even sneak!"
);
