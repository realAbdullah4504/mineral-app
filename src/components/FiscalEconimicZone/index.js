import BreadCrumbs from "components/Breadcrumbs";
import React from "react";

export const FiscalEconomicZone = () => {
  const breadcrumbs = [
    { path: "/", label: "Home" },
    { path: "/business-investment", label: "Business & Investment" },
    { path: "/fiscal-incentives", label: "Fiscal Incentives" },
    { path: "/special-economic-zones", label: "Special Economic Zones" },
  ];
  return (
    <>
     <div className=' lg:max-w-[1440px] w-[90%] mt-[50px] relative m-auto '>
        <BreadCrumbs breadcrumbs={breadcrumbs} />

        </div>
      <div className="w-[1179px] relative m-auto mt-[50px]">
        {/* <BreadCrumbs breadcrumbs={breadcrumbs} /> */}

        <div className="text-[64px] font-[700] leading-[83px] font-ibm-plex-sans my-3">
          Special Economic Zones
        </div>
        <div className="text-[22px] leading-[24px] ">
          The Special Economic Zones (SEZs) of Pakistan are a pivotal initiative
          aimed at fostering economic growth and industrial development across
          the nation. Strategically located to attract both domestic and
          international investments, these zones offer state-of-the-art
          infrastructure, tax incentives, and streamlined regulatory processes.
          The SEZs in Pakistan are designed to create a thriving business
          environment, driving innovation, job creation, and sustainable
          development. 
          <br />
          <br />
          The Government of Pakistan adopted the ‘Special Economic Zones’ Act,
          2012, to encourage domestic and international investors for promotion
          and establishment of industrial infrastructures focusing on export
          increase, import substitution, transfer of technology and GDP growth.
        </div>
      </div>
    </>
  );
};
