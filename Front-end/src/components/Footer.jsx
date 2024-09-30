import React from 'react'
import { assets } from '../assets/assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className="">
        
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
<div className="">
    <img src={assets.logo}  className='w-32 mb-5 ' alt="" />
    <p className='w-full text-gray-600 md:w-2/3'>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptas aperiam, maxime quos nihil, perferendis maiores quaerat aspernatur repudiandae in odio ea dolorum accusamus iure quibusdam ipsam, facilis quis excepturi.
       </p>
</div>

<div className="">
    <p className='mb-5 text-xl font-medium'>COMPANY</p>
    <ul className='flex flex-col gap-1 text-gray-600'>
        <li>Home</li>
        <li>About us</li>
        <li>Delivery</li>
        <li>Privacy Policy</li>
    </ul>
</div>
<div className="">
    <p className='mb-5 text-xl font-medium'>GET IN TOUCH</p>
    <ul className='flex flex-col gap-1'> 
        <li>Phone: +1234567890</li>
        <li>guthasait3@gmmial.com</li>
    </ul>
</div>

    </div>
    
<div className="">
    <hr />
    <p className='py-5 text-sm text-center'>Copyright 2024 @ all rights reserved</p>
</div>
    </div>
  )
}

export default Footer