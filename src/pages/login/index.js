import React from "react";
import { useState, useEffect } from "react";
import { message, ConfigProvider } from "antd";
import { useNavigate, Link } from "react-router-dom";
import { ENDPOINTS, REQUEST_TYPES } from "utils/constant/url";
import { loginAPI } from "services/api/auth";
import { getCookie, setCookie } from "services/session/cookies";
import passwordToggle from "assets/images/passwordToggle.png";
import LogoImg from "assets/images/logo.jpg";

const Login = () => {
  const [state, setState] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [previousURL, setPreviousURL] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [messageApi, contextHolder] = message.useMessage();

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

  useEffect(() => {
    if (getCookie("token")) {
      return navigate("/");
    }
    setPreviousURL(document.referrer);
  }, []);

  const handleSubmission = async () => {
    try {
      const { email, password } = state;
      if (!email || !password) {
        setErrorMsg("Fill all fields");
        return;
      }
      Loading();
      setErrorMsg("");
      const { data, isError, message } = await loginAPI(
        REQUEST_TYPES.POST,
        ENDPOINTS.LOGIN,
        { email, password }
      );
      if (isError) {
        warning(message);
        return setErrorMsg(message);
      }
      if (!isError && data) {
        const { token } = data || {};
        setCookie("token", token);
        success();
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const onFinish = (e) => {
    e.preventDefault();
    handleSubmission();
  };
  const changeHandler = (e) => {
    const { name, value } = e?.target;
    setState({ ...state, [name]: value });
  };
  return (
    <ConfigProvider>
      <div className="flex h-screen">
        <div className="flex flex-col w-1/2 bg-login1 items-center">
          <Link
            className="flex font-bold text-[25px] mt-[180px] mb-[10px]"
            to={"/"}
          >
            <img src={LogoImg} alt="MOE" width={50} height={50} />
          </Link>
          <div className="flex font-bold text-[25px] mb-[10px]">Welcome To</div>
          <div className="flex text-[19px] text-[#009969] mb-[20px]">
            Pakistan Minerals Information & Services Portal
          </div>
          {contextHolder}
          <form
            layout="vertical"
            variant="outlined"
            action=""
            onSubmit={onFinish}
          >
            <div className="flex flex-col">
              <label htmlFor="email" className="text-[16px]">
                Your email
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
              <div className="flex items-center mt-[12px]">
                <label htmlFor="password" className="text-[16px] flex-grow">
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
                value={state?.password}
                onChange={(e) => changeHandler(e)}
                className="bg-transparent border border-black rounded-[10px] w-[310px] h-[45px] p-2 focus:border-green-600 focus:outline-none focus:ring-0"
              />
              <p style={{ color: "red" }}>{errorMsg}</p>
              <br />
              <div className="flex justify-end mt-[8px] mb-[30px]">
                <Link
                  className="underline text-[12.71px]"
                  to={"/forgotpassword"}
                >
                  Forgot Your Password?
                </Link>
              </div>
              <div className="flex justify-center mb-[14.5px]">
                <button
                  type="submit"
                  className="bg-[#009969] w-[310px] h-[37.55px] items-center justify-center text-white text-[19px] rounded-[31.77px]"
                >
                  Log in
                </button>
              </div>
              <div className="flex text-[16px] justify-center cursor-pointer">
                Don't have an account?
                <Link to="/signup" className="underline font-bold pl-1">
                  Sign up
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
