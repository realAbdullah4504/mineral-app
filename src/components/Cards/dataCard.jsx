import React, { useState } from "react";
import addIcon from "assets/images/addIcon.svg";
import viewIcon from "assets/images/viewIcon.svg";
import sampleImage from "assets/images/data-card.png";
import { useNavigate } from "react-router-dom";

const DataCard = ({ type, data }) => {
  const navigate = useNavigate();

  const handleNavigate = (url) => {
    navigate(url);
  };

  return (
    <>
      {type === "add" ? (
        <div
          className="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 max-w-[18rem] min-w-[18rem] p-8 flex justify-center items-center border-2 rounded-lg shadow-xl cursor-pointer"
          onClick={() => handleNavigate(data.link)}
        >
          <div className="flex flex-col items-center space-y-4 ">
            <div className="flex items-center justify-center w-20 h-20 bg-green-100 rounded-full">
              <img src={addIcon} alt="" />
            </div>
            <div className="text-[14px] font-ibm-plex-sans font-semibold w-32 text-center">
              {data.headline}
            </div>
          </div>
        </div>
      ) : type === "edit" ? (
        <div
          className="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 max-w-[18rem] min-w-[18rem] p-8 flex justify-center items-center border-2 rounded-lg shadow-xl cursor-pointer"
          onClick={() =>
            handleNavigate(`/registerorganization/edit?id=${data?.id}`)
          }
        >
          <div className="flex flex-col items-center space-y-4 ">
            <div className="flex items-center justify-center w-20 h-20 bg-green-100 rounded-full">
              <img src={viewIcon} alt="" />
            </div>
            <div className="text-[14px] font-ibm-plex-sans font-semibold w-32 text-center">
              View Your card
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
              {data?.name}
            </h3>

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
              <p>{data?.email}</p>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 min-w-[2rem] items-center justify-center rounded-full bg-[#049e6c]">
                <div className="h-5 w-5 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.2em"
                    height="1.2em"
                    viewBox="0 0 48 48"
                  >
                    <g
                      fill="none"
                      stroke="white"
                      stroke-linejoin="round"
                      stroke-width="4"
                    >
                      <path
                        fill="white"
                        d="M2 17.4L23.022 9l21.022 8.4l-21.022 8.4z"
                      />
                      <path
                        stroke-linecap="round"
                        d="M44.044 17.51v9.223m-32.488-4.908v12.442S16.366 39 23.022 39c6.657 0 11.467-4.733 11.467-4.733V21.825"
                      />
                    </g>
                  </svg>
                </div>
              </div>
              <p>{data?.qualification}</p>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 min-w-[2rem] items-center justify-center rounded-full bg-[#049e6c]">
                <div className="h-5 w-5 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.4em"
                    height="1.4em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="white"
                      d="M23 19a4 4 0 0 1-4 4h-2v-2h2a2 2 0 0 0 0-4h-2v-2h2a4 4 0 0 1 4 4M9 19a4 4 0 0 1 4-4h2v2h-2a2 2 0 0 0 0 4h2v2h-2a4 4 0 0 1-4-4"
                    />
                    <path
                      fill="white"
                      d="M14 18h4v2h-4zM9 5a3 3 0 1 0 3 3a3.01 3.01 0 0 0-3-3m0 4a1 1 0 1 1 1-1a1.003 1.003 0 0 1-1 1m-3.69 6A7 7 0 0 1 9 13.88a6 6 0 0 1 .778.064A5.97 5.97 0 0 1 13 13h.254A9.4 9.4 0 0 0 9 11.89c-2.03 0-6 1.07-6 3.58V17h4.349a6 6 0 0 1 1.188-2Z"
                    />
                    <path
                      fill="white"
                      d="M16 2h-4.18a2.988 2.988 0 0 0-5.64 0H2a2.006 2.006 0 0 0-2 2v14a2.006 2.006 0 0 0 2 2h5.141a3.6 3.6 0 0 1 0-2H2V4h14v9h2V4a2.006 2.006 0 0 0-2-2M9 3.25a.756.756 0 0 1-.75-.75a.75.75 0 0 1 1.5 0a.756.756 0 0 1-.75.75"
                    />
                  </svg>
                </div>
              </div>
              <p>{data?.professionalRole}</p>
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

export default DataCard;
