import React from "react";
import {
  Container,
} from "components/UI";

const InteractiveGisPortal= () => {
  return (
    <div className="max-w-[100%] my-20">
       <Container>
      <div className="flex ml-10 mt-[20px] text-center">
        <div className="max-w">
          <span className="font-ibm-plex-sans font-semibold  text-[64px] p-[0px] mr-5">
          Welcome to
          </span>
          <span className="font-ibm-plex-sans font-semibold text-[64px] p-[0px]  text-[#27AE60]">
          GIS Portal of Pakistan
          </span>
          <div className="font-ibm-plex-sans font-[400px] text-[18px] leading-[25px]">
          The portal acts as a centralized repository for geological data, housing a vast collection of information related to Pakistan’s geology. This includes data on mineral occurrences, geological structures, licensed or available sites, economic zones, infrastructure, administrative boundaries, environmental features, and other relevant geological parameters.
          </div>
        </div>
      </div>
    </Container>
    </div>
  );
};
export default InteractiveGisPortal;
