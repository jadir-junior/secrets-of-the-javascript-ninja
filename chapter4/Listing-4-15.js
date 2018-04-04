// Binding a specific context to an event handler

var button = {
  clicked: false,
  click: function() {
    this.clicked = true;
    assert(button.clicked, "The button has been clicked");
  }
};

var elem = document.getElementById("test");
elem.addEventListener("click", button.click.bind(button));

var boundFunction = button.click.bind(button);
assert(
  boundFunction != button.click,
  "Calling bind creates a completly new function"
);
