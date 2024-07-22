import React from "react";
import BreadCrumbs from 'components/Breadcrumbs'
import {
  Container,
} from "components/UI";

const InteractiveGisPortal= () => {
  const breadcrumbs = [
    { path: '/', label: 'Home' },
    { path: '/service-and-support', label: 'Service & Support' },
    { path: "/maps-and-reports", label: "Maps & Reports" },
    { path: '/gis-portal', label: 'GIS Portal' },
  ];
  return (
    <div className="max-w-[100%] my-10">
       <Container>
       <BreadCrumbs breadcrumbs={breadcrumbs} />
      <div className="flex ml-10 mt-[20px] text-center my-10">
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
      
      <iframe
          id="gis1"
          title="GIS IFrame"
          className="gis__ifrmae"
          src="https://arcg.is/GuCL90"
          loading="eager"
        ></iframe>
    </Container>
    </div>
  );
};
export default InteractiveGisPortal;
