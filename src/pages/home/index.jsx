import { GeologicalSection, Slider } from "components";
import { Slider2 } from "components/slider2";
import { MineralSectorPotential } from "components/MineralSectorPotential";
import React from "react";

const Home = () => {
  return (
    <>
      <Slider />
      <div className="">Welcome portal section</div>
      <GeologicalSection />
      <div>Global miners</div>
      <div>Mineral Portal</div>
      <div>News and Events</div>
      <div>Financial Stats</div>
      <Slider2 />
      <MineralSectorPotential />
    </>
  );
};
export default Home;
