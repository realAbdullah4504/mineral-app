import React from "react";
import {
  MineralSlider,
  PakistanMap,
  MineralSectorPotential,
  MineralPotentialLinks,
  MiningFrontier
} from "components";

const MineralPotential = () => {
  return (
    <div className="max-w-[100%]">
      <MineralSlider />
      <MiningFrontier/>
      <MineralSectorPotential />
      <PakistanMap />
      <MineralPotentialLinks />
    </div>
  );
};
export default MineralPotential;
