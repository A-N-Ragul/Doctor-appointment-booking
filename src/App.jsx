import React from 'react'
import { Route, Routes,useLocation } from 'react-router-dom'
import Home from './pages/home'
import Doctors from './pages/Doctors'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyAppointments from './pages/MyAppointments'
import Appointment from './pages/Appointment'
import Admin from './pages/Admin'
import AdminLogin from './pages/AdminLogin'
import Dashboard from './AdminComponents/Dashboard'
import DoctorsList from './AdminComponents/DoctorsList'
import AddDoctor from './AdminComponents/AddDoctor'
import AllAppointments from './AdminComponents/AllAppointments'
import AppointmentStatus from './pages/AppointmentStatus'
import Sidebar from './AdminComponents/Sidebar'
import Appoin from './AdminComponents/Appoin'

const App = () => {

  

  const location = useLocation();
  const hideLayoutPaths = ['/admin','/adminLogin',
    '/admin/dashboard',
    '/admin/doctors',
    '/admin/add-doctor',
    '/admin/appointments'];
  const hideLayout = hideLayoutPaths.includes(location.pathname);

  return (
    <div className="mx-4 sm:mx-[10%]">
       
       
        <Routes>
         <Route path='/' element={<Home />} />

         <Route path='/doctors' element={<Doctors />} />
         <Route path='/doctors/:speciality' element={<Doctors />} />
         <Route path='/about' element={<About />} />
         <Route path='/contact' element={<Contact />} />
         <Route path='/myprofile' element={<MyProfile />} />
         <Route path='/myappointments' element={<MyAppointments />} />
         <Route path='/appointment/:docId' element={<Appointment />} />
         <Route path='/admin' element={<Admin />} />
         <Route path='/adminLogin' element={<AdminLogin />} />
         <Route path='/admin/dashboard' element={<Dashboard />} />
         <Route path='admin-doctors' element={<DoctorsList />} />
         <Route path='/admin/add-doctor' element={<AddDoctor />} />
         <Route path='/admin/appointments' element={<AllAppointments/>} />
         <Route path='/appointment-status' element={<AppointmentStatus />} />
         <Route path='/sidebar' element={<Sidebar />} />
         <Route path='/appoin' element={<Appoin />} />

       </Routes> 
       
      
    </div>
  )
}

export default App
