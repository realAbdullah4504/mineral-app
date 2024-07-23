import React from "react";
import {
  GeologicalSection,
  Slider,
  MiningSection,
  GlobalMinerSection,
  GisMineSection,
  NewsAndEvent,
} from "components";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <div className="min-w-[1280px]">
      <Slider />
      <MiningSection />
      <GeologicalSection />
      <GlobalMinerSection />
      <GisMineSection />
      <div id="news-and-event">
        <NewsAndEvent />
      </div>
    </div>
  );
};
export default Home;
