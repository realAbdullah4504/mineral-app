import React from "react";
import BreadCrumbs from "components/Breadcrumbs";
import { Container } from "components/UI";
import revenue from "assets/images/revenue.png";

const StatisticsRevenue = () => {
  const breadcrumbs = [
    { path: "/", label: "Home" },
    { path: "statistics", label: "Data & Statistics" },
    { path: "statistics-revenue", label: "Revenue Collection" },
  ];
  return (
    <Container classes="w-[90%]">
      <div className="flex flex-col">
        <div className="flex mb-[62px] mt-[41px]">
          <BreadCrumbs breadcrumbs={breadcrumbs} />
        </div>
        <div className="flex text-[64px] font-semibold">Revenue Collection</div>
        <div className="flex bg-[#009969] w-[120px] h-1 mt-[-10px] mb-[26px]"></div>
        <div className="flex font-normal text-[22px]">
          Information on revenue collected by provinces
        </div>
        <div className="flex">
          <img src={revenue} alt="Revenue Dashboard" />
        </div>
      </div>
    </Container>
  );
};

export default StatisticsRevenue;
