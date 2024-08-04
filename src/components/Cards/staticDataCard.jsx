import React, { useState } from "react";
import addIcon from "assets/images/addIcon.svg";
import sampleImage from "assets/images/data-card.png";
import { useNavigate } from "react-router-dom";

const StaticDataCard = ({ type, data }) => {
  const navigate = useNavigate();

  const handleNavigate = (url) => {
    navigate(url);
  };

  return (
    <>
      {type == "add" ? (
        <div
          className="w-full max-w-[18rem] p-8 flex justify-center items-center border-2 rounded-lg shadow-xl cursor-pointer"
          onClick={() => handleNavigate(data.link)}
        >
          <div className="flex flex-col items-center space-y-4 ">
            <div className="flex items-center justify-center w-20 h-20 bg-green-100 rounded-full">
              <img src={addIcon} alt="" />
            </div>
            <div className="text-[14px] font-ibm-plex-sans font-semibold w-32 text-center">
              {" "}
              {data.headline}{" "}
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-[18rem] border-2 rounded-lg shadow-xl">
          <div className="relative mt-0">
            {data?.logo ? (
              <img
                src={data?.logo || sampleImage}
                width={200}
                height={100}
                alt="Logo"
                className="mx-auto pb-2 pt-0 mt-2 aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              />
            ) : (
              <div className="flex items-center justify-center w-[200px] h-[100px] bg-[#fff] rounded-full"></div>
            )}

            <div className="absolute inset-x-0 bottom-0 h-1 bg-[#049e6c]" />
          </div>
          <div className="space-y-4 p-6 bg-[#f5fffc]">
            <h3 className="text-[18px] font-bold text-[#049e6c]">
              {data.headline}
            </h3>

            <h5 className="text-gray-600 ">Rg # 123456</h5>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 min-w-[2rem] items-center justify-center rounded-full bg-[#049e6c]">
                <div className="h-5 w-5 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.2em"
                    height="1.2em"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </g>
                  </svg>{" "}
                </div>
              </div>
              <p>info@acme.com</p>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 min-w-[2rem] items-center justify-center rounded-full bg-[#049e6c]">
                <div className="h-5 w-5 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.2em"
                    height="1.2em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="white"
                      d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25c1.12.37 2.32.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"
                    />
                  </svg>
                </div>
              </div>
              <p>(051) 9287657</p>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 min-w-[2rem] items-center justify-center rounded-full bg-[#049e6c]">
                <div className="h-5 w-5 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.2em"
                    height="1.2em"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="none"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                      d="M256 48c-79.5 0-144 61.39-144 137c0 87 96 224.87 131.25 272.49a15.77 15.77 0 0 0 25.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137"
                    />
                    <circle
                      cx="256"
                      cy="192"
                      r="48"
                      fill="none"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                    />
                  </svg>
                </div>
              </div>
              <p>
                Plot No, 13, H-9/4 Sector H 9-4, Islamabad Capital Territory
              </p>
            </div>

            <div className="flex justify-center gap-4">
              <a
                href="#"
                className="text-green-500 hover:text-green-600"
                prefetch={false}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.4em"
                  height="1.4em"
                  viewBox="0 0 24 24"
                >
                  <g fill="none">
                    <path
                      stroke="#049e6c"
                      stroke-width="2"
                      d="M3 11c0-3.771 0-5.657 1.172-6.828C5.343 3 7.229 3 11 3h2c3.771 0 5.657 0 6.828 1.172C21 5.343 21 7.229 21 11v2c0 3.771 0 5.657-1.172 6.828C18.657 21 16.771 21 13 21h-2c-3.771 0-5.657 0-6.828-1.172C3 18.657 3 16.771 3 13z"
                    />
                    <circle cx="16.5" cy="7.5" r="1.5" fill="#049e6c" />
                    <circle
                      cx="12"
                      cy="12"
                      r="3"
                      stroke="#049e6c"
                      stroke-width="2"
                    />
                  </g>
                </svg>
              </a>
              <a
                href="#"
                className="text-green-500 hover:text-green-600"
                prefetch={false}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.4em"
                  height="1.4em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#049e6c"
                    d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-green-500 hover:text-green-600"
                prefetch={false}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.4em"
                  height="1.4em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#049e6c"
                    d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-green-500 hover:text-green-600"
                prefetch={false}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.4em"
                  height="1.4em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#049e6c"
                    d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-green-500 hover:text-green-600"
                prefetch={false}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.4em"
                  height="1.4em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#049e6c"
                    d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z"
                  />
                </svg>{" "}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StaticDataCard;