import React from "react";
import logo from "./../../../assets/images/logo.jpg";
import logoEmail from "assets/images/logoEmail.svg";
import Instagram from "assets/images/logoInstagram.svg";
import FaceBookIcon from "assets/images/logoFacebook.svg";
import YoutubeIcon from "assets/images/logoYoutube.svg";
import TwitterIcon from "assets/images/logoTwitter.svg";
import LinkedInLogo from "assets/images/logoLinkedIn.svg";

import { useNavigate, Link } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const handleNavigate = (url) => {
    navigate(url);
  };
  return (
    <div className="flex flex-col   w-full px-[9.3rem] justify-center text-[#40384F] bg-[#FAFAFB]">
      <div className=" lg:flex justify-between pt-[1.5rem]">
        <div className="flex flex-col pb-[2rem]">
          <img
            src={logo}
            alt="Logo"
            width={48}
            height={48}
            className="justify-start"
          />
          <span className="text-[1.139rem] font-semibold mt-[1.741rem]">
            Ministry of Energy
          </span>
          <span className="text-[1.139rem] font-semibold mb-2">
            (Petroleum Division)
          </span>

          <div className="flex justify-center space-x-2">
            <img src={Instagram} alt="Instagram" className="w-6 h-6" />
            <img src={FaceBookIcon} alt="Facebook" className="w-6 h-6" />
            <img src={YoutubeIcon} alt="Youtube" className="w-6 h-6" />
            <img src={TwitterIcon} alt="Twitter" className="w-6 h-6" />
            <img src={LinkedInLogo} alt="LinkedIn" className="w-6 h-6" />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-semibold text-[1.139rem] text-left w-full mb-4">
            Quick Links
          </span>

          <div className="flex flex-col items-start w-full font-medium text-[0.792rem]">
            {" "}
            {/* Align buttons to the left */}
            <button
              className="text-left mb-4 cursor-pointer"
              onClick={() => handleNavigate("/")}
            >
              Home
            </button>
            <button
              className="text-left mb-4 cursor-pointer"
              onClick={() => handleNavigate("/mineral-potential")}
            >
              Mineral Potential
            </button>
            <button
              className="text-left mb-4 cursor-pointer"
              onClick={() => handleNavigate("/investment-opportunities")}
            >
              Investment Opportunities
            </button>
            <button
              className="text-left mb-4 cursor-pointer"
              onClick={() => handleNavigate("/major-mining")}
            >
              Major Projects
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-semibold text-[1.139rem] mb-4 text-left w-full">
            Services
          </span>

          <div className="flex flex-col items-start w-full font-medium text-[0.792rem]">
            {" "}
            {/* Align buttons to the left */}
            <button
              className="text-left mb-4"
              onClick={() => handleNavigate("/gis-portal")}
            >
              GIS Portal
            </button>
            <button
              className="text-left mb-4"
              onClick={() => handleNavigate("/noc-sponsor-company")}
            >
              NOC Sponsor Company
            </button>
            <button
              className="text-left mb-4"
              onClick={() => handleNavigate("/test-information")}
            >
              Mineral Test Information
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-semibold text-[1.139rem] text-left w-full mb-4">
            Connect
          </span>

          <div className="flex flex-col items-start font-medium text-[0.792rem]">
            <label htmlFor="email" className="mb-2 font-medium">
              Email
            </label>
            <span className="font-bold mb-2">info@minerals.gov.pk</span>
            <label htmlFor="phone" className="mb-2 font-medium">
              Phone No.
            </label>
            <span className="font-bold mb-2">+92-51-9203225</span>
          </div>
        </div>
      </div>
      <hr className=" border-[#40384F] bg-black h-px" />
      <div className="flex justify-between pt-[1.5rem] pb-[1.5rem]">
        <div className="flex flex-col text-[0.8rem]">
          Copyright © 2023, Ministry of Energy (Petroleum Division)
        </div>
        <div className="flex flex-col">
          <div className="flex w-[18rem] text-[0.6rem] justify-between">
            <button className="flex flex-col">Data Privacy</button>
            <button className="flex flex-col">Terms & Conditions</button>
            <button className="flex flex-col">Disclaimer</button>
            <button className="flex flex-col">Help Center</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
