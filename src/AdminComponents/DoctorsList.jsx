import React, { useContext } from 'react';
import AdminNavbar from './AdminNavbar';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import '../styles/DoctorsList.css';

const DoctorsList = () => {
  const { doctors } = useContext(AppContext)

  return (
     <div>
      <AdminNavbar />
      <div className='flex items-start bg-blue-50 min-h-screen'>
        <Sidebar />
        <div className='flex-1 p-6 bg-blue-100'>
          {/* TopDoctors Section */}
          <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
            <h1 className='text-3xl font-medium'>Doctors List</h1>
            <p className='sm:w-1/3 text-center text-sm'>
              Simply browse through our extensive list of trusted doctors
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gap: '1rem',
              }}
              className='w-full pt-5 gap-y-6 px-3 sm:px-0'
            >
              {doctors.slice(0, 10).map((item, index) => (
                <div
                  key={item._id}
                  className='border border-blue-200 rounded-xl overflow-hidden cursor-default hover:translate-y-[-10px] transition-all duration-500'
                >
                  <img className='bg-blue-50' src={item.image} alt={item.name} />
                  <div className='p-4'>
                    <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                      <p className='w-2 h-2 bg-green-500 rounded-full'></p>
                      <p>Available</p>
                    </div>
                    <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                    <p className='text-gray-600 text-sm'>{item.speciality}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default DoctorsList;
