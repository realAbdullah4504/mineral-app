import React from "react";
import Map from 'assets/images/Map.png';
import { Container } from "components/UI";
import { SectionTitle } from "components/UI/SectionTitle";
export const GisMineSection = () => {
  return (
    <Container classes="px-[124.56px]">
      <SectionTitle heading="GIS Mines & Mineral Portal" />
      <div className="w-full">
        <img src={Map} alt="pakistan map" className="w-full" />
      </div>
    </Container >
  );
};
