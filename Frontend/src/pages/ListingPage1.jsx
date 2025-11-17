// import React from "react";
// import { FaArrowLeftLong } from "react-icons/fa6";
// import { useNavigate } from "react-router-dom";

// function ListingPage1() {
//   let navigate = useNavigate();
//   return (
//     <div className="w-[100%] h-[100vh] bg-white flex items-center justify-center relative overflow-auto mt-[50px]">
//       <form
//         action=""
//         className="max-w-[900px] w-[90%] h-[550px] flex items-center justify-start flex-col md:items-start gap-[10px] overflow-auto "
//       >
//         <div
//           className="w-[50px] h-[50px] bg-[red] cursor-pointer absolute top-[5%] left-[20px] rounded-[50%] flex items-center justify-center "
//           onClick={() => navigate("/")}
//         >
//           <FaArrowLeftLong className="w-[25px] h-[25px] text-[white]" />
//         </div>
//         <div className="w-[200px] h-[50px] text-[20px] bg-[#f14242] text-[white] flex items-center justify-center rounded-[30px] absolute top-[5%] right-[10px] shadow-lg">
//           Setup Your Home
//         </div>
//         {/* title */}
//         <div className="w-full flex flex-col gap-2">
//           <label
//             htmlFor="title"
//             className="text-[18px] font-medium text-gray-700">
//             Title
//           </label>
//           <input
//             type="text"
//             id="title"
//             placeholder="Enter the title"
//             className="w-full h-[45px] border border-pink-300 rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300"
//           />
//         </div>

//         {/* description */}
//         <div className="w-full flex flex-col gap-2">
//           <label
//             htmlFor="description"
//             className="text-[18px] font-medium text-gray-700"
//           >
//             Description
//           </label>
//           <textarea
//             id="description"
//             placeholder="Enter the description"
//             className="w-full h-[100px] border border-pink-300 rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300"
//           />
//         </div>
//         {/* image1 */}
//         <div className="w-full flex flex-col gap-2">
//           <label
//             htmlFor="img1"
//             className="text-[18px] font-medium text-gray-700"
//           >
//             Image1
//           </label>
//           <div className="flex items-center justify-start w-[90%] h-[40px] border-[#555656] border-2 rounded-[10px]">
//             <input
//               type="file"
//               id="img1"
//               className="w-[100%] text-[15px] px-[10px]"
//               required
//             />
//           </div>
//         </div>
//         {/* image2 */}
//         <div className="w-full flex flex-col gap-2">
//           <label
//             htmlFor="img2"
//             className="text-[18px] font-medium text-gray-700"
//           >
//             Image2
//           </label>
//           <div className="flex items-center justify-start w-[90%] h-[40px] border-[#555656] border-2 rounded-[10px]">
//             <input
//               type="file"
//               id="img2"
//               className="w-[100%] text-[15px] px-[10px]"
//               required
//             />
//           </div>
//         </div>
//         {/* image3 */}
//         <div className="w-full flex flex-col gap-2">
//           <label
//             htmlFor="img3"
//             className="text-[18px] font-medium text-gray-700"
//           >
//             Image3
//           </label>
//           <div className="flex items-center justify-start w-[90%] h-[40px] border-[#555656] border-2 rounded-[10px]">
//             <input
//               type="file"
//               id="img3"
//               className="w-[100%] text-[15px] px-[10px]"
//               required
//             />
//           </div>
//         </div>

//         {/* rent */}
//         <div className="w-full flex flex-col gap-2">
//           <label
//             htmlFor="rent"
//             className="text-[18px] font-medium text-gray-700">
//             Rent
//           </label>
//           <input
//             type="text"
//             id="rent"
//             placeholder="Enter the rent"
//             className="w-full h-[45px] border border-pink-300 rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300"
//           />
//         </div>
//           {/* City */}
//         <div className="w-full flex flex-col gap-2">
//           <label
//             htmlFor="city"
//             className="text-[18px] font-medium text-gray-700">
//             City
//           </label>
//           <input
//             type="text"
//             id="city"
//             placeholder="Enter the city"
//             className="w-full h-[45px] border border-pink-300 rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300"
//           />
//         </div>
//          {/* landmark */}
//         <div className="w-full flex flex-col gap-2">
//           <label
//             htmlFor="landmark"
//             className="text-[18px] font-medium text-gray-700">
//             Landmark
//           </label>
//           <input
//             type="text"
//             id="landmark"
//             placeholder="Enter the landmark"
//             className="w-full h-[45px] border border-pink-300 rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300"
//           />
//         </div>

//         <button
//               className="mt-4 w-[20%] h-[40px] bg-gradient-to-r from-red-400 to-pink-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
//             >
//               Next
//             </button>


//       </form>
//     </div>
//   );
// }

// export default ListingPage1;



import React, { useContext } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { ListingDataContext } from "../Context/ListingContext";
import { Navigate } from "react-router-dom";

