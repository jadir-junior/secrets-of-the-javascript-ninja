// Constructors explicity returning object values

var puppet = {
  rules: false
};

function Emperor() {
  this.rules = true;
  return puppet;
}

var emperor = new Emperor();

assert(emperor === puppet, "The emperor is merely a puppet!");
assert(emperor.rules === false, "The puppet does not know how to rule!");
