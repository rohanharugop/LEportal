import React from "react";
import HorizontalNav from "./components/navBarStuff/HorizontalNav";
import MainLogo from "./components/MainLogo/logo";

function App() {
  return (
    <div>
      <div id="logo-div">
        <MainLogo />
      </div>
      <div id="navbar" className="navbar-padding">
        <HorizontalNav />
      </div>
    </div>
  );
}

export default App;
