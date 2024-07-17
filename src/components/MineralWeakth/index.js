import React, { useState } from "react";
import arrowR from "../../assets/images/arrowWealthR.png";
import arrowL from "../../assets/images/arrowWealthL.png";
import { mineralWealth } from 'utils/constant/common'

export const MineralWealth = () => {
  const [tab, setTab] = useState(mineralWealth );

  const rightHandler = () => {
    const cloneData = [...tab];
    const removedItem = cloneData.shift();
    setTab([...cloneData, removedItem]);
  };
  const leftHandler = () => {
    const cloneData = [...tab];
    const removedItem = cloneData.pop();
    setTab([removedItem, ...cloneData]);
  };

  return (
    <div>
      <div className="flex items-center mt-4">
        <span className="px-8">
          <img onClick={leftHandler} src={arrowL} width={43} />
        </span>
        <span className="flex-grow  grid grid-cols-7">
          {tab.map((data, index) => {
            return (
              <div>
                <span
                  className={`${
                    index == 0 ? "bg-[#26AF5F]" : "border border-[#26AF5F]"
                  } w-[136px] h-[136px] rounded-full text-black flex justify-center items-center ${
                    index > 6 ? "hidden" : ""
                  } `}
                >
                  <div className="">
                  <img
                    className={`relative m-auto ${
                      index === 0 ? 'icon-white' : ''
                    }`}
                    src={data.iconGreen}
                  />
                  <div
                    className={`${
                      index === 0 ? 'text-white' : 'text-[#26AF5F]'
                    } w-[82px] text-center`}
                  >
                    {data.title}
                  </div>
                  </div>
                </span>
              </div>
            );
          })}
        </span>
        <span className="px-8">
          <img onClick={rightHandler} src={arrowR} width={43} />
        </span>
      </div>
      <div className="bg-[#e5faee] px-[150px] pt-12 mt-[70px]">
        <div className="flex">
          <div className="flex-grow">
            <div className="text-[64px] leading-[84px] font-bold font-ibm-plex-sans mb-10">
              {tab[0].title}
            </div>
            <div className="grid grid-cols-2 text-[24px] font-ibm-plex-sans leading-[30px]">
              <span>
                <span className="">Location:</span>
                <span className="font-semibold">{tab[0].location}</span>
              </span>
              <span>
                <span>Reserves:</span>
                <span className="font-semibold">{tab[0].reserve}</span>
              </span>
              <span>
                <span>Production:</span>
                <span className="font-semibold">{tab[0].production}</span>
              </span>
              <span>
                <span>Global Market Value:</span>
                <span className="font-semibold">{tab[0].gml}</span>
              </span>
            </div>
          </div>
          <div>
            <img src={tab[0].avatar} />
          </div>
        </div>
        <div className="">
          <div className="text-[18px] text-[#40384F]">{tab[0].description}</div>
          <div className="text-[#27AE60] underline font-bold mt-8">
            Learn More
          </div>
          <div className="grid grid-cols-4 py-12 ">
            <div>
              <div className="flex justify-center">
                <img src={tab[0].footerImgFirst} />
              </div>
              <div className="font-semibold font-ibm-plex-sans text-[32px] leading-[42px] text-center mt-5">
                {tab[0].tagFirst}
              </div>
            </div>
            <div>
              <div className="flex justify-center">
                <img src={tab[0].footerImageSec} />
              </div>
              <div className="font-semibold font-ibm-plex-sans text-[32px] leading-[42px] text-center mt-5">
                {tab[0].secTag}
              </div>
            </div>
            <div>
              <div className="flex justify-center">
                <img src={tab[0].footerImageThr} />
              </div>
              <div className="font-semibold font-ibm-plex-sans text-[32px] leading-[42px] text-center mt-5">
                {tab[0].thrTag}
              </div>
            </div>
            <div>
              <div className="flex justify-center">
                <img src={tab[0].footerImageOil} />
              </div>
              <div className="font-semibold font-ibm-plex-sans text-[32px] leading-[42px] text-center mt-5">
                {tab[0].frTag}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
