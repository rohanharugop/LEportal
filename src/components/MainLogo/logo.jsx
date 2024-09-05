import React from "react";
import './logo.css';
import img1 from './images/logo.png';  // Corrected import path

const MainLogo = () => {
    return (
        <div id="logo-div">
            <img id = 'logo-div img'src={img1} alt="Main Logo" />  {/* Use the imported image variable */}
        </div>
    );
}

export default MainLogo;
