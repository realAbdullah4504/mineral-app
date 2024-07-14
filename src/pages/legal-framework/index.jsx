import BreadCrumbs from "components/Breadcrumbs";
import { Container } from "components/UI";
import FiscalIncentivesBg from "assets/images/fiscalincentives.png";

import React from "react";
import LinksCard from "components/Cards/linksCard";

const cardContent = [
  {
    text: "Governance",
    color: "#009969",
    links: [
      { url: "/institutional-arrangement", text: "Institutional Arrangement" },
      { url: "/legal-policies", text: "Policies" },
    ],
    minWidth: 80,
  },
  {
    text: "Acts & Laws",
    color: "#009969",
    links: [
      { url: "/mining-operations", text: "Mining Operations" },
      { url: "/health-safety", text: "Health and Safety" },
    ],
    minWidth: 80,
  },
  {
    text: "Rules & Regulations",
    color: "#009969",
    links: [
      {
        url: "/consession-rules",
        text: "Concession Rules",
      },
      { url: "/labor-welfare", text: "Labour Welfare" },
    ],
    minWidth: 80,
  },
];

const LegalFramework = () => {
  const breadcrumbs = [
    { path: "/", label: "Home" },
    { path: "/", label: "Legal Framework" },
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
      <Container classes="mt-8">
        <BreadCrumbs breadcrumbs={breadcrumbs} />
        <div className="flex flex-wrap mt-[20px]">
          <div className="max-w-[100%]">
            <h1 className="font-ibm-plex-sans font-semibold text-[64px] p-[0px]">
              Legal Framework
              <hr className="mt-1 w-32 border-4 border-green-500 rounded-full" />
            </h1>
            <div
              className="font-helvetica font-normal text-[22px] leading-[24px] mt-4"
              style={{ whiteSpace: "pre-line" }}
            >
              The legal framework around mining in Pakistan is primarily
              governed by the Mines and Minerals (Development and Regulation)
              Act, 1948, and the Mines and Minerals (Development and Regulation)
              Rules, 1960. Additionally, each province in Pakistan has its own
              set of rules and regulations related to mining activities.
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

export default LegalFramework;
