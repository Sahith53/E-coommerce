import React from 'react'

const Tittle = ({text1,text2}) => {
  return (
    <div className="inline-flex items-center gap-2 mb-3">
        
    <p className='text-gray-500 '>{text1}</p><span className='font-medium text-grey-700 '>{text2}</span>
    <p className='w-8 sm:w-12 h-[2px] bg-grey-700'></p>
    </div>
  )
}

export default Tittle