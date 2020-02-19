import React from "react";
import "./App.css";
import ScoreTracker from "./ScoreTracker";
import logo from "./logo.svg";
import Map from "./Map/Map";

function App() {
  const markerPosition = {
    lat: 49.8419,
    lng: 24.0315
  };

  return (
    <div className="App">
      <ScoreTracker />
      <Map markerPosition={markerPosition} />
    </div>
  );
}

export default App;
