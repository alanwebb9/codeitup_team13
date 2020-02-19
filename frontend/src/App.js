import React from "react";
import "./App.css";
import ScoreTracker from "./ScoreTracker";
import logo from "./logo.svg";
import MapComp from "./Map/Map";

function App() {
  return (
    <div className="App">
      <ScoreTracker />
      <MapComp />
    </div>
  );
}

export default App;
