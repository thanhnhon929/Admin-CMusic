import React from 'react'
import { useState } from 'react'
import {
  AiFillHome, 
  AiOutlineFundProjectionScreen, 
  AiOutlinePieChart, 
  AiOutlineBarChart, 
  AiFillDollarCircle,
  AiFillSetting,
  AiTwotoneCalendar
} from 'react-icons/ai'
import {BsPersonFill, BsFillBookmarkFill} from 'react-icons/bs'
import {MdFeedback} from 'react-icons/md'
import {BiMenu} from 'react-icons/bi'

const Sidebar = () => {
  const [isShow, setIsShow] = useState(false)
  return (
    <div className='md:min-w-[250px] '>
     
      <div className='flex bg-aside items-center min-w-[30%]'>
        <BiMenu onClick={() => setIsShow(!isShow)} className='md:hidden ' color='white'/>
        <h2 className='text-titleAdmin p-5 text-2xl text-center md:text-left md:pl-2 bg-aside '>CMusic</h2>
      </div>
      <div className={`bg-aside text-white ${isShow ? '' : 'hidden'} md:block `}>
      
      <div >
        <p className='p-2 text-gray-500 text-xl'>MENU</p>
        <ul>
          <li className='li'>
            <AiFillHome className='pr-1 '/>
            <p>Dashboard</p>
          </li>
          <li className='li'>
            <AiOutlineFundProjectionScreen className='pr-1'/>
            <p>Market update</p>
          </li>
          <li className='li'>
            <AiOutlinePieChart className='pr-1'/>
            <p>Income estimator</p>
          </li>
          <li className='li'>
            <AiOutlineBarChart className='pr-1'/>
            <p>Intractive chart</p>
          </li>
          <li className='li'>
            <AiFillDollarCircle className='pr-1'/>
            <p>Matual funds</p>
          </li>
        </ul>
      </div>

      <div className='text-white'>
        <p className='p-2 text-gray-500 text-xl'>ACCOUNT</p>
        <ul>
          <li className='li'>
            <BsPersonFill className='pr-1'/>
            <p>Portfolio</p>
          </li>
          <li className='li'>
            <AiFillSetting className='pr-1'/>
            <p>Setting</p>
          </li>
          <li className='li'>
            <AiTwotoneCalendar className='pr-1'/>
            <p>History</p>
          </li>
        </ul>
      </div>

      <div className='text-white'>
        <p className='p-2 text-gray-500 text-xl'>MORE</p>
        <ul>
          <li className='li'>
            <BsFillBookmarkFill className='pr-1'/>
            <p>New</p>
          </li>
          <li className='li'>
            <MdFeedback className='pr-1'/>
            <p>Feedback</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
    
    
  )
}

export default Sidebar