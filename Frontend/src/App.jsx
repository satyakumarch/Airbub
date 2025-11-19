import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import ListingPage1 from './pages/ListingPage1.jsx'
import ListingPage2 from './pages/ListingPage2.jsx'
import ListingPages3 from './pages/ListingPages3.jsx'
import { userDataContext } from './Context/UserContext.jsx'
import { Navigate } from 'react-router-dom'

function App() {
  let {userData}=useContext(userDataContext);
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/listingpage1' element={ userData != null ? <ListingPage1 /> : <Navigate to ={"/login"} />} />
        <Route path='/listingpage2' element={userData != null ? <ListingPage2 /> : <Navigate to ={"/login"} />} />
        <Route path='/listingpage3' element={userData != null ? <ListingPages3 /> : <Navigate to ={"/login"} />} />


      </Routes>
    </>
  )
}

export default App