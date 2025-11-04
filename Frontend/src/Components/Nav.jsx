import React from 'react'
import logo from '../assets/airbnb-logo.png'
import { FiSearch } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { MdWhatshot } from "react-icons/md";




function Nav() {
  return (
    <div>
        <div className='w-[100vw] min-h-[80px] border-b-[1px] border-[#dcdcdc] px-[40px] flex items-center justify-between '>
            {/* logo */}
            <div> <img src={logo} alt="" className='w-[130px]'/> </div>
            {/* search bar */}
            <div className='w-[35%] relative'>
                <input type="text" className='w-[100%] px-[30px] py-[10px] border-[2px] border-[#bdbaba] outline-none overflow-auto rounded-[30px] text-[17px]' placeholder='Any Where | Any Location | Any City'/> 
                <button className='absolute p-[10px] rounded-[50px] bg-[red] right-[3%] top-[5px]'><FiSearch className='w-[20px] h-[20px] text-white' /> </button>
            </div>
            {/* profile */}
            <div className='flex items-center justify-center gap-[10px]'>
                <span className='text-[18px] cursor-pointer rounded-[50px] hover:bg-[#ded9d9] px-[8px] py-[5px]'>List your home</span>
                <button className='px-[20px] py-[10px] flex items-center justify-center gap-[5px] border-[1px] border-[#8d8c8c] rounded-[50px] hover:shadow-lg'>
                    <span><GiHamburgerMenu className='w-[20px] h-[20px]' /></span>
                    <span><CgProfile className='w-[23px] h-[23px]' /></span></button>
            </div>

        </div>
        {/* navbar */}
        <div className='w-[100vw] h-[85px] bg-white'>
            <div>
                <MdWhatshot/>
                <h3>Live Anywhere</h3>

            </div>

        </div>
    </div>
  )
}

export default Nav