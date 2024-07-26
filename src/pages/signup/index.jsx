import React from "react";
import { useState, useEffect } from "react";
import { Form, Input, message, ConfigProvider } from "antd";
import { useNavigate, Link } from "react-router-dom";
import { ENDPOINTS, REQUEST_TYPES } from "utils/constant/url";
import { loginAPI } from "services/api/auth";
import { getCookie, setCookie } from "services/session/cookies";
import passwordToggle from "assets/images/passwordToggle.png";
import LogoImg from "assets/images/logo.jpg";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <ConfigProvider>
      <div className="flex h-screen">
        <div className="flex flex-col w-1/2 bg-login1 items-center">
          <Link
            className="flex font-bold text-[25px] mt-[50px] mb-[10px]"
            to={"/"}
          >
            <img src={LogoImg} alt="MOE" width={50} height={50} />
          </Link>
          <div className="flex font-bold text-[25px] mb-[10px]">Welcome To</div>
          <div className="flex text-[19px] text-[#009969] mb-[20px]">
            Pakistan Minerals Information & Services Portal
          </div>
          <div className="flex text-[19px] font-semibold mb-[20px] text-xl">
            Sign up
          </div>
          <form
            layout="vertical"
            variant="outlined"
            action=""
            autoComplete="off"
          >
            <div className="flex flex-col">
              <label htmlFor="name" className="text-[16px] mt-2">
                Name
              </label>
              <input
                placeholder="Enter Name"
                type="name"
                name="name"
                id="name"
                className="bg-transparent border border-black rounded-[10px] w-[310px] h-[45px] p-2 focus:border-green-600 focus:outline-none focus:ring-0"
              />
              <label htmlFor="email" className="text-[16px] mt-2">
                Email
              </label>
              <input
                placeholder="abc@example.com"
                type="email"
                name="email"
                id="email"
                className="bg-transparent border border-black rounded-[10px] w-[310px] h-[45px] p-2 focus:border-green-600 focus:outline-none focus:ring-0"
              />
              <label htmlFor="number" className="text-[16px] mt-2">
                Phone Number
              </label>
              <input
                required={true}
                placeholder="923000000000"
                type="text"
                name="number"
                id="number"
                className="bg-transparent border border-black rounded-[10px] w-[310px] h-[45px] p-2 focus:border-green-600 focus:outline-none focus:ring-0"
              />
              {/* <div className="flex items-center mt-[12px]">
                <label
                  htmlFor="password"
                  className="text-[16px] flex-grow mt-2"
                >
                  Your password
                </label>
                <img src={passwordToggle} alt="Eye symbol" />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="ml-2 text-black text-[16px] min-w-[40px]"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              <input
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                className="bg-transparent border border-black rounded-[10px] w-[310px] h-[45px] p-2 focus:border-green-600 focus:outline-none focus:ring-0"
              />
              <div className="flex items-center mt-[12px]">
                <label
                  htmlFor="password"
                  className="text-[16px] flex-grow mt-2"
                >
                  Confirm password
                </label>
                <img src={passwordToggle} alt="Eye symbol" />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="ml-2 text-black text-[16px] min-w-[40px]"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              <input
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                className="bg-transparent border border-black rounded-[10px] w-[310px] h-[45px] p-2 focus:border-green-600 focus:outline-none focus:ring-0"
              /> */}

              <div className="flex justify-center mb-[14.5px] mt-8">
                <button
                  type="submit"
                  className="bg-[#009969] w-[310px] h-[37.55px] items-center justify-center text-white text-[19px] rounded-[31.77px]"
                >
                  Sign up
                </button>
              </div>
              <div className="flex text-[16px] justify-center cursor-pointer">
                Already have an account?
                <Link to="/login" className="underline font-bold pl-1">
                  Login
                </Link>
              </div>
            </div>
          </form>
          <Link className="flex text-2xl mt-2 font-bold" to={"/"}>
            Home
          </Link>
        </div>
        <div className="flex flex-col w-1/2 bg-login2 bg-cover bg-no-repeat bg-green-hue "></div>
      </div>
    </ConfigProvider>
  );
};

export default Login;
