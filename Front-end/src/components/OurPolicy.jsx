import React from 'react'
import { assets } from '../assets/assets/frontend_assets/assets'


const OurPolicy = () => {
  return (
    <div className='flex flex-col justify-around gap-12 py-20 text-xs text-center text-gray-700 sm:flex-row sm:gap-2 md:text-base'>
        <div className="">
         <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
          <p className='font-semibold'>Easy Exchange policy</p>
          <p className='text-gray-400'>We offer hassle free exchange policy</p>
        </div>
        <div className="">
         <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
          <p className='font-semibold'>7 days Return policy</p>
          <p className='text-gray-400'>We provide 7 days free return policy</p>
        </div>
        <div className="">
         <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
          <p className='font-semibold'>Best coustomer support </p>
          <p className='text-gray-400'>we provide 24/7 coustomer care support</p>
        </div>

    </div>

  )
}

export default OurPolicy