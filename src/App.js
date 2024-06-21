import React from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from "./pages/Landingpage";
import Orderpage from "./pages/Orderpage";

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" exact element={<Landingpage />} />
          <Route path="/order" exact element={<Orderpage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
