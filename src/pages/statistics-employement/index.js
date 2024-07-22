import React from "react";
import BreadCrumbs from "components/Breadcrumbs";
import { Container } from "components/UI";
import employement from "assets/images/employement.png";

const StatisticsRevenue = () => {
  const breadcrumbs = [
    { path: "/", label: "Home" },
    { path: "statistics", label: "Data & Statistics" },
    { path: "statistics-employement", label: "Employement Statistics" },
  ];
  return (
    <Container classes="w-[90%]">
      <div className="flex flex-col">
        <div className="flex mb-[62px] mt-[41px]">
          <BreadCrumbs breadcrumbs={breadcrumbs} />
        </div>
        <h1 className="font-ibm-plex-sans font-semibold text-[64px] p-[0px] mb-[26px]">
          Employement Statistics
          <hr className="mt-1 w-32 border-4 border-green-500 rounded-full" />
        </h1>
        <div className="flex font-normal text-[22px]">
          Information on provincial Employement Statistics
        </div>
        <div className="flex mb-[120px] justify-center">
          <img src={employement} alt="Employement Dashboard" />
        </div>
      </div>
    </Container>
  );
};

export default StatisticsRevenue;
