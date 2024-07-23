import BreadCrumbs from "components/Breadcrumbs";
import { Container } from "components/UI";
import MineralLabsImg from "assets/images/mineral-labs.png";
import React from "react";
import DataCard from "components/Cards/dataCard";

const MineralLabs = () => {
  const breadcrumbs = [
    { path: "/", label: "Home" },
    { path: "/who-is-who", label: "Who is Who" },
    { path: "#", label: "Mineral Labs" },
  ];

  const Adddata = {
    headline: "Apply for Registration",
    link: '/registerorganization?orgtype=go'
  };

  return (
    <Container classes="mt-8 w-[90%]">
      <BreadCrumbs breadcrumbs={breadcrumbs} />
      <div className="flex flex-wrap mt-14">
        <div className="w-full">
          <h1 className="font-ibm-plex-sans font-semibold text-[64px] p-[0px]">
          Mineral Labs
            <hr className="mt-1 w-32 border-4 border-green-500 rounded-full" />
          </h1>

          <div className="w-full flex justify-center mt-16">
              <div className="flex flex-wrap justify-center gap-20 p-4">
                <DataCard type={"add"} data={Adddata} />
                <DataCard type={"detail"} data={{headline: "Mineral Testing Laboratory"}} />
                <DataCard type={"detail"} data={{headline: "Geological Survey of Pakistan"}} />
                <DataCard type={"detail"} data={{headline: "SGS Pakistan (Private) Limited"}} />
                <DataCard type={"detail"} data={{headline: "Intertek Pakistan Pvt Ltd"}} />
                <DataCard type={"detail"} data={{headline: "Pakistan Council of Scientific and Industrial Research"}} />
                <DataCard type={"detail"} data={{headline: "Mineral Testing Laboratory Peshawar"}} />
              </div>
            </div>

            <div className="mt-80"></div>
        </div>
      </div>
    </Container>
  );
};

export default MineralLabs;
