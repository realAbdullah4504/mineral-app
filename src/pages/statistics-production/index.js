import React from "react";
import BreadCrumbs from "components/Breadcrumbs";
import { Container } from "components/UI";
import production from "assets/images/production.png";

const StatisticsRevenue = () => {
  const breadcrumbs = [
    { path: "/", label: "Home" },
    { path: "statistics", label: "Data & Statistics" },
    { path: "statistics-production", label: "Production Data" },
  ];
  return (
    <Container classes="w-[90%]">
      <div className="flex flex-col">
        <div className="flex mb-[62px] mt-[41px]">
          <BreadCrumbs breadcrumbs={breadcrumbs} />
        </div>
        <div className="flex text-[64px] font-semibold">Production Data</div>
        <div className="flex bg-[#009969] w-[100px] h-1 mt-[-10px] mb-[26px]"></div>
        <div className="flex font-normal text-[22px]">
          Dashboard on Production Data of Minerals
        </div>
        <div className="flex mb-[120px] justify-center">
          <img src={production} alt="Production Dashboard" />
        </div>
      </div>
    </Container>
  );
};

export default StatisticsRevenue;
