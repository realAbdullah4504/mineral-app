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
        </div>
      </Container>
    </div>
  );
};
