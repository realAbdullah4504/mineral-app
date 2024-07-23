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
        <h1 className="font-ibm-plex-sans font-semibold text-[64px] p-[0px]">
          Revenue Collection{" "}
          <hr className="mt-1 w-32 border-4 border-green-500 rounded-full" />
        </h1>
        <div className="flex font-normal text-[22px] mt-[26px]">
          Information on revenue collected by provinces
        </div>
        <div className="flex mb-[170px] justify-center">
          <img src={revenue} alt="Revenue Dashboard" />
        </div>
      </div>
    </Container>
  );
};

export default StatisticsRevenue;
