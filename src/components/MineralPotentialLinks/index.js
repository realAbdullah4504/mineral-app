import React from "react";
import linksBG from "assets/images/LinksBG.png";
import { Container } from "components/UI";
import greenArrow from "assets/images/greenArrow.svg";
import { Link } from "react-router-dom";

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
              <Link
                className="flex justify-between items-center"
                to={"/investment-opportunities"}
              >
                <span className="text-2xl font-medium ">
                  Investment opportunities
                </span>
                <img className="pb-[1.42rem]" src={greenArrow} alt="Arrow" />
              </Link>
              <hr className="border-t-2 border-[#D9D9D9]" />
            </div>
            <div className="flex flex-col pt-[1.875rem]">
              <Link
                className="flex justify-between items-center"
                to={"/gis-portal"}
              >
                <span className="text-2xl font-medium ">GIS Portal</span>
                <img className="pb-[1.42rem]" src={greenArrow} alt="Arrow" />
              </Link>
              <hr className="border-t-2 border-[#D9D9D9]" />
            </div>
            <div className="flex flex-col pt-[1.875rem]">
              <Link
                className="flex justify-between items-center"
                to={"/fiscal-incentives"}
              >
                <span className="text-2xl font-medium ">Fiscal Incentives</span>
                <img className="pb-[1.42rem]" src={greenArrow} alt="Arrow" />
              </Link>
              <hr className="border-t-2 border-[#D9D9D9]" />
            </div>
            <div className="flex flex-col pt-[1.875rem]">
              <Link
                className="flex justify-between items-center"
                to={"/legal-framework"}
              >
                <span className="text-2xl font-medium ">Register company</span>
                <img className="pb-[1.42rem]" src={greenArrow} alt="Arrow" />
              </Link>
              <hr className="border-t-2 border-[#D9D9D9]" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
