import "./App.css";
import { useState } from "react";
import FlippableCard from "./component/flippable-card";

function App() {
  return (
    <div className="App">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: "30px",
        }}
      >
        <FlippableCard />
      </div>
    </div>
  );
}

export default App;
