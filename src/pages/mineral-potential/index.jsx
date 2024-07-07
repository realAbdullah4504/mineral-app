import React from "react";
import {
  MineralSlider,
  PakistanMap,
  MineralSectorPotential,
  MineralPotentialLinks,
  MineralPotentialSlider,
  MineralClassification

} from "components";

const MineralPotential = () => {
  return (
    <div className="max-w-[100%]">
      <MineralSlider />
      <MineralClassification/>
      <MineralPotentialSlider />
      <MineralSectorPotential />
      <PakistanMap />
      <MineralPotentialLinks />
    </div>
  );
};
export default MineralPotential;
