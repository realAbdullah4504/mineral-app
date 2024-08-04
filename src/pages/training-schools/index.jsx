import BreadCrumbs from "components/Breadcrumbs";
import { Container } from "components/UI";
import DrillingServicesImg from "assets/images/drilling-services.png";
import React from "react";
import DataCard from "components/Cards/dataCard";
import StaticDataCard from "components/Cards/staticDataCard";

const TrainingSchools = () => {
  const breadcrumbs = [
    { path: "/", label: "Home" },
    { path: "/who-is-who", label: "Who is Who" },
    { path: "#", label: "Training Schools" },
  ];

  const Adddata = {
    headline: "Apply for Registration",
    link: '/registerorganization?orgtype=ts'
  };

  return (
    <Container classes="mt-8 w-[90%]">
      <BreadCrumbs breadcrumbs={breadcrumbs} />
      <div className="flex flex-wrap mt-14">
        <div className="w-full">
          <h1 className="font-ibm-plex-sans font-semibold text-[64px] p-[0px]">
          Training Schools
            <hr className="mt-1 w-32 border-4 border-green-500 rounded-full" />
          </h1>

          <div className="w-full flex justify-center mt-16">
              <div className="flex flex-wrap justify-center gap-20 p-4">
                <DataCard type={"add"} data={Adddata} />
                <StaticDataCard type={"detail"} data={{headline: "Khyber Group of Companies"}} />
                <StaticDataCard type={"detail"} data={{headline: "INDUS MINING CORPORATION"}} />
                <StaticDataCard type={"detail"} data={{headline: "Punjab Mineral Company (Pvt) Limited (PMC)"}} />
                <StaticDataCard type={"detail"} data={{headline: "Sitara Chemical Industries"}} />
                <StaticDataCard type={"detail"} data={{headline: "RYK Mills (Pvt.) Limited"}} />
                <StaticDataCard type={"detail"} data={{headline: "Olympia Chemicals Limited"}} />
              </div>
            </div>

            <div className="mt-80"></div>
        </div>
      </div>
    </Container>
  );
};

export default TrainingSchools;
