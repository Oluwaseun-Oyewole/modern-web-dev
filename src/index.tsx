import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./style.css";

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h1>Count - {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
    </div>
  );
}

const container = document.getElementById("root");
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(<App />);
} else console.error("Root container not found");
