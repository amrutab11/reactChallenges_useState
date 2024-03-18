import "./styles.css";
import React from "react";

export default function App() {
  const [show, setShow] = React.useState(false);
  return (
    <div className="App">
      <button
        style={{ margin: "10px", backgroundColor: "purple", display: "left" }}
        onClick={() => setShow(!show)}
      >
        Show/Hide
      </button>

      <div style={{ display: show ? "block" : "none" }}>
        <h1>Welcome to react challenges</h1>
      </div>
    </div>
  );
}
