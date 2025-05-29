import React from 'react';
import '../styles/About.css'; // Assuming you have a CSS file for styling
import { assets } from '../assets-2/assets';
import Footer from '../components/Footer';
const About = () => {
  return (
    <>
    <div className="about-container">
      <div className="about-title">
        <p>
          ABOUT <span>US</span>
        </p>
      </div>

      <div className="about-content">
        <img className="about-image" src={assets.about_image} alt="About Us" />
        <div className="about-text">
          <p>
            Welcome to <strong>Prescripto</strong>, your trusted partner in managing your healthcare needs
            conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it
            comes to scheduling doctor appointments and managing their health records.
          </p>
          <p>
            Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance
            our platform, integrating the latest advancements to improve user experience and deliver superior
            service. Whether you're booking your first appointment or managing ongoing care, Prescripto is
            here to support you every step of the way.
          </p>
          <h3>Our Vision</h3>
          <p>
            Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to
            bridge the gap between patients and healthcare providers, making it easier for you to access the
            care you need, when you need it.
          </p>
        </div>
      </div>

      <div className="choose-title">
        <p>
          WHY <span>CHOOSE US</span>
        </p>
      </div>

      <div className="choose-cards">
        <div className="choose-card">
          <h4>EFFICIENCY:</h4>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className="choose-card">
          <h4>CONVENIENCE:</h4>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className="choose-card">
          <h4>PERSONALIZATION:</h4>
          <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>
      
    </div>
    <Footer/>
    </>
  );
};

export default About;
