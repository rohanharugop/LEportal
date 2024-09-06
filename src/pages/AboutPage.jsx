import React from 'react';
import './AboutPage.css'; // Custom CSS for rainbow effect

// Helper function to split text into words wrapped in span tags
const highlightWords = (text) => {
  return text.split('\n').map((word, index) => (
    <span key={index} className="rainbow-word">
      {word}&nbsp; {/* Adding non-breaking space */}
    </span>
  ));
};

const AboutPage = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <div id = 'sep'></div>
      <br></br>
      
      <p className="rainbow-text">
        {highlightWords(
          `Legion Energy Products Pvt Ltd specializes in manufacture of world-class products for electrical power industry.
          Brand named “LE”, our products cater to Transmission, Sub-station, Distribution, and Telecom ADSS networks.
          High performance and reliability best describe our product quality. Cost-effectiveness and a policy of “Customer First” 
          have driven us towards a growing customer base of 450+ clients across 50+ countries which include top EPC companies 
          and Government Utilities.`
        )}
      </p>
        <br></br>
      <p className="rainbow-text">
        {highlightWords(
          `Since its inception in 2007, Legion Energy Products Pvt. Ltd. has developed into a much sought-after brand for Electrical Power Industry and Telecom Networks.
          The ever-growing array of products range from Transmission Line Hardware, Conductor/Earth-wire/Tower Accessories, 
          and Sub-station connectors from 11kV to 765kV, Distribution/ADSS/Covered conductor fittings.`
        )}
      </p>
        <br></br>
      <p className="rainbow-text">
        {highlightWords(
          `Our Bangalore, India based unit boasts of ISO 9001:2015 certification and is well equipped with state-of-the-art manufacturing and testing infrastructure.
          Our in-house laboratory has been assessed and accredited with NABL certification. Needless to say, uncompromised quality is ingrained in our entire work system.
          The credit for stringent quality control goes to our strong dedicated workforce. Commitment to place Customer needs above everything else has been key to great Customer satisfaction.
          To summarize, Legion Energy is poised for exponential growth with our exceptional technical innovation, product quality, and responsiveness to Customers.`
        )}
      </p>
    </div>
  );
};

export default AboutPage;
