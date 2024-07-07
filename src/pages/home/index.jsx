import React from "react";
import {
  GeologicalSection,
  Slider,
  MiningSection,
  GlobalMinerSection,
  GisMineSection,
  NewsAndEvent,
  AvenueForMineralSlider,
} from "components";

const Home = () => {
  return (
    <div className="min-w-[1280px]">
      <Slider />
      <MiningSection />
      <GeologicalSection />
      <GlobalMinerSection />
      <GisMineSection />
      <NewsAndEvent />
      <AvenueForMineralSlider/>
    </div>
  );
};
export default Home;
