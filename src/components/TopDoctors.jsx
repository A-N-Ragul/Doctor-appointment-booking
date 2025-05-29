import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import '../styles/TopDoctors.css'

const TopDoctors = () => {
  const navigate = useNavigate()
  const { doctors } = useContext(AppContext)

  return (
    <div className="top-doctors-container">
      <h1 className="top-doctors-title">Top Doctors to Book</h1>
      <p className="top-doctors-description">
        Simply browse through our extensive list of trusted doctors
      </p>
      <div className="top-doctors-grid">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(`/appointment/${item._id}`)}
            className="doctor-card"
          >
            <img className="doctor-image" src={item.image} alt={item.name} />
            <div className="doctor-info">
              <div className="status-available">
                <span className="status-dot"></span>
                <p>Available</p>
              </div>
              <p className="doctor-name">{item.name}</p>
              <p className="doctor-speciality">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          navigate('/doctors')
          scrollTo(0, 0)
        }}
        className="more-button"
      >
        more
      </button>
    </div>
  )
}

export default TopDoctors
