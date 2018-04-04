// Using arrow functions to work around callback function contexts

function Button() {
  this.clicked = false;
  this.click = () => {
    this.clicked = true;
    assert(button.clicked, "The button has been clicked");
    console.log(button);
  };
}

var button = new Button();
var elem = document.getElementById("test");
elem.addEventListener("click", button.click);
