import React from 'react'
import AdminNavbar from './AdminNavbar'
import Sidebar from './Sidebar'
import '../styles/Dashboard.css'
const Dashboard = () => {
  // Sample data — replace with real data later
  const stats = [
    { label: "Total Users", value: 120 },
    { label: "Appointments Today", value: 45 },
    { label: "Doctors Available", value: 10 },
    { label: "Pending Requests", value: 5 },
  ];

  const recentAppointments = [
    { id: 1, patient: "Alice Smith", doctor: "Dr. John", date: "2025-05-15", status: "Confirmed" },
    { id: 2, patient: "Bob Johnson", doctor: "Dr. Emma", date: "2025-05-15", status: "Pending" },
    { id: 3, patient: "Charlie Lee", doctor: "Dr. Mia", date: "2025-05-16", status: "Cancelled" },
  ];
    
   return (
    <div>
      <AdminNavbar />
      <div className='flex items-start bg-blue-50'>
      <Sidebar />
    
         <div className="dashboard">
      <h1>Admin Dashboard</h1>

      <div className="stats-cards">
        {stats.map(({ label, value }) => (
          <div key={label} className="card">
            <h3>{value}</h3>
            <p>{label}</p>
          </div>
        ))}
      </div>

      <h2>Recent Appointments</h2>
      <table className="appointments-table">
        <thead>
          <tr>
            <th>Patient</th>
            <th>Doctor</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {recentAppointments.map(({ id, patient, doctor, date, status }) => (
            <tr key={id}>
              <td>{patient}</td>
              <td>{doctor}</td>
              <td>{date}</td>
              <td className={`status ${status.toLowerCase()}`}><button className='but'>{status}</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      </div>
      </div>
      
     
    
  )
}

export default Dashboard
