import React from "react";
import { GeologicalSection, Slider, MiningSection, GlobalMinerSection, GisMineSection, NewsAndEvent } from "components";


const Home = () => {
  return (
    <>
      <Slider />
      <MiningSection />
      <GeologicalSection />
     <GlobalMinerSection />
     <GisMineSection />
      <NewsAndEvent/>
      
    </>
  );
};
export default Home;