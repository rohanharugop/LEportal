import React from 'react';
import './Home.css';

// const highlightWords = (text) => {
//   return text.split('\n').map((line, index) => (
//     <React.Fragment key={index}>
//       {line.split('\n').map((word, wordIndex) => (
//         <span key={wordIndex} className="rainbow-word">
//           {word}&nbsp; {/* Adding non-breaking space */}
//         </span>
//       ))}
//       <br /> {/* Insert line break after each line */}
//     </React.Fragment>
//   ));
// };


const Home = () => {
  return (
    <div className="container">
      {/* Hero Section */}
      <section className="heroSection">
        <h1 className="title">Legion Energy</h1>
        <p className="subtitle">
        Sustainable products for a robust future
        </p>
        <button className="ctaButton">Explore Our Products</button>
      </section>

     

      {/* Video Section */}
      <section className="videoSection">
        <h2 className="sectionTitle">Watch Our Introduction</h2>
        <div className="videoWrapper">
          <video controls width="100%" height="400">
            <source src="your-video-file.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
       {/* About Section */}
       <section className="aboutSection">
        <h2 className="sectionTitle">About Us</h2>
        <p className="rainbow-word">
        Legion Energy is a Bangalore based company specializing in manufacture of reliable &
             cost-effective products for electrical power industry. Our products are supplied under 
             the brand name“LE"and cater to Transmission, Sub Station, Distribution and Telecom 
             ADSS networks. With vast experience gained in the power industry, Legion Energy has 
             excelled in product design & engineering leading to development & manufacture of 
             high-performance products.
        </p>
      </section>
    </div>
  );
};

export default Home;
