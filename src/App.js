import React from "react";
import "./App.css";
import IndexApp from "./indexapp/IndexApp";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <IndexApp />
    </Router>
  );
}

export default App;
