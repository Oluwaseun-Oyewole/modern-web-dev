import { createElement } from "./utils";
var count = 0;

function increment() {
  count += 1;
  document.getElementById("h1").textContent = count;
}

const button = createElement("button", null, "Increment", {
  click: () => {
    increment();
  },
});
const h1 = createElement("h1", "h1", "0");
