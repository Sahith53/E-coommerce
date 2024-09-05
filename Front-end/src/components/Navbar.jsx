import React, { useState } from 'react'; // Added useState import
import { assets } from '../assets/assets/frontend_assets/assets'; // Adjust path as needed
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  
  const [visible, setVisible] = useState(false);  
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <img src={assets.logo} className="w-36" alt="" />
      <ul className="hidden gap-5 text-sm text-gray-700 sm:flex">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>Home</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/Collection" className="flex flex-col items-center gap-1">
          <p>Collection</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/About" className="flex flex-col items-center gap-1">
          <p>About</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/Contact" className="flex flex-col items-center gap-1">
          <p>Contact</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul> 

      <div className='flex items-center gap-6'>
        <img src={assets.search_icon} className='w-4 cursor-pointer' alt="" />
        <div className='relative group'>
          <img src={assets.profile_icon} className='w-4 cursor-pointer 'alt="" />
          <div className='absolute right-0 hidden pt-4 group-hover:block dropdown-menu'>
            <div className='flex flex-col gap-2 px-5 py-3 text-gray-500 rounded w-36 bg-slate-100'>
              <p className='cursor-pointer hover:text-black'> My profile</p>
              <p className='cursor-pointer hover:text-black'> Orders</p>
              <p className='cursor-pointer hover:text-black'> Logout</p>
            </div>
          </div>
        </div>
        <Link to='/cart' className='relative'>
        
          <img src={assets.cart_icon} className='w-4 min-w-4' alt="" />
          <p className='absolute right-[-5px] bottom-[-5px] w-3 text-center leading-4 bg-black text-white  rounded-full text-[6px]'>10</p>
        </Link>
        <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-4 cursor-pointer sm:hidden' alt="" />
      </div>

      {/* Sidebar menu for mobile screens */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
        <div className={`flex flex-col text-gray-600`}>
          <div onClick={()=>setVisible(false)} className={`flex items-center gap-4 p-3 cursor-pointer`}>
            <img className='h-4 rotate-180' src={assets.dropdown_icon} alt=""/>
            <p>Back</p>
          </div>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/'>Home</NavLink>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/collection'>Collection</NavLink>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/about'>About</NavLink>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/contact'>contact</NavLink>
          
        </div>
      </div>
    </div>
  );
}

export default Navbar;
