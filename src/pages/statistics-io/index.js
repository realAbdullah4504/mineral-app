import React from "react";
import BreadCrumbs from "components/Breadcrumbs";
import { Container } from "components/UI";
import exportImg from "assets/images/export.png";

const StatisticsRevenue = () => {
  const breadcrumbs = [
    { path: "/", label: "Home" },
    { path: "statistics", label: "Data & Statistics" },
    { path: "statistics-ie", label: "Import - Export Statistics" },
  ];
  return (
    <Container classes="w-[90%]">
      <div className="flex flex-col">
        <div className="flex mb-[62px] mt-[41px]">
          <BreadCrumbs breadcrumbs={breadcrumbs} />
        </div>
        <h1 className="font-ibm-plex-sans font-semibold text-[64px] p-[0px]">
          Import Export Statistics
          <hr className="mt-1 w-32 border-4 border-green-500 rounded-full" />
        </h1>
        <div className="flex mb-[120px] justify-center">
          <img src={exportImg} alt="Import Export Dashboard" />
        </div>
      </div>
    </Container>
  );
};

export default StatisticsRevenue;
