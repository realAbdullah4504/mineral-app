import React from "react";
import MineralPotential from "../../assets/images/MineralPotential.png";
import { Container } from "components/UI";
export const MineralSectorPotential = () => {
  return (
    <div className="bg-[#F2F2F3]">
      <Container>
        <div className="flex flex-col pt-[2.25rem] pb-[3.125rem]">
          <div className="flex justify-center text-[#05994F] font-bold text-4xl mb-[1.375rem]">
            Mineral Sector Potential
          </div>
          <div className="flex justify-center text-center max-w-[700px] mx-auto text-[23px]">
            From economic growth to infrastructure development, mining plays a
            vital role. Embracing responsible practices ensures long-term
            sustainability.
          </div>
          <div className="flex">
            <img src={MineralPotential} alt="Mineral potential" />
          </div>
          <div className="flex text-[18px] justify-around mx-14 ">
            <div className="flex flex-col max-w-[140px] text-center">
              Untapped mineral potential and ideal geological location on the
              Tethyan Belt
            </div>
            <div className="flex flex-col max-w-[140px] text-center">
              Supportive and robust legal and fiscal framework
            </div>
            <div className="flex flex-col max-w-[140px] text-center">
              Growing economy, with dynamic labor force
            </div>
            <div className="flex flex-col max-w-[140px] text-center">
              Infrastructure supporting mining sector
            </div>
            <div className="flex flex-col max-w-[140px] text-center">
              Engagement of local and international stakeholders
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
