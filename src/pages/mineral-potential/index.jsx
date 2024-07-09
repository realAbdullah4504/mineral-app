import React from "react";
import {
  MineralSlider,
  PakistanMap,
  MineralSectorPotential,
  MineralPotentialLinks,
  MineralPotentialSlider,
  MiningFrontier , 
} from "components";

const MineralPotential = () => {
  return (
    <div className="max-w-[100%]">
      <MineralSlider />
      <MiningFrontier/>
      <MineralPotentialSlider />
      <MineralSectorPotential />
      <PakistanMap />
      <MineralPotentialLinks />
    </div>
  );
};
export default MineralPotential;
