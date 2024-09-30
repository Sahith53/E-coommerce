import React from 'react'

const NewsletterBox = () => {
const onSubmitHandler = ( event )=>{
    event.preventDefault();
}
    
  return (
    <div  className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe and get 20% off</p>
        <p className='mt-3 text-gray-400'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.  
        </p>
        <form onSubmit={onSubmitHandler} className='flex items-center w-full gap-6 pl-3 mx-auto my-6 border rounded-md sm:w-1/2'>
            <input className='w-full outline-none sm:flex-1' type="email" placeholder='Enter your email' required />
            <button className='px-10 py-4 text-xs text-white bg-black rounded-sm'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsletterBox