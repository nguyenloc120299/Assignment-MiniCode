import React from "react";
import logo from "./logo.svg";
import "./App.css";
import RenderRouter from "./routes";
import { BrowserRouter as Router } from "react-router-dom"; 

function App() {
  return (
    <div className="App">
      <Router>
        <RenderRouter />
      </Router>
    </div>
  );
}

export default App;
