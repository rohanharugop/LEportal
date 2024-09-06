import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import React Router components
import HorizontalNav from "./components/navBarStuff/HorizontalNav";
import MainLogo from "./components/MainLogo/logo";
// import HomePage from "./components/HomePage/HomePage"; // Home page component
import AboutPage from "./components/navBarStuff/AboutPage";
function App() {
  return (
    <Router>
      <div>
        <div id="logo-div">
          <MainLogo />
        </div>
        <div id="navbar" className="navbar-padding">
          <HorizontalNav />
        </div>

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
