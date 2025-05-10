import React from 'react'

export const Provision = ({heading, text}) => {
  return (
      <div className='w-full mt-12 border-gray-300 border-t-2'>
          <p className='mt-10 text-2xl font-bold'>{heading}</p> 
          <p className='text-gray-500'>{text}</p>
    </div>
  )
}
