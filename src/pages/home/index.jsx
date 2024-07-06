import { GeologicalSection, Slider } from "components";
import React from "react";

const Home = () => {
  return (
    <div className="min-w-[1440px]">
      <Slider />
      <div className="">Welcome portal section</div>
      <GeologicalSection />
      <div>Global miners</div>
      <div>Mineral Portal</div>
      <div>News and Events</div>
      <div>Financial Stats</div>
    </div>
  );
};
export default Home;
