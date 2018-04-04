// Constructors returning primitive values

function Ninja() {
  this.skulk = function() {
    return true;
  };

  return 1;
}

assert(Ninja() === 1, "Return value honored when not called as a constructor");

var ninja = new Ninja();

assert(typeof ninja === "object", "Object return when called as a constructor");
assert(typeof ninja.skulk === "function", "ninja object has a skulk method");
