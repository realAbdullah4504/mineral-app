import { GeologicalSection, Slider } from "components";
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
    </>
  );
};
export default Home;