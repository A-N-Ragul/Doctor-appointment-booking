import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets-2/assets';
import '../styles/Appointment.css'; 

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const navigate = useNavigate();
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState('');

  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId);
    setDocInfo(docInfo);
  };

  // Clear expired appointments from allAppointments in localStorage
  const clearExpiredAppointments = () => {
    const now = new Date();
    let allAppointments = JSON.parse(localStorage.getItem('allAppointments')) || [];
    const filtered = allAppointments.filter(app => {
      // Convert date + time string into a Date object
      const appDateTime = new Date(`${app.date}T${app.time}`);
      return appDateTime > now;
    });
    if (filtered.length !== allAppointments.length) {
      localStorage.setItem('allAppointments', JSON.stringify(filtered));
    }
    return filtered;
  };

  const getAvailableSlots = () => {
    const filteredAppointments = clearExpiredAppointments();

    setDocSlots([]);
    let today = new Date();
    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);
      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        // Check if slot is booked for this doctor on this date and time
        const isBooked = filteredAppointments.some(app => 
          app.doctorId === docId &&
          app.date === currentDate.toISOString().slice(0, 10) &&
          app.time === formattedTime
        );

        if (!isBooked) {
          timeSlots.push({
            datetime: new Date(currentDate),
            time: formattedTime
          });
        }
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      setDocSlots(prev => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    if (docInfo) {
      getAvailableSlots();
    }
  }, [docInfo]);

  // Also listen for storage changes (e.g., admin removal or cancellation)
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === 'allAppointments') {
        getAvailableSlots();
        setSlotTime('');
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [docId]);

  const handleBook = () => {
    if (!slotTime) {
      alert("Please select a time slot!");
      return;
    }

    // The booking date corresponds to the selected day
    const bookingDate = docSlots[slotIndex][0].datetime.toISOString().slice(0, 10);

    const bookingData = {
      doctorId: docInfo._id,
      doctorName: docInfo.name,
      degree: docInfo.degree,
      speciality: docInfo.speciality,
      date: bookingDate,
      time: slotTime,
      fee: docInfo.fees,
      image: docInfo.image,
    };

    // Store single appointment for AppointmentStatus page
    localStorage.setItem('appointmentData', JSON.stringify(bookingData));

    // Store all appointments cumulatively in 'allAppointments'
    let allAppointments = JSON.parse(localStorage.getItem('allAppointments')) || [];
    allAppointments.push(bookingData);
    localStorage.setItem('allAppointments', JSON.stringify(allAppointments));

    // Update slots to remove booked slot instantly
    getAvailableSlots();
    setSlotTime('');

    // Navigate to AppointmentStatus page with state
    navigate('/appointment-status', { state: bookingData });
  };

  return docInfo && (
    <div className="appointment-container">
      <div className="doctor-section">
        <div className="doctor-image-wrapper">
          <img className="doctor-image" src={docInfo.image} alt="Doctor" />
        </div>
        <div className="doctor-info-card">
          <p className="doctor-name">
            {docInfo.name}
            <img className="verified-icon" src={assets.verified_icon} alt="Verified" />
          </p>
          <div className="doctor-meta">
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button className="experience-tag">{docInfo.experience}</button>
          </div>
          <div className="doctor-about">
            <p className="about-heading">About</p>
            <p className="about-text">{docInfo.about}</p>
          </div>
          <p className="doctor-fee">
            Appointment fee : <span>{currencySymbol}{docInfo.fees}</span>
          </p>
        </div>
      </div>

      <div className="booking-section">
        <p className="section-heading">Booking Slots</p>
        <div className="day-slot-container">
          {
            docSlots.length && docSlots.map((item, index) => (
              <div
                key={index}
                onClick={() => setSlotIndex(index)}
                className={`day-slot ${slotIndex === index ? 'selected' : ''}`}
              >
                <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                <p>{item[0] && item[0].datetime.getDate()}</p>
              </div>
            ))
          }
        </div>

        <div className="time-slot-container">
          {
            docSlots.length && docSlots[slotIndex].map((item, index) => (
              <p
                key={index}
                onClick={() => setSlotTime(item.time)}
                className={`time-slot ${item.time === slotTime ? 'selected' : ''}`}
              >
                {item.time.toLowerCase()}
              </p>
            ))
          }
        </div>

        <button className="book-btn" onClick={handleBook}>Book an Appointment</button>
      </div>
    </div>
  );
};

export default Appointment;
