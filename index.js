var count = 0;

function increment() {
  count += 1;
  document.getElementById("h1").textContent = count;
}

var $button = createElement("button", null, "Increment", {
  click: () => {
    increment();
  },
});
var $h1 = createElement("h1", "h1", "0");
