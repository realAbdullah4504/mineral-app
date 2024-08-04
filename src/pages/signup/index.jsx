import React from "react";
import { useState, useEffect } from "react";
import { Form, Input, message, ConfigProvider } from "antd";
import { useNavigate, Link } from "react-router-dom";
import { ENDPOINTS, REQUEST_TYPES } from "utils/constant/url";
import { loginAPI } from "services/api/auth";
import { getCookie, setCookie } from "services/session/cookies";
import passwordToggle from "assets/images/passwordToggle.png";
import LogoImg from "assets/images/logo.jpg";

const SignUp = () => {
  const [state, setState] = useState({name:"", email: "", phoneNumber: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const changeHandler = (e) => {
    const { name, value } = e?.target;
    setState({ ...state, [name]: value });
  };
  const Loading = () => {
    messageApi.open({
      type: "loading",
      content: "Processing..",
      duration: 1.5,
      style: {
        marginTop: "40vh",
      },
    });
  };

  const warning = (message = "This is a warning message") => {
    messageApi.open({
      type: "warning",
      content: message,
    });
  };
  const success = () => {
    messageApi.destroy();
    messageApi
      .open({
        type: "success",
        content: "Successfully Login.",
        duration: 2.5,
        style: {
          marginTop: "40vh",
        },
      })
      .then(() => {
        navigate("/");
      });
  };
  const handleSubmission = async (e) => {
    e.preventDefault();
    try {
      const { name, email, phoneNumber } = state;
      if (!name || !email || !phoneNumber) {
        warning("Fill all fields")
        setErrorMsg("Fill all fields");
        return;
      }
      Loading();
      setErrorMsg("");
      const { data, isError, message } = await loginAPI(
        REQUEST_TYPES.POST,
        ENDPOINTS.SIGNUP,
        { name, email, phoneNumber }
      );
      if (isError) {
        warning(message);
        return setErrorMsg(message);
      }
      if (!isError && data) {
        success();
        navigate(`/verify-number?email=${email}&phoneNumber=${phoneNumber}`);
      }
    } catch (error) {
      console.log(error.message);
    }
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
          {contextHolder}
          <form
            layout="vertical"
            variant="outlined"
            action=""
            autoComplete="off"
            onSubmit={(e)=> handleSubmission(e)}
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
                value={state?.name}
                onChange={(e) => changeHandler(e)}
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
                value={state?.email}
                onChange={(e) => changeHandler(e)}
                className="bg-transparent border border-black rounded-[10px] w-[310px] h-[45px] p-2 focus:border-green-600 focus:outline-none focus:ring-0"
              />
              <label htmlFor="number" className="text-[16px] mt-2">
              Mobile No. (Valid number reqiured to Verify OTP)
              </label>
              <input
                required={true}
                placeholder="923000000000"
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                value={state?.phoneNumber}
                onChange={(e) => changeHandler(e)}
                className="bg-transparent border border-black rounded-[10px] w-[310px] h-[45px] p-2 focus:border-green-600 focus:outline-none focus:ring-0"
              />
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

export default SignUp;
