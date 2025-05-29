import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Ver from '../assets/download.jpg';
import '../styles/AppointmentStatus.css';

const AppointmentStatus = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [appointment, setAppointment] = useState(null);
  const [expired, setExpired] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    let data = location.state || JSON.parse(localStorage.getItem('appointmentData'));

    if (!data) {
      setAppointment(null);
      return;
    }

    const [hour, minute] = data.time.split(':').map(Number);
    const appointmentDateTime = new Date(data.date);
    appointmentDateTime.setHours(hour);
    appointmentDateTime.setMinutes(minute);

    const now = new Date();

    if (appointmentDateTime < now) {
      localStorage.removeItem('appointmentData');
      setExpired(true);
      setAppointment(null);
    } else {
      setAppointment(data);
      localStorage.setItem('appointmentData', JSON.stringify(data));
      setShowPopup(true);
    }
  }, [location.state]);

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel this appointment?')) {
      const data = JSON.parse(localStorage.getItem('appointmentData'));

      localStorage.removeItem('appointmentData');

      const myAppointments = JSON.parse(localStorage.getItem('myAppointments')) || [];
      const updatedMyAppointments = myAppointments.filter(
        app => app.time !== data.time || app.date !== data.date || app.doctorId !== data.doctorId
      );
      localStorage.setItem('myAppointments', JSON.stringify(updatedMyAppointments));

      const allAppointments = JSON.parse(localStorage.getItem('allAppointments')) || [];
      const updatedAllAppointments = allAppointments.filter(
        app => app.time !== data.time || app.date !== data.date || app.doctorId !== data.doctorId
      );
      localStorage.setItem('allAppointments', JSON.stringify(updatedAllAppointments));

      navigate('/');
    }
  };

  if (!appointment && !expired) {
    return (
      <div className="appointment-status-container">
        <h2>No Appointment Found</h2>
        <button onClick={() => navigate('/')}>Go to Home</button>
      </div>
    );
  }

  if (expired) {
    return (
      <div className="appointment-status-container">
        <h2>Your appointment has expired.</h2>
        <button onClick={() => navigate('/')}>Book New Appointment</button>
      </div>
    );
  }

  return (
    <>
      <div className="appstatus-container">
        <h2 className="appstatus-heading">Appointment Confirmed!</h2>
        <div className="appstatus-appointment-card">
          <img
            src={appointment.image}
            alt={appointment.doctorName}
            className="appstatus-doctor-image"
          />
          <h3>{appointment.doctorName}</h3>
          <p>
            {appointment.degree} - {appointment.speciality}
          </p>
          <p>
            <strong>Date:</strong> {appointment.date}
          </p>
          <p>
            <strong>Time:</strong> {appointment.time}
          </p>
          <p>
            <strong>Fee:</strong> {appointment.fee}
          </p>
        </div>
        <div className="appstatus-action-buttons">
          <button className="appstatus-cancel-btn" onClick={handleCancel}>
            Cancel Appointment
          </button>
          <button onClick={() => navigate('/')}>Back to Home</button>
        </div>
      </div>

      {showPopup && (
        <div className="appstatus-popup-overlay" onClick={() => setShowPopup(false)}>
          <div
            className="appstatus-popup-content"
            onClick={e => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              className="appstatus-popup-close-btn"
              aria-label="Close"
              onClick={() => setShowPopup(false)}
            >
              &times;
            </button>
            <img
              className="img"src={Ver}
              alt="Verification Success"
            />
            <h3>Appointment Confirmed!</h3>
            <p>Your appointment has been successfully booked.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default AppointmentStatus;
