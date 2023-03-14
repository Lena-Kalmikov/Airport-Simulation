import './App.css';
import React, { useEffect, useState } from "react";
import Airport from './components/airport';

function App() {
  return (
    <div className="App">
      <h1>Airport Simulation</h1>
      <div><Airport /></div>
    </div>
  );
}
export default App;