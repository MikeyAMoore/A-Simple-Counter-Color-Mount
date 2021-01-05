import React, { useState, useEffect } from "react";
import "./styles.css";

function Counter() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("salmon");

  useEffect(() => {
    console.log(`I'm a Use efeect hook, count is ${count}`);
  });

  const handleColorChange = () => {
    const nextColor = color === "salmon" ? "gold" : "salmon";

    setColor(nextColor);
  };
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={handleColorChange}>Change Color</button>
      <h1 style={{ color }}>{count}</h1>
    </div>
  );
}

export default function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Unmount" : "Mount"}
      </button>

      {visible && <Counter />}
    </div>
  );
}
