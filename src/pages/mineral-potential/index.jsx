import React from "react";
import {
  MineralSlider,
  PakistanMap,
  MineralSectorPotential
} from "components";

const MineralPotential = () => {
  return (
    <div className="max-w-[100%]">
      <MineralSlider />
      <PakistanMap />
      <MineralSectorPotential />
    </div>
  );
};
export default MineralPotential;
