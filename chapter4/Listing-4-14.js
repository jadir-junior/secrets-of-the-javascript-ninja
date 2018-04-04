// Arrow functions and object literals
assert(this === window, "this === window");

var button = {
  clicked: false,
  click: () => {
    this.clicked = true;
    assert(button.clicked, "The button has been clicked");
    assert(this === window, "In arrow function this === window");
    assert(window.clicked, "clicked is stored in window");
  }
};

var elem = document.getElementById("test");
elem.addEventListener("click", button.click);
