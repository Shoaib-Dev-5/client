import React from 'react'
import {MdSecurity} from 'react-icons/md'
const Premium = () => {
  return (
    <div className='bg-white shadow-sm px-2 py-1 pb-2 border-gray-100 border'>
        <div className='flex items-center space-x-2'>
            <MdSecurity className='h-8 w-8' />
            <span className='my-2'>
            <p className='text-sm font-medium'>Reddit Premium</p>
            <p className='text-xs font-thin'>The best Reddit experience, with monthly Coins</p>
            </span>
        </div>
        <button className='bg-red-900 py-1 text-white rounded-full w-full'>Try Now</button>
    </div>
  )
}

export default Premium