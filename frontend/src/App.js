import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GoldPredictor from "./components/GoldPredictor";
import About from "./components/About";
import History from "./components/History";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GoldPredictor />} />
        <Route path="/about" element={<About />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  );
}

export default App;
