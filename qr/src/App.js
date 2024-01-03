import React from "react";
import NJTransitlogo from "../src/images/New_Jersey_Transit_Logo.svg.png";
import './App.css';
import CreationPage from "./pages/CreationPage";

const App = () => {

  return (
    <div class="App">
      <img src={NJTransitlogo} alt="Logo" />
    <div class="body">
      <CreationPage/>
    </div>
    </div>
  );
}

export default App;
