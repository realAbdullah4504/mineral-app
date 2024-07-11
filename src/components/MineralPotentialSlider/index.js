import React, { useState } from "react";
import rightArrow from '../../assets/images/rightarrow.png'
import leftArrow from "../../assets/images/leftarrow.png";
import copperSlider from "assets/images/copperSlide.png";
import goldSlider from "assets/images/goldSlider.png";
import chromiteSlider from "assets/images/chromiteSlider.png";
import coalSlider from "assets/images/coalSlider.png";
import saltSlider from "assets/images/saltSlider.png";
import ironSlider from "assets/images/ironSlider.png";
import limeSlider from "assets/images/limeSlider.png";
import marbelSlider from "assets/images/marbelSlider.png";
import BriteSlider from "assets/images/BriteSlider.png";
import gemstonesSlider from "assets/images/gemstonesSlider.png";
import gypsumSlider from "assets/images/gypsumSlider.png";

export const MineralPotentialSlider = () => {
  const [active, setActive] = useState(2);
  const [data, setData] = useState([
    {
      title: "Gold",
      shortDiscription: "",
      production: "",
      location: "Chagai Magmatic Arc, Lasbella – Khuzdat Belt",
      project: "Saindak, Reko Diq",

      discription: "",

      Img: goldSlider,
    },
    {
      title: "Chromite",
      shortDiscription: "Leading producer",
      production: "Production 2022-2023: ",
      amount: "  158,874 tons",
      location: "Chagai Magmatic Arc, Lasbella Khuzdar Belt",
      project: "",

      discription: "",

      Img: chromiteSlider,
    },
    {
      title: "Copper",
      shortDiscription: "One of the largest reserves",
      production: "Production 2022-2023:",
      amount: " 13378 tons",
      location: "Chagai Magmatic Arc, Lasbella – Khuzdat Belt",
      project: " Saindak, Reko Diq, Boya Muhammad Khel",

      discription: "",

      Img: copperSlider,
    },
    {
      title: "Coal",
      shortDiscription: "Largest reserves at a single place",
      production: "Production 2022-2023:",
      amount: " 14,968,040 tons",
      location: "Tharparkar, Lakhra",
      project: "Projects: Sino Sindh Thar Coal Block I  Sindh Engro Thar Block II",

      discription: "",

      Img: coalSlider,
    },
    {
      title: "Rock salt",
      shortDiscription: "2nd largest",
      production: "Productions 2022- 2023: ",
      amount: " 2,915,724 tons",
      location: "Khewra, Warcha",
      project: "Projects: Punjab Mineral Company Pvt Ltd",

      discription: "",

      Img: saltSlider,
    },
    {
      title: "Iron Ore",
      shortDiscription: "250 M tons",
      production: "Production 2022 - 2023:",
      amount: " 376,970 tons",
      location: "Chagai Magmatic Arc, Chiniot, Kalabagh",
      project: "Projects: Punjab Mineral Company Pvt Ltd",

      discription: "",

      Img: ironSlider,
    },
    {
      title: "Limestone",
      shortDiscription: "",
      production: "Production 2022-2023:",
      amount: " 60,590,496",
      location: "Harnai, Nowshera",
      project: "",

      discription: "",

      Img: limeSlider,
    },
    {
      title: "Marble",
      shortDiscription: "",
      production: "Production 2020-2022: ",
      amount: "7,922,155",
      location: "Lasbella – Khuzdar Belt, Loralai",
      project: "",

      discription: "",

      Img: marbelSlider,
    },
    {
      title: "Barite",
      shortDiscription: "69 million Metric ton",
      production: "Production 2022-2023: ",
      amount: "139,655 tons",
      location: "",
      project: "Projects: Saindak, Reko Diq",

      discription: "",

      Img: BriteSlider,
    },
    {
      title: "Gemstones",
      shortDiscription: "Diverse variety",
      production: "",
      location: "Gilgit-Baltistan",
      project: "",

      discription: "",

      Img: gemstonesSlider,
    },
    {
      title: "Gypsum",
      shortDiscription: "",
      production: "Production 2022- 2023: ",
      amount: " 1,638,724 tons",
      location: "Karak, Dera Ismail Khan",
      project: "",

      discription: "",

      Img: gypsumSlider,
    },
  ]);
  console.log("active", active);
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
