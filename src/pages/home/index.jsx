import React from "react";
import {
  GeologicalSection,
  Slider,
  MiningSection,
  GlobalMinerSection,
  GisMineSection,
  NewsAndEvent,
} from "components";

const Home = () => {
  return (
    <div className="min-w-[1440px]">
      <Slider />
      <MiningSection />
      <GeologicalSection />
      <GlobalMinerSection />
      <GisMineSection />
      <NewsAndEvent />
    </div>
  );
};
export default Home;
