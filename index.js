// import { createElement } from "./utils";
// var count = 0;

// function increment() {
//   count += 1;
//   document.getElementById("h1").textContent = count;
// }

// const button = createElement("button", null, "Increment", {
//   click: () => {
//     increment();
//   },
// });
// const h1 = createElement("h1", "h1", "0");
import React, { useState } from "react";
import { createRoot } from "react-dom/client";

function App() {
  const [count, setCount] = useState(0);
  return React.createElement("div", {}, [
    React.createElement(
      "button",
      {
        onClick: () => {
          setCount((count) => count + 1);
        },
      },
      "Increment"
    ),
    React.createElement("h1", {}, count),
  ]);
}

const rootElement = document.getElementById("app");
createRoot(rootElement).render(React.createElement(App));
