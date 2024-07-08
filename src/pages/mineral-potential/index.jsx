import React from "react";
import {
  MineralSlider,
  PakistanMap,
  MineralSectorPotential,
  MineralPotentialLinks,
  MineralPotentialSlider,
  MiningFrontier , 
  MineralWealth
} from "components";

const MineralPotential = () => {
  return (
    <div className="max-w-[100%]">
      <MineralSlider />
      <MineralWealth/>
      <MiningFrontier/>
      <MineralPotentialSlider />
      <MineralSectorPotential />
      <PakistanMap />
      <MineralPotentialLinks />
    </div>
  );
};
export default MineralPotential;
