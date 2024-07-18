import React, { useState } from "react";
import MapPIn from "assets/images/map-pin.png";
import  { homeSlider } from 'utils/constant/common'

export const Slider = () => {
  const [active, setActive] = useState(0);
  const [imageActive, setImageActive] = useState(0);
  return (
    <div className="">
      <div
        style={{
          backgroundImage: `url(${
            active == 0
              ? homeSlider.first.image
              : active == 1
              ? homeSlider.sec.image
              : homeSlider.thr.image
          })`,
          backgroundSize: imageActive == 0 ? "100%" : "110%",
          transition: imageActive == 1 ? "all 2s ease-in-out" : "",
          backgroundRepeat: "no-repeat"
        }}
        className={` h-[631px]   relative`}
      >
        <div className="absolute backdrop:backdrop-brightness-50 bg-black/50 w-full h-full z-0"></div>
        <div className="w-full flex justify-end">
          <div className="w-fit h-[36px] mt-[40px] bg-[#27AE60] flex  text-white z-10 py-[8px] px-[12px] rounded-[4px] gap-[8px] mr-10">
            <span className="font-medium">
              {active == 0
                ? homeSlider.first.location
                : active == 1
                ? homeSlider.sec.location
                : homeSlider.thr.location}
            </span>
            <span>
              {" "}
              <img src={MapPIn} alt="Example" width={20} height={20} />
            </span>
          </div>
        </div>
        <div className="w-full flex justify-between z-10 relative pl-[150px] mt-[180px] ">
          <div className="h-[271px] w-[750px]">
            <div className="font-bold text-[64px] leading-[84px] text-white ">
              {active == 0
                ? homeSlider.first.title
                : active == 1
                ? homeSlider.sec.title
                : homeSlider.thr.title}
            </div>
            <div className="font-medium text-[18px] leading-[25px] text-white ">
              {active == 0
                ? homeSlider.first.description
                : active == 1
                ? homeSlider.sec.description
                : homeSlider.thr.description}
            </div>
          </div>
          <div className=" h-[240px] mr-10 flex">
            <div className="h-full   flex-col">
              <div
                onClick={() => {
                  setActive(0);
                  setImageActive(0);
                  setTimeout(() => {
                    setImageActive(1);
                  }, 1000);
                }}
                className={`${
                  active == 0
                    ? "text-[48px]  h-[32%] leading-[55px] "
                    : "text-[32px] h-[32%]  leading-[36px] "
                } items-center flex  font-bold justify-end text-right  text-white cursor-pointer`}
              >
                {homeSlider.first.title}
              </div>
              <div
                onClick={() => setActive(1)}
                className={`${
                  active == 1
                    ? "text-[48px]  h-[32%] leading-[55px] "
                    : "text-[32px] h-[32%]  leading-[36px] "
                } items-center flex  font-bold justify-end text-right  text-white cursor-pointer`}
              >
                {homeSlider.sec.title}
              </div>
              <div
                onClick={() => setActive(2)}
                className={`${
                  active == 2
                    ? "text-[48px]  h-[32%] leading-[55px] "
                    : "text-[32px] h-[32%]  leading-[36px] "
                } items-center flex  font-bold justify-end text-right  text-white cursor-pointer`}
              >
                {homeSlider.thr.title}
              </div>
            </div>
            <div className="h-full mx-3 w-[2px] bg-white ">
              <div
                className={` ${
                  active == 0
                    ? "pl-[8px] h-[33%] rounded bg-[#27AE60] -ml-[3px]"
                    : "pl-[2px] h-[33%]"
                }`}
              ></div>
              <div
                className={` ${
                  active == 1
                    ? "pl-[8px] h-[33%] rounded bg-[#27AE60] -ml-[3px]"
                    : "pl-[2px] h-[33%]"
                }`}
              ></div>
              <div
                className={` ${
                  active == 2
                    ? "pl-[8px] h-[34%] rounded bg-[#27AE60] -ml-[3px]"
                    : "pl-[2px] h-[33%]"
                }`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
