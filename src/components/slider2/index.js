import React, { useState } from "react";
import CoalImage from "assets/images/coal.png";
import CopperImage from "assets/images/copper.png";
import GoldImage from "assets/images/gold.png";

export const MineralSlider = () => {
  const [sliderContent, setSliderContent] = useState({
    first: {
      title: "01",
      description: `Pakistan has world's 5th biggest gold mine, with huge reserves in Balochistan. The Reko Diq field project is a testament to the lucrative gold potential in Pakistan.`,
      image: GoldImage,
  
    },
    sec: {
      title: "02",
      description: `With the world's 5th biggest copper mine, Pakistan has one of the largest under-developed copper deposits in the world. The Reko Diq & Saindak projects make Pakistan a noteworthy player in the global copper market.`,
      image: CopperImage,
    },
    thr: {
      title: "03",
      description: `Pakistan has significant coal reserves, primarily found in the Thar Desert region. The Thar coalfield is one of the largest lignite coalfields in the world, offering potential for energy production and industrial development.`,
      image: CoalImage,
     
    },
  });
  const [active, setActive] = useState(0);
  const [imageActive, setImageActive] = useState(0);

  return (
    <div className="">
      <div
        style={{
          backgroundImage: `url(${
            active == 0
              ? sliderContent.first.image
              : active == 1
              ? sliderContent.sec.image
              : sliderContent.thr.image
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
                ? sliderContent.first.description
                : active == 1
                ? sliderContent.sec.description
                : sliderContent.thr.description}
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
                {sliderContent.first.title}
              </div>
              <div
                onClick={() => setActive(1)}
                className={`${
                  active == 1
                    ? "text-[48px]  h-[32%] leading-[55px] "
                    : "text-[32px] h-[32%]  leading-[36px] "
                } items-center flex  font-bold justify-end text-right  text-white cursor-pointer`}
              >
                {sliderContent.sec.title}
              </div>
              <div
                onClick={() => setActive(2)}
                className={`${
                  active == 2
                    ? "text-[48px]  h-[32%] leading-[55px] "
                    : "text-[32px] h-[32%]  leading-[36px] "
                } items-center flex  font-bold justify-end text-right  text-white cursor-pointer`}
              >
                {sliderContent.thr.title}
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
