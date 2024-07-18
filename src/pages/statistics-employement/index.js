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
        <div className="flex text-[64px] font-semibold">
          Employement Statistics
        </div>
        <div className="flex bg-[#009969] w-[100px] h-1 mt-[-10px] mb-[26px]"></div>
        <div className="flex font-normal text-[22px]">
          Information on Employement Statistics
        </div>
        <div className="flex mb-[120px]">
          <img src={employement} alt="Revenue Dashboard" />
        </div>
      </div>
    </Container>
  );
};

export default StatisticsRevenue;
