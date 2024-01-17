import React from "react";
import NJTransitlogo from "../src/images/New_Jersey_Transit_Logo.svg.png";
import './App.css';
import CreationPage from "./pages/CreationPage";
import QrListPage from "./pages/QrListPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const App = () => {

  return (
    <Router>
      <div class="App">
          <Routes>
            <Route path ="/" element={<QrListPage/>}/>
            <Route path ="/create" element={<CreationPage/>}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
