import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import React Router components
import Header from "./components/Navbar/Header";
import Home from "./pages/Home";

import AboutPage from "./pages/AboutPage";


function App() {
  return (
    <Router>
      <div>
        <div id="navbar" className="navbar-padding">
          <Header />
        </div>
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> Home page */}
          <Route path="/" element={<Home />} /> 
        </Routes>

        {/* Define routes for different pages */}
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> Home page */}
          <Route path="/about" element={<AboutPage />} /> {/* About Us page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
