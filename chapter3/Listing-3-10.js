// Referencing previous defaults parameters

function performAction(
  ninja,
  action = "skulking",
  message = ninja + " " + action
) {
  return message;
}

assert(performAction("Yoshi") === "Yoshi skulking", "Yoshi is skulking");
