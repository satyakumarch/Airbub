import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ListingDataContext } from "../Context/ListingContext.jsx";


function ListingPages3() {
  let navigate = useNavigate();
   let {
      title,setTitle,
      description,setDescription,
      frontEndImage1,setFrontEndImage1,
      frontEndImage2,setFrontEndImage2,
      frontEndImage3,setFrontEndImage3,
      backEndImage1,setBackEndImage1,
      backEndImage2,setBackEndImage2,
      backEndImage3,setBackEndImage3,
      rent,setRent,
      city,setCity,
      landmark,setLandmark,
      category,setCategory}=useContext(ListingDataContext);
  return (
    <div className='w-[100%] h-[100vh] bg-[white] flex items-center justify-center gap-[10px] flex-col overflow-auto relative'>

        <div
              className="w-[50px] h-[50px] bg-[red] cursor-pointer absolute top-[5%] left-[20px] rounded-[50%] flex items-center justify-center"
              onClick={() => navigate("/listingpage1")}>
              <FaArrowLeftLong className="w-[25px] h-[25px] text-[white]" />
            </div>

            <div className='w-[95%] flex items-start justify-start text-[25px] md:w-[80%] mb-[10px]'>
              <h1 className='text-[20px] text-[#272727] md:text-[30px] text-ellipsis text-nowrap overflow-hidden'>
                {`In ${landmark.toUpperCase()}, ${city.toUpperCase()}`}
              </h1>
            </div>
            <div className='w-[95%] h-[400px] flex items-center justify-center flex-col md:w-[80%] md:flex-row'>
              <div className='w-[100%] h-[65%] md:w-[70%] md:h-[100%] overflow-hidden flex items-center justify-center border-[5px]  border-[black]  bg-[red]'>
                <img src={frontEndImage1} alt="" className='w-[100%] '/>
              
             
          

            </div>
            </div>

    </div>
  )
}

export default ListingPages3;