import React from "react";
import {
  MineralSlider,
  PakistanMap,
  MineralSectorPotential,
  MineralPotentialLinks,
  MineralPotentialSlider,
  MineralClassification ,  
  MiningFrontier , 
  MineralWealth
} from "components";

const MineralPotential = () => {
  return (
    <div className="max-w-[100%]">
      <MineralSlider />
      {/* <MineralClassification/> */}
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
