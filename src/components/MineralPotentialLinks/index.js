import React from "react";
import linksBG from "assets/images/LinksBG.png";
import { Container } from "components/UI";
import greenArrow from "assets/images/greenArrow.svg";

export const MineralPotentialLinks = () => {
  return (
    <div
      className="relative bg-cover bg-center"
      style={{ backgroundImage: `url(${linksBG})` }}
    >
      <Container classes="mb-[15.375rem]">
        <div className="max-w-[73.625rem] mx-auto shadow-2xl">
          <h2 className="text-white text-[64px] font-bold text-center ">
            Important Links
          </h2>

          <div className="relative z-10 bg-white rounded-xl shadow-lg transform translate-y-1/2 mt-[-6.325rem] max-w-[1178px] h-[387px] px-[3.375rem]">
            <div className="flex flex-col pt-[3.377rem]">
              <div className="flex justify-between items-center">
                <span className="text-2xl font-medium ">
                  Policy and regulations
                </span>
                <img className="pb-[1.42rem]" src={greenArrow} alt="Arrow" />
              </div>
              <hr className="border-t-2 border-[#D9D9D9]" />
            </div>
            <div className="flex flex-col pt-[1.875rem]">
              <div className="flex justify-between items-center">
                <span className="text-2xl font-medium ">
                  Apply for Mineral Title
                </span>
                <img className="pb-[1.42rem]" src={greenArrow} alt="Arrow" />
              </div>
              <hr className="border-t-2 border-[#D9D9D9]" />
            </div>
            <div className="flex flex-col pt-[1.875rem]">
              <div className="flex justify-between items-center">
                <span className="text-2xl font-medium ">GIS portal</span>
                <img className="pb-[1.42rem]" src={greenArrow} alt="Arrow" />
              </div>
              <hr className="border-t-2 border-[#D9D9D9]" />
            </div>
            <div className="flex flex-col pt-[1.875rem]">
              <div className="flex justify-between items-center">
                <span className="text-2xl font-medium ">Register company</span>
                <img className="pb-[1.42rem]" src={greenArrow} alt="Arrow" />
              </div>
              <hr className="border-t-2 border-[#D9D9D9]" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
