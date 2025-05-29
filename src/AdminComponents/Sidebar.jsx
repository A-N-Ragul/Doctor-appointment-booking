import React from 'react'
import { AdminAssets } from '../AdminAssets/assets'
import { NavLink } from 'react-router-dom'
import '../styles/Sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <ul>
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            `sidebar-link ${isActive ? 'active' : ''}`
          }
        >
          <img src={AdminAssets.home_icon} alt="Dashboard" />
          <p>Dashboard</p>
        </NavLink>

        <NavLink
          to='/appoin'
          className={({ isActive }) =>
            `sidebar-link ${isActive ? 'active' : ''}`
          }
        >
          <img src={AdminAssets.appointment_icon} alt="Appointments" />
          <p>Appointments</p>
        </NavLink>

        <NavLink
          to="/admin/add-doctor"
          className={({ isActive }) =>
            `sidebar-link ${isActive ? 'active' : ''}`
          }
        >
          <img src={AdminAssets.add_icon} alt="Add Doctor" />
          <p>Add Doctor</p>
        </NavLink>

        <NavLink
          to="/admin-doctors"
          className={({ isActive }) =>
            `sidebar-link ${isActive ? 'active' : ''}`
          }
        >
          <img src={AdminAssets.people_icon} alt="Doctors List" />
          <p>Doctors List</p>
        </NavLink>
      </ul>
    </div>
  )
}

export default Sidebar
