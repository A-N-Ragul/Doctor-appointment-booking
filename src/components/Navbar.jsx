import React from 'react'
import { assets } from '../assets-2/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'




const Navbar = () => {

    const navigate=useNavigate();

    const [showMenu ,setShowMneu]=useState(false)
    const [token,setToken] =useState(true)
  return (
    <div className='flex item-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      <img onClick={()=>navigate('/')} className='w-44 curosr-pointer' src={assets.logo} alt="" /> 
      <ul className='hidden md:flex items-center gap-5 font-medium'>
            <NavLink to='./'>
            <li className='py-1'>HOME</li>
            <hr className='border-none outline-none h-0.5 m-auto bg-blue-400 hidden' />
            </NavLink>
            <NavLink  to='./doctors'>
            <li  className='py-1'>ALL DOCTORS</li>
            <hr className='border-none outline-none h-0.5 m-auto bg-blue-400 hidden' />
            </NavLink>
            <NavLink  to='./about'>
            <li  className='py-1 '>ABOUT</li>
            <hr className='border-none outline-none h-0.5 m-auto bg-blue-400 hidden' />
            </NavLink>
            <NavLink  to='./contact'>
            <li className='py-1' >CONTACT</li>
            <hr className='border-none outline-none h-0.5 m-auto bg-blue-400 hidden' />
            </NavLink>
            <NavLink  to='./adminLogin'>
            <button  className=' px-3 py-2 text-gray-900 bg-gray-100 border border-black rounded-full '>Admin panel</button>
            </NavLink>
        
      </ul>
      <div className='flex items-center gap 4'>
       
        <img onClick={()=>setShowMneu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />
        {/* mob menu */}
        <div className={` ${showMenu ? 'fixed w-full' :'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
           <div className='flex items-center justify-between px-5 py-6'>
            <img  className='w-36' src={assets.logo} alt="" />
            <img className='w-7' onClick={()=>setShowMneu(false)} src={assets.cross_icon} alt="" />
           </div>
           <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
            <NavLink  onClick={()=>setShowMneu(false)} to='/'><p className='px-4 py-2 rounded inline-block'>HOME</p></NavLink>
            <NavLink  onClick={()=>setShowMneu(false)} to='/doctors'><p className='px-4 py-2 rounded inline-block'>All DOCTORS</p></NavLink>
            <NavLink  onClick={()=>setShowMneu(false)} to='/about'><p className='px-4 py-2 roundedinline-block'>ABOUT</p></NavLink>
            <NavLink onClick={()=>setShowMneu(false)}to='/contact'><p className='px-4 py-2 rounded inline-block'>CONTACT</p></NavLink>
            <NavLink onClick={()=>setShowMneu(false)}to='/adminLogin'><button className='border border-white bg-gray-600 text-white rounded-full px-3 py-2'>ADMIN</button></NavLink>

           </ul>
        </div>

        </div>
        </div>
  )
}

export default Navbar();
