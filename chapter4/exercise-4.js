// var ninja1 = {
//   whoAmi: function() {
//     return this;
//   }
// };

// var ninja2 = {
//   whoAmi: ninja1.whoAmi
// };

// var identify = ninja2.whoAmi;

// assert(ninja1.whoAmi() === ninja1, "ninja1?");
// assert(ninja2.whoAmi() === ninja1, " ninja1 again?");

// assert(identify() === ninja1, "ninja1 again?");

// assert(ninja1.whoAmi.call(ninja2) === ninja2, "ninja2 here");

// function Ninja() {
//   this.whoAmi = () => this;
// }

// var ninja1 = new Ninja();
// var ninja2 = {
//   whoAmi: ninja1.whoAmi
// };

// assert(ninja1.whoAmi() === ninja1, "ninja1 here?");
// assert(ninja2.whoAmi() === ninja2, "ninja2 here?");

function Ninja() {
  this.whoAmi = function() {
    return this;
  }.bind(this);
}

var ninja1 = new Ninja();
var ninja2 = {
  whoAmi: ninja1.whoAmi
};

assert(ninja1.whoAmi() === ninja1, "ninja1 here?");
assert(ninja2.whoAmi() === ninja2, "ninja2 here?");
