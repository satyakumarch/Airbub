// import React, { createContext, useState, useContext } from "react";
// import { AuthDataContext } from "./AuthContext.jsx";
// import { ListingDataContext } from "./ListingContext.jsx";
// import axios from "axios"; // ✅ you also forgot to import axios




// function ListingContext({children}) {
//     let [title,settitle]=useState("");
//     let [description,setdescription]=useState("");
//     let [frontEndImage1,setFrontEndImage1]=useState(null);
//     let [frontEndImage2,setFrontEndImage2]=useState(null);
//     let [frontEndImage3,setFrontEndImage3]=useState(null);
//     let [backEndImage1,setBackEndImage1]=useState(null);
//     let [backEndImage2,setBackEndImage2]=useState(null);
//     let [backEndImage3,setBackEndImage3]=useState(null);
//     let [rent,setrent]=useState("");
//     let [city,setcity]=useState("");
//     let [landmark,setlandmark]=useState("");
//     let [category,setcategory]=useState("");
//     let {serverUrl}=useContext(AuthDataContext);

//     // let formData=new FormData();
//     // formData.append("title",title);
//     // formData.append("image1",backEndImage1);
//     // formData.append("image2",backEndImage2);
//     // formData.append("image3",backEndImage3);
//     // formData.append("description",description);
//     // formData.append("rent",rent);
//     // formData.append("city",city);
//     // formData.append("landmark",landmark);
//     // formData.append("category",category);

//     const handleAddListing=async()=>{
//         try{
//             let formData=new FormData();
//                formData.append("title",title);
//                formData.append("image1",backEndImage1);
//                formData.append("image2",backEndImage2);
//                formData.append("image3",backEndImage3);
//                formData.append("description",description);
//                formData.append("rent",rent);
//                formData.append("city",city);
//                formData.append("landmark",landmark);
//                formData.append("category",category);

//                const result=await axios.post(serverUrl+"api/listing/add",formData,{
//                 withCredentials:true,
//                });
//             console.log(result);

//         }catch(error){
//             console.log("addListing error",error);

//         }
//     }


//    let value={
//        title,settitle,
//        description,setdescription,
//        frontEndImage1,setFrontEndImage1,
//        frontEndImage2,setFrontEndImage2,
//        frontEndImage3,setFrontEndImage3,
//        backEndImage1,setBackEndImage1,
//        backEndImage2,setBackEndImage2,
//        backEndImage3,setBackEndImage3,
//        rent,setrent,
//        city,setcity,
//        landmark,setlandmark,
//        category,setcategory,
//        handleAddListing
//    }

//   return (
//     <div>
//        <ListingContext.Provider value={value}>
//             {children}
//         </ListingContext.Provider>
//     </div>
//   )
// }

// export default ListingContext;


import React, { createContext, useState, useContext } from "react";
import { AuthDataContext } from "./AuthContext.jsx";
import axios from "axios";

// Create and export the context for other components to import
export const ListingDataContext = createContext();

function ListingProvider({ children }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [frontEndImage1, setFrontEndImage1] = useState(null);
  const [frontEndImage2, setFrontEndImage2] = useState(null);
  const [frontEndImage3, setFrontEndImage3] = useState(null);
  const [backEndImage1, setBackEndImage1] = useState(null);
  const [backEndImage2, setBackEndImage2] = useState(null);
  const [backEndImage3, setBackEndImage3] = useState(null);
  const [rent, setrent] = useState("");
  const [city, setcity] = useState("");
  const [landmark, setlandmark] = useState("");
  const [category, setcategory] = useState("");
  const { serverUrl } = useContext(AuthDataContext);

  const handleAddListing = async () => {
    try {
      let formData = new FormData();
      formData.append("title", title);
      formData.append("image1", backEndImage1);
      formData.append("image2", backEndImage2);
      formData.append("image3", backEndImage3);
      formData.append("description", description);
      formData.append("rent", rent);
      formData.append("city", city);
      formData.append("landmark", landmark);
      formData.append("category", category);

      const result = await axios.post(serverUrl + "/api/listing/add", formData, {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("addListing result", result);
    } catch (error) {
      console.log("addListing error", error);
    }
  };

  const value = {
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
    category,setcategory,
    handleAddListing,
  };

  return (
    <ListingDataContext.Provider value={value}>
      {children}
    </ListingDataContext.Provider>
  );
}

// Export the provider as default so your app can wrap with it:
// import ListingProvider from './Context/ListingContext.jsx'
export default ListingProvider;