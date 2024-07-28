import React, { useState } from 'react'
import rightArrow from '../../assets/images/Slider_right_arrow.png'
import leftArrow from '../../assets/images/slider_left_arrow.png'
import gemIcon from "../../assets/images/gemIcon.png"
import { mineralPotential2 } from 'utils/constant/common'
export const MineralPotentialSlider = () => {
  const [active, setActive] = useState(2);
  const [data, setData] = useState(mineralPotential2);
  const rightHandler = () => {
    const cloneData = [...data];
    const removedItem = cloneData.shift();
    setData([...cloneData, removedItem]);
  };
  const leftHandler = () => {
    const cloneData = [...data];
    const removedItem = cloneData.pop();
    setData([removedItem, ...cloneData]);
  };
  return (
    <div className="flex justify-between items-center font-roboto-condensed gap-2 overflow-hidden py-[120px]">
      {data.map((dataSub, index) => {
        return (
          <div
            className={
              index == active
                ? "h-[653.62px] flex flex-col w-[437.36px] rounded-xl bg-[#009969]"
                : index > active + 2 || index < active - 2
                ? "hidden"
                : index == active + 2
                ? "w-[318px] h-[478px] bg-[#EFF0EB] -mr-[150px]"
                : index == active - 2
                ? "w-[318px] h-[478px] bg-[#EFF0EB] rounded-2xl shadow-md -ml-[150px]"
                : "w-[318px] shadow-md rounded-2xl h-[478px] bg-[#EFF0EB]"
            }
          >
            <div className="w-full flex">
              {index == 2 ? (
                <span onClick={leftHandler} className="w-[40px] ml-[30px] mt-[60px]">
                  <img src={leftArrow} width={10} height={10} />
                </span>
              ) : (
                <span className="px-[20px] ml-[10px] mt-[60px]"></span>
              )}

              <span className={`grow  ${index == 2 ? "-mt-[100px]" : "-mt-[60px]"}`}>
                <img src={dataSub.Img} />
              </span>
              {index == 2 ? (
                <span onClick={rightHandler} className="w-[40px] mr-[30px] flex justify-end mt-[60px]">
                  <span className="w-fit h-fit"><img src={rightArrow} width={10} height={10} /></span>
                </span>
              ) : (
                <span className="px-[20px] mr-[10px] mt-[60px] "></span>
              )}
            </div>

            <div
              className={`w-full text-center text-[64px]  font-semibold leading-[84px] font-ibm-plex-sans ${
                index == 2 ? "text-white mt-5" : "text-[#27AE60] text-[45px] leading-[60px]"
              }`}
            >
              {dataSub.title}
            </div>
            <div
              className={` ${
                index == 2
                  ? "w-[315px] text-center text-white text-[20px] leading-[30px]  relative m-auto mt-3 font-[300]"
                  : "w-[286px] text-[18px] leading-[25px] relative m-auto text-center mt-3"
              }`}
            >
              {dataSub.shortDiscription}
            </div>
            <div
              className={` ${
                index == 2
                  ? "w-[315px] text-center text-white text-[20px] leading-[30px]  relative m-auto mt-3 font-[300]"
                  : "w-[286px] text-[18px] leading-[25px] relative m-auto text-center mt-3"
              }`}
            >
              <span>{dataSub.production}</span>
              <span className={`${index == 2 && "font-semibold "}`}>{dataSub.amount}</span>
            </div>
            <div
              className={` ${
                index == 2
                  ? "w-[315px] text-center text-white text-[20px] leading-[30px]  relative m-auto mt-3 font-[300]"
                  : "w-[286px] text-[18px] leading-[25px] relative m-auto text-center mt-3"
              }`}
            >
              {dataSub.location}
            </div>
            <div
              className={` ${
                index == 2
                  ? "text-center text-white text-[20px] leading-[30px]   mt-3 font-[300] flex justify-center"
                  : " text-[18px] leading-[25px] text-center flex justify-center mt-3"
              }`}
            >
              <div className="w-[315px]">
                <span>Projects:</span>
                <span className={`${index == 2 && "font-semibold "}`}>{dataSub.project}</span>
              </div>
            </div>
            <div className="flex justify-center items-end mb-[70px] grow  ">
              {index == 2 && (
                <div className=" font-ibm-plex-sans h-[56px] w-[194px] bg-[#F4FBF7] flex items-center justify-center rounded-full text-center leading-[20px] font-semibold">
                  View Projects
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
