import React from "react";
import Map from "assets/images/PakMap.jpeg";
import { Container, Button } from "components/UI";
import { SectionTitle } from "components/UI/SectionTitle";
export const GisMineSection = () => {
  return (
    <Container classes="px-[124.56px]">
      <SectionTitle heading="GIS Mines & Mineral Portal" />
      <Button
        className="btns"
        path="/gis-portal"
        buttonStyle="hbtn--primary"
        buttonSize="hbtn--large"
      >
        Explore GIS Mineral Portal <i className="far fa-play-circle" />
      </Button>
      <div className="w-full mt-5">
        <img src={Map} alt="pakistan map" className="w-full" />
      </div>
    </Container>
  );
};
