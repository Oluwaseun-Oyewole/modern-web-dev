import React, { useState } from "react";
import { createRoot } from "react-dom/client";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count - {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
    </div>
  );
}

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(<App />);
} else console.error("Root container not found");
