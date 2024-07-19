import BreadCrumbs from "components/Breadcrumbs";
import { Container } from "components/UI";
import FiscalIncentivesBg from "assets/images/fiscalincentives.png";

import React from "react";
import LinksCard from "components/Cards/linksCard";

const cardContent = [
  {
    text: "Maps and Reports",
    url: "/maps-and-reports",
    color: "#009969",
    links: [
      { url: "/gis-portal", text: "GIS Portal" },
      { url: "/access-to-geological-data", text: "Geological Data" },
    ],
    minWidth: 80,
  },
  {
    text: "Mineral Testing Labs",
    url: "/mineral-testing-labs",
    color: "#009969",
    links: [
      { url: "/test-information", text: "Test Information" },
      { url: "/applying-for-mineral-test", text: "Apply" },
      { url: "#", text: "Results" },
    ],
    minWidth: 80,
  },
  {
    text: "Expatriate Security",
    color: "#009969",
    url: "#",
    links: [
      {
        url: "#",
        text: "Company Registration",
      },
      { url: "#", text: "Expat NOC Application" },
    ],
    minWidth: 80,
  },
];

const ServiceAndSupport = () => {
  const breadcrumbs = [
    { path: "/", label: "Home" },
    { path: "#", label: "Services and Support" },
  ];

  return (
    <div
      className="w-full"
      style={{
        height: "auto",
        backgroundImage: `linear-gradient(to bottom, white, rgba(255,255,255,0)), url(${FiscalIncentivesBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container classes="mt-8 w-[90%]">
        <BreadCrumbs breadcrumbs={breadcrumbs} />
        <div className="flex flex-wrap mt-[20px]">
          <div className="max-w-[100%]">
            <h1 className="font-ibm-plex-sans font-semibold text-[64px] p-[0px]">
            Services and Support
              <hr className="mt-1 w-32 border-4 border-green-500 rounded-full" />
            </h1>
            <div
              className="font-helvetica font-normal text-[22px] leading-[24px] mt-4"
              style={{ whiteSpace: "pre-line" }}
            >
              The mining sector of Pakistan has tremendous potential for long term sustainable development. Being a mineral-rich country, Pakistan offers a diverse range of minerals and gemstones over a vast area where prospects of national and foreign investment are endless.
            </div>

            <div className="mt-20">
              <div className="flex flex-wrap justify-center mt-6 space-x-4">
                <LinksCard content={cardContent} />
              </div>
            </div>

            {/* large gap */}

            <div className="mt-64"></div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ServiceAndSupport;
