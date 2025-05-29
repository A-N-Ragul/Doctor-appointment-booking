import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TopDoctors from "./TopDoctors";
import "../styles/Home.css";
import doctor1 from '../assets/doctor-1.jpg';
import doctor2 from '../assets/doctor-2.jpg';
import doctor3 from '../assets/doctor-3.jpg';
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
const doctorImages = [doctor1, doctor2, doctor3];

const AppointmentIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

const ProfileIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5.121 17.804A9.003 9.003 0 0112 15c2.21 0 4.21.802 5.879 2.13M15 10a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

function Homenew() {
  const navigate = useNavigate();
  const { openSignIn } = useClerk();
  const { user } = useUser();

  const logindetails = () =>
    user
      ? {
          email: user.primaryEmailAddress?.emailAddress,
        }
      : null;

  const login = logindetails();

  return (
    <div>
      <header>
        <nav className="section__container nav__container">
          <div className="nav__logo">
            Health<span>Care</span>
          </div>
          <ul className="nav__links">
            <li className="link">
              <Link to="/">Home</Link>
            </li>
            <li className="link">
              <Link to="/about">About Us</Link>
            </li>
            <li className="link">
              <Link to="/Contact">Contact</Link>
            </li>
            <li className="link">
              <Link to="/doctors">Doctors</Link>
            </li>

          </ul>
          <div className="flex items-center gap-4">
            {login && login.email === "anbunmragul@gmail.com" && (
              <button className="ad" onClick={() => navigate('/admin')}>Admin Panel</button>
            )}
            {user ? (
              <UserButton
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    userButtonPopoverActionButton: "text-sm",
                  },
                }}
              >{login && login.email !== "anbunmragul@gmail.com" &&
                <UserButton.MenuItems>
                  <UserButton.Action
                    label="MyProfile"
                    labelIcon={ProfileIcon}
                    onClick={() => navigate('/myprofile')}
                  />
                  <UserButton.Action
                    label="MyAppointments"
                    labelIcon={AppointmentIcon}
                    onClick={() => navigate('/myappointments')}
                  />
                </UserButton.MenuItems>}
                {login && login.email == "anbunmragul@gmail.com" &&
                <UserButton.MenuItems>
                  <UserButton.Action
                    label="Dashboard"
                    labelIcon={ProfileIcon}
                    onClick={() => navigate('/admin/dashboard' )}
                  />
                  <UserButton.Action
                    label="Appointments"
                    labelIcon={AppointmentIcon}
                    onClick={() => navigate('/admin/appointments')}
                  />
                </UserButton.MenuItems>}
              </UserButton>
            ) : (
              <button className="btn" onClick={openSignIn}>Create Account</button>
            )}
          </div>
        </nav>
        <div className="section__container header__container" id="home">
          <div className="header__content">
            <h1>Providing an Exceptional Patient Experience</h1>
            <p>
              Welcome, where exceptional patient experiences are our priority.
              With compassionate care, state-of-the-art facilities, and a
              patient-centered approach, we're dedicated to your well-being. Trust
              us with your health and experience the difference.
            </p>
            <button className="btn">
              <Link to="doctors" className="book-link">
                Book Appointment
              </Link>
            </button>
          </div>
        </div>
      </header>
      <section className="section__container service__container" id="service">
        <div className="service__header">
          <div className="service__header__content">
            <h2 className="section__header">Our Special service</h2>
            <p>
              Beyond simply providing medical care, our commitment lies in
              delivering unparalleled service tailored to your unique needs.
            </p>
          </div>
          <button className="service__btn">Ask A Service</button>
        </div>
        <div className="service__grid">
          <div className="service__card">
            <span>
              <i className="ri-microscope-line"></i>
            </span>
            <h4>Laboratory Test</h4>
            <p>
              Accurate Diagnostics, Swift Results: Experience top-notch Laboratory
              Testing at our facility.
            </p>
            <Link to="/services">Learn More</Link>
          </div>
          <div className="service__card">
            <span>
              <i className="ri-mental-health-line"></i>
            </span>
            <h4>Health Check</h4>
            <p>
              Our thorough assessments and expert evaluations help you stay
              proactive about your health.
            </p>
            <Link to="/services">Learn More</Link>
          </div>
          <div className="service__card">
            <span>
              <i className="ri-hospital-line"></i>
            </span>
            <h4>General Dentistry</h4>
            <p>
              Experience comprehensive oral care with Dentistry. Trust us to keep
              your smile healthy and bright.
            </p>
            <Link to="/services">Learn More</Link>
          </div>
        </div>
      </section>
      <section className="section__container about__container" id="about">
        <div className="about__content">
          <h2 className="section__header">About Us</h2>
          <p>
            Welcome to our healthcare website, your one-stop destination for
            reliable and comprehensive health care information. We are committed
            to promoting wellness and providing valuable resources to empower you
            on your health journey.
          </p>
          <p>
            Explore our extensive collection of expertly written articles and
            guides covering a wide range of health topics.
          </p>
          <p>
            Discover practical health tips and lifestyle advice to optimize your
            physical and mental well-being.
          </p>
        </div>
      </section>
      <section className="section__container why__container" id="blog">
        <div className="why__content">
          <h2 className="section__header">Why Choose Us</h2>
          <p>
            With a steadfast commitment to your well-being, our team of highly
            trained healthcare professionals ensures that you receive nothing
            short of exceptional patient experiences.
          </p>
          <div className="why__grid">
            <span>
              <i className="ri-hand-heart-line"></i>
            </span>
            <div>
              <h4>Intensive Care</h4>
              <p>
                Our Intensive Care Unit is equipped with advanced technology and
                staffed by team of professionals
              </p>
            </div>
            <span>
              <i className="ri-truck-line"></i>
            </span>
            <div>
              <h4>Free Ambulance Car</h4>
              <p>
                A compassionate initiative to prioritize your health and
                well-being without any financial burden.
              </p>
            </div>
            <span>
              <i className="ri-hospital-line"></i>
            </span>
            <div>
              <h4>Medical and Surgical</h4>
              <p>
                Our Medical and Surgical services offer advanced healthcare
                solutions to address medical needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section__container doctors__container" id="pages">
        <div className="doctors__header">
         
          
        </div>
          <TopDoctors />
           <div className="doctors__header__content">
            <h2 className="section__header">Our Special Doctors</h2>
            <p>
              We take pride in our exceptional team of doctors, each a specialist
              in their respective fields.
            </p>
          </div>
        <div className="doctors__grid">
          {[1, 2, 3].map((i) => (
            <div className="doctors__card" key={i}>
              <div className="doctors__card__image">
                <img src={doctorImages[i - 1]} alt="doctor" />
                <div className="doctors__socials">
                  <span>
                    <i className="ri-instagram-line"></i>
                  </span>
                  <span>
                    <i className="ri-facebook-fill"></i>
                  </span>
                  <span>
                    <i className="ri-heart-fill"></i>
                  </span>
                  <span>
                    <i className="ri-twitter-fill"></i>
                  </span>
                </div>
              </div>
              <h4>
                {["Emily Smith", "Jhonny Mama", "Michael Lee"][i - 1]}
              </h4>
              <p>
                {["Cardiologist", "Neurosurgeon", "Dermatologist"][i - 1]}
              </p>
            </div>
          ))}
        </div>
      </section>
    
      <footer className="footer">
        <div className="section__container footer__container">
          <div className="footer__col">
            <h3>
              Health<span>Care</span>
            </h3>
            <p>
              We are honored to be a part of your healthcare journey and committed
              to delivering compassionate, personalized, and top-notch care.
            </p>
            <p>
              Trust us with your health, and let us work together to achieve the
              best possible outcomes.
            </p>
          </div>
          <div className="footer__col">
            <h4>About Us</h4>
            <p>Home</p>
            <p>About Us</p>
            <p>Work With Us</p>
            <p>Our Blog</p>
            <p>Terms & Conditions</p>
          </div>
          <div className="footer__col">
            <h4>Services</h4>
            <p>Search Terms</p>
            <p>Advance Search</p>
            <p>Privacy Policy</p>
            <p>Suppliers</p>
            <p>Our Stores</p>
          </div>
          <div className="footer__col">
            <h4>Contact Us</h4>
            <p>
              <i className="ri-map-pin-2-fill"></i> 123, London Bridge Street, London
            </p>
            <p>
              <i className="ri-mail-fill"></i> support@care.com
            </p>
            <p>
              <i className="ri-phone-fill"></i> (+012) 3456 789
            </p>
          </div>
        </div>
        <div className="footer__bar">
          <div className="footer__bar__content">
            <p>Copyright © 2023 Web Design Mastery. All rights reserved.</p>
            <div className="footer__socials">
              <span>
                <i className="ri-instagram-line"></i>
              </span>
              <span>
                <i className="ri-facebook-fill"></i>
              </span>
              <span>
                <i className="ri-heart-fill"></i>
              </span>
              <span>
                <i className="ri-twitter-fill"></i>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Homenew;