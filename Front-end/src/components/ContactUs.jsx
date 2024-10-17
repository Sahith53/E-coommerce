// import React from 'react'
import Tittle from './Tittle';
import { assets } from '../assets/assets/frontend_assets/assets';

const ContactUs = () => {
  return (
    <div>
    <hr className='w-full' />
    <div className="">
        <div className="py-10 text-2xl text-center">
            <Tittle text1={'CONTACT'} text2={'US'} />
        </div>
        <div className="flex flex-wrap items-center justify-center">
            <div className="lg:w-[500px] md:w-[350px] sm:w-[300px] w-[90%] lg:h-[500px] md:h-[350px] sm:h-[300px] h-[200px] mb-10 lg:mb-0">
                <img src={assets.contact_img} alt="" className='object-cover w-full h-full' />
            </div>
            <div className="flex flex-col max-w-lg gap-6 px-4 my-10 text-center sm:px-10 sm:my-20 sm:text-left">
                <h1 className='text-xl font-bold text-gray-600'>Our store</h1>
                <p className='text-gray-500'>54709 Willms Station<br />
                    Suite 350, Washington, USA
                </p>
                <p className='text-gray-500'>Tel: (415) 555-0132<br />
                    Email: admin@forever.com
                </p>
                <h2 className='text-xl font-semibold text-gray-600'>Careers at Forever</h2>
                <p className='text-gray-500'>Learn more about our teams and job openings.</p>
                <button className='px-8 py-4 text-sm transition-all duration-500 border border-black hover:bg-black hover:text-white'>
                    Explore more
                </button>
            </div>
        </div>
    </div>
</div>

  )
}

export default ContactUs