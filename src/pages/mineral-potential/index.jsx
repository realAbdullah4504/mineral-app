import React from "react";
import {
  MineralSlider,
  PakistanMap,
  MineralSectorPotential,
  MineralPotentialLinks,
  MineralPotentialSlider

} from "components";

const MineralPotential = () => {
  return (
    <div className="max-w-[100%]">
      <MineralSlider />
      <MineralPotentialSlider />
      <MineralSectorPotential />
      <PakistanMap />
      <MineralPotentialLinks />
    </div>
  );
};
export default MineralPotential;
