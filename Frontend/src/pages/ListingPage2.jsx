import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { GiFamilyHouse, GiWoodCabin } from "react-icons/gi";
import { FaTreeCity } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { MdBedroomParent, MdOutlinePool } from "react-icons/md";
import { BiBuildingHouse } from "react-icons/bi";
import { IoBedOutline } from "react-icons/io5";
import { SiHomeassistantcommunitystore } from "react-icons/si";

function ListingPage2() {
  const navigate = useNavigate();

  return (
    <div className="w-[100%] h-[100vh] bg-white flex items-center justify-center relative overflow-auto mt-[50px]">
      {/* Back button */}
      <div
        className="w-[50px] h-[50px] bg-[red] cursor-pointer absolute top-[5%] left-[20px] rounded-[50%] flex items-center justify-center"
        onClick={() => navigate("/listingpage1")}>
        <FaArrowLeftLong className="w-[25px] h-[25px] text-[white]" />
      </div>

      {/* Header */}
      <div className="w-[200px] h-[50px] text-[20px] bg-[#f14242] text-[white] flex items-center justify-center rounded-[30px] absolute top-[5%] right-[10px] shadow-lg">
        Setup Your Category
      </div>

      <div className="max-w-[900px] w-[100%] h-[550px] overflow-auto bg-white flex items-center jsutify-start flex-col gap-[40px] mt-[30px]">
        <h1 className="text-[18px] text-[black] md:text-[30px]">Which of these best describe your place?</h1>

        <div  className="max-w-[900px] w-[100%] h-[100%] flex flex-wrap items-center justify-center gap-[15px] md:w-[70%]" >
      

        <div className="w-[180px] h-[100px]  flex justify-center items-center flex-col cursor-pointer border-[2px] hover:border-[#a6a5a5] text-[16px] rounded-lg">
          <GiFamilyHouse className="w-[30px] h-[30px] text-[black]"/>
          <h3>Villa</h3>
        </div>
         <div className="w-[180px] h-[100px]  flex justify-center items-center flex-col cursor-pointer border-[2px] hover:border-[#a6a5a5] text-[16px] rounded-lg">
          <FaTreeCity className="w-[30px] h-[30px] text-[black]"/>
          <h3>Farm House</h3>
        </div>
         <div className="w-[180px] h-[100px]  flex justify-center items-center flex-col cursor-pointer border-[2px] hover:border-[#a6a5a5] text-[16px] rounded-lg">
          <MdOutlinePool className="w-[30px] h-[30px] text-[black]"/>
          <h3>Pool House</h3>
        </div>
         <div className="w-[180px] h-[100px]  flex justify-center items-center flex-col cursor-pointer border-[2px] hover:border-[#a6a5a5] text-[16px] rounded-lg">
          <MdBedroomParent className="w-[30px] h-[30px] text-[black]"/>
          <h3>Room</h3>
        </div>
         <div className="w-[180px] h-[100px]  flex justify-center items-center flex-col cursor-pointer border-[2px] hover:border-[#a6a5a5] text-[16px] rounded-lg">
          <BiBuildingHouse className="w-[30px] h-[30px] text-[black]"/>
          <h3>Flat</h3>
        </div>
        
         <div className="w-[180px] h-[100px]  flex justify-center items-center flex-col cursor-pointer border-[2px] hover:border-[#a6a5a5] text-[16px] rounded-lg">
          <IoBedOutline className="w-[30px] h-[30px] text-[black]"/>
          <h3>PG</h3>
        </div>
        
         <div className="w-[180px] h-[100px]  flex justify-center items-center flex-col cursor-pointer border-[2px] hover:border-[#a6a5a5] text-[16px] rounded-lg">
          <GiWoodCabin className="w-[30px] h-[30px] text-[black]"/>
          <h3>Cabin</h3>
        </div>
         <div className="w-[180px] h-[100px]  flex justify-center items-center flex-col cursor-pointer border-[2px] hover:border-[#a6a5a5] text-[16px] rounded-lg">
          <SiHomeassistantcommunitystore
           className="w-[30px] h-[30px] text-[black]"/>
          <h3>Shops</h3>
        </div>
         
        
        
    </div>
    <button
  className="mt-6 w-[35%] h-[60px] bg-gradient-to-r from-[#ff6363] to-[#ff8a8a] text-white text-[18px] font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-[1.05] transition-all "
>
  Next
</button>
    </div>
    </div>
  );
}

export default ListingPage2;
