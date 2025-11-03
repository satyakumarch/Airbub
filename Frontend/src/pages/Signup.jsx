import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

export default function AirbnbLoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center bg-gradient-to-br from-pink-200 via-rose-300 to-red-400">
      <form className="max-w-[400px] w-[90%] bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-start gap-6 backdrop-blur-md bg-opacity-90">
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
            className="w-full h-[45px] border border-pink-300 rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300"
          />
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
            className="w-full h-[45px] border border-pink-300 rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300"
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
            className="w-full h-[45px] border border-pink-300 rounded-lg px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300"
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
          Don’t have an account?{" "}
          <a href="#" className="text-red-500 font-medium hover:underline">
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
}
