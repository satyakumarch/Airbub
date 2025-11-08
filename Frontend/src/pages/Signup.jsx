import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { AuthDataContext } from '../Context/AuthContext.jsx';
import { useContext } from "react";
import axios from "axios";
import { userDataContext } from "../Context/UserContext.jsx";


export default function AirbnbLoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  let { userData, setUserData } = useContext(userDataContext);
  let navigate = useNavigate();
  let { serverUrl } = useContext(AuthDataContext);
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");


  const handleSignup = async (e) => {
    try {
      e.preventDefault();
      let result = await axios.post(serverUrl + "/api/auth/signup", {
        // signup data
        name,
        email,
        password
      }, { withCredentials: true });
      setUserData(result.data);
      navigate("/");
      console.log("Signup successful", result);
    } catch (error) {
      console.log("Signup failed", error);

    }

  }

  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center bg-gradient-to-br from-pink-200 via-rose-300 to-red-400">
      <div className="w-[40px] h-[40px] bg-[red] cursor-pointer absolute top-[10%] left-[20px] rounded-[50%] flex items-center justify-center" onClick={() => navigate("/")}>
        <FaArrowLeft className="w-[25px] h-[25px] text-white items-center" />
      </div>

      <form action ="" className="max-w-[400px] w-[90%] bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-start gap-6 backdrop-blur-md bg-opacity-90" onSubmit={handleSignup}>
        <h1 className="text-[30px] font-bold text-red-500 tracking-wide text-center w-full">
          Welcome to Airbnb
        </h1>

        {/* Username */}
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="name" className="text-[18px] font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="w-full h-[45px] border border-pink-300 rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300" required onChange={(e) => setName(e.target.value)} value={name} />
        </div>

        {/* Email */}
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="email" className="text-[18px] font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full h-[45px] border border-pink-300 rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300" required onChange={(e) => setEmail(e.target.value)} value={email}
          />
        </div>

        {/* Password with Eye Icon */}
        <div className="w-full flex flex-col gap-2 relative">
          <label
            htmlFor="password"
            className="text-[18px] font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Enter your password"
            className="w-full h-[45px] border border-pink-300 rounded-lg px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300" required onChange={(e) => setPassword(e.target.value)} value={password}
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-[42px] text-gray-500 hover:text-pink-500 transition duration-300"
          >
            {showPassword ? (
              <IoMdEyeOff className="w-[22px] h-[22px]" />
            ) : (
              <IoMdEye className="w-[22px] h-[22px]" />
            )}
          </button>
        </div>

        {/* Sign In Button */}
        <button
          className="mt-4 w-full h-[45px] bg-gradient-to-r from-red-400 to-pink-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
        >
          Sign In
        </button>

        <p className="text-center text-gray-600 text-[14px] w-full mt-2">
          Already have an account?<span className="'text-[19px] text-[red] cursor-pointer" onClick={() => navigate("/login")}> login</span>
        </p>
      </form>
    </div>
  );
}
