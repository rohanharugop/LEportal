import React from "react";
import HorizontalNav from "./components/navBarStuff/HorizontalNav";
import MainLogo from "./components/MainLogo/logo";

function App() {
  return (
    <div>
      <MainLogo /> {/* Corrected component usage with capital letter */}
      <HorizontalNav />
      <h1>Hello there</h1>
    </div>
  );
}

export default App;
