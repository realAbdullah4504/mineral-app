import React, { useState } from "react";
import { mineralPotential } from 'utils/constant/common';
import BreadCrumbs from "components/Breadcrumbs";

export const MineralSlider = () => {
  const [active, setActive] = useState(0);
  const [imageActive, setImageActive] = useState(0);
  const breadcrumbs = [
    { path: "/", label: "Home" },
    { path: "/business-investment", label: "Business & Investment" },
    { path: "#", label: "Mineral Potential Of Pakistan" },
  ];
  return (
    <div className="relative ">
      <div className=" absolute z-10 pl-[150px] pt-[50px] ">
      <BreadCrumbs breadcrumbs={breadcrumbs} white={true} />

      </div>
      {/* <div className="  mt-7">holla</div> */}
      <div
        style={{
          backgroundImage: `url(${
            active == 0
              ? mineralPotential.first.image
              : active == 1
              ? mineralPotential.sec.image
              : mineralPotential.thr.image
          })`,
          backgroundSize: imageActive == 0 ? "100%" : "110%",
          transition: imageActive == 1 ? "all 2s ease-in-out" : "",
        }}
        className={` h-[631px]   relative`}
      >
        <div className="absolute backdrop:backdrop-brightness-50 bg-black/50 w-full h-full z-0"></div>
        <div className="w-full flex justify-end"></div>
        <div className="w-full flex justify-between z-10 relative pl-[150px] mt-[180px] ">
          <div className="h-[271px] w-[750px]">
            <div className="font-bold text-[64px] leading-[84px] text-white ">
              Mineral Potential Of Pakistan
            </div>
            <div className="font-normal text-[16px] leading-[25px] text-white max-w-[535px]">
              {active == 0
                ? mineralPotential.first.description
                : active == 1
                ? mineralPotential.sec.description
                : mineralPotential.thr.description}
            </div>
            <button className="font-bold text-[25px] mt-[25px] text-white">
              Find Out More &gt;
              <hr className="h-px mt-[8px] w-[12.25rem]" />
            </button>
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
                {mineralPotential.first.title}
              </div>
              <div
                onClick={() => setActive(1)}
                className={`${
                  active == 1
                    ? "text-[48px]  h-[32%] leading-[55px] "
                    : "text-[32px] h-[32%]  leading-[36px] "
                } items-center flex  font-bold justify-end text-right  text-white cursor-pointer`}
              >
                {mineralPotential.sec.title}
              </div>
              <div
                onClick={() => setActive(2)}
                className={`${
                  active == 2
                    ? "text-[48px]  h-[32%] leading-[55px] "
                    : "text-[32px] h-[32%]  leading-[36px] "
                } items-center flex  font-bold justify-end text-right  text-white cursor-pointer`}
              >
                {mineralPotential.thr.title}
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