function ListingPage1() {
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
    rent,setrent,
    city,setcity,
    landmark,setlandmark,
    category,setcategory}=useContext(ListingDataContext);

    const handleImage1=(e)=>{
      let file =e.target.files[0]
      setBackEndImage1(file);
      setFrontEndImage1(URL.createObjectURL(file));
    }

    const handleImage2=(e)=>{
      let file =e.target.files[0]
      setBackEndImage2(file);
      setFrontEndImage2(URL.createObjectURL(file));
    }
    const handleImage3=(e)=>{
      let file =e.target.files[0]
      setBackEndImage3(file);
      setFrontEndImage3(URL.createObjectURL(file));
    }


  return (
    <div className="w-[100%] h-[100vh] bg-gradient-to-br from-[#fff5f5] via-[#ffe9e9] to-[#ffd6d6] flex items-center justify-center relative overflow-auto mt-[50px]">
      <form
        action=""
        className="max-w-[900px] w-[90%] h-[550px] bg-white shadow-2xl rounded-[20px] px-[30px] py-[25px] flex items-center justify-start flex-col md:items-start gap-[15px] overflow-auto border border-pink-200" onSubmit={(e)=>{e.preventDefault(); navigate("/listingpage2")}}>
        {/* Back button */}
        <div
          className="w-[50px] h-[50px] bg-gradient-to-r from-[#ff6464] to-[#ff8989] cursor-pointer absolute top-[5%] left-[20px] rounded-full flex items-center justify-center shadow-md hover:scale-[1.05] transition-transform duration-300"
          onClick={() => navigate("/")}
        >
          <FaArrowLeftLong className="w-[25px] h-[25px] text-white" />
        </div>

        {/* Header */}
        <div className="w-[200px] h-[50px] text-[20px] font-semibold bg-gradient-to-r from-[#ff5252] to-[#ff7676] text-white flex items-center justify-center rounded-[30px] absolute top-[5%] right-[10px] shadow-lg">
          Setup Your Home
        </div>

        {/* Title */}
        <div className="w-full flex flex-col gap-2 mt-[60px]">
          <label
            htmlFor="title"
            className="text-[18px] font-semibold text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            placeholder="Enter the title"
            className="w-full h-[45px] border border-pink-300 rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300 placeholder:text-gray-400" required onChange={(e)=>setTitle(e.target.value)} value={title}/>
        </div>

        {/* Description */}
        <div className="w-full flex flex-col gap-2">
          <label
            htmlFor="description"
            className="text-[18px] font-semibold text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            placeholder="Enter the description"
            className="w-full h-[100px] border border-pink-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300 placeholder:text-gray-400 resize-none"  required onChange={(e)=>setdescription(e.target.value)} value={description}/>
        </div>

        {/* Image 1 */}
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="img1" className="text-[18px] font-semibold text-gray-700">
            Image1
          </label>
          <div className="flex items-center justify-start w-[90%] h-[45px] border-[#ff8fa3] border-2 rounded-[10px] hover:border-[#ff5c8a] transition-all duration-300 bg-[#fff0f3]" required onChange={handleImage1}>
            <input
              type="file"
              id="img1"
              className="w-[100%] text-[15px] px-[10px] cursor-pointer"
              required
            />
          </div>
        </div>

        {/* Image 2 */}
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="img2" className="text-[18px] font-semibold text-gray-700">
            Image2
          </label>
          <div className="flex items-center justify-start w-[90%] h-[45px] border-[#ff8fa3] border-2 rounded-[10px] hover:border-[#ff5c8a] transition-all duration-300 bg-[#fff0f3]" required onChange={handleImage2}>
            <input
              type="file"
              id="img2"
              className="w-[100%] text-[15px] px-[10px] cursor-pointer"
              required
            />
          </div>
        </div>

        {/* Image 3 */}
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="img3" className="text-[18px] font-semibold text-gray-700">
            Image3
          </label>
          <div className="flex items-center justify-start w-[90%] h-[45px] border-[#ff8fa3] border-2 rounded-[10px] hover:border-[#ff5c8a] transition-all duration-300 bg-[#fff0f3]" required onChange={handleImage3}>
            <input
              type="file"
              id="img3"
              className="w-[100%] text-[15px] px-[10px] cursor-pointer"
              required
            />
          </div>
        </div>

        {/* Rent */}
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="rent" className="text-[18px] font-semibold text-gray-700">
            Rent
          </label>
          <input
            type="number"
            id="rent"
            placeholder="Enter the rent"
            className="w-full h-[45px] border border-pink-300 rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300 placeholder:text-gray-400"  required onChange={(e)=>setrent(e.target.value)} value={rent}/> 
        </div>

        {/* City */}
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="city" className="text-[18px] font-semibold text-gray-700">
            City
          </label>
          <input
            type="text"
            id="city"
            placeholder="Enter the city"
            className="w-full h-[45px] border border-pink-300 rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300 placeholder:text-gray-400"  required onChange={(e)=>setcity(e.target.value)} value={city}/>
        </div>

        {/* Landmark */}
        <div className="w-full flex flex-col gap-2">
          <label
            htmlFor="landmark"
            className="text-[18px] font-semibold text-gray-700"
          >
            Landmark
          </label>
          <input
            type="text"
            id="landmark"
            placeholder="Enter the landmark"
            className="w-full h-[45px] border border-pink-300 rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300 placeholder:text-gray-400"  required onChange={(e)=>setlandmark(e.target.value)} value={landmark}/>
        </div>

        {/* Next Button */}
   <button className="px-[50px] py-[10px] bg-[red] text-[white] text-[18px] md:px-[100px] rounded-lg absolute  bottom-[10%]">next</button>


      </form>
    </div>
  );
}

export default ListingPage1;
