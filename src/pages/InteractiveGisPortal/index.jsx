import React from "react";
import BreadCrumbs from "components/Breadcrumbs";
import { Container } from "components/UI";
import { useRef } from "react";

const InteractiveGisPortal = () => {
  const breadcrumbs = [
    { path: "/", label: "Home" },
    { path: "/service-and-support", label: "Service & Support" },
    { path: "/maps-and-reports", label: "Maps & Reports" },
    { path: "/gis-portal", label: "GIS Portal" },
  ];

  const iframeRef = useRef(null);

  const handleFullScreen = () => {
    if (iframeRef.current) {
      if (iframeRef.current.requestFullscreen) {
        iframeRef.current.requestFullscreen();
      } else if (iframeRef.current.mozRequestFullScreen) {
        /* Firefox */
        iframeRef.current.mozRequestFullScreen();
      } else if (iframeRef.current.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        iframeRef.current.webkitRequestFullscreen();
      } else if (iframeRef.current.msRequestFullscreen) {
        /* IE/Edge */
        iframeRef.current.msRequestFullscreen();
      }
    }
  };

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
              The portal acts as a centralized repository for geological data,
              housing a vast collection of information related to Pakistan’s
              geology. This includes data on mineral occurrences, geological
              structures, licensed or available sites, economic zones,
              infrastructure, administrative boundaries, environmental features,
              and other relevant geological parameters.
            </div>
            <div className="flex w-full justify-around">
              <div
                className="cursor-pointer flex flex-col bg-[#27AE60] w-[150px] h-[40px] justify-center items-center rounded-[28px] text-white "
                onClick={() => window.open("https://arcg.is/GuCL90", "_blank")}
              >
                New Window
              </div>
              <div
                onClick={handleFullScreen}
                className="cursor-pointer flex flex-col bg-[#27AE60] w-[150px] h-[40px] justify-center items-center rounded-[28px] text-white"
              >
                Full screen
              </div>
            </div>
          </div>
        </div>

        <iframe
          ref={iframeRef}
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
