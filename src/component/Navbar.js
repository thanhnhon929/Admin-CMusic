import React from 'react'
import {BsSearch, BsBellFill} from 'react-icons/bs'
import {AiFillSetting} from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-5'>
        <h2 className='text-white text-2xl font-bold'>Dashboard</h2>
        
            <div className='flex items-center space-x-2 '> 
                <div className=' flex items-center space-x-2 bg-main border border-gray-500 px-3 py-1 rounded-xl' >
                    <BsSearch color='white'/>
                    <input type='text' placeholder='Search' className='bg-main outline-none text-white'/>
                </div>
                <AiFillSetting color='white' />
                <BsBellFill color='white'/>
                <div className='flex space-x-2 items-center'>
                    <div className='border-l-2 h-4 border-gray-500 '></div>
                    <img src='https://avatarfiles.alphacoders.com/893/thumb-89303.gif' className='rounded-full w-5  '/> 
                </div>
            </div>
    </div>
  )
}

export default Navbar