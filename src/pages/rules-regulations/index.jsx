import BreadCrumbs from "components/Breadcrumbs";
import { Container } from "components/UI";
import FiscalIncentivesBg from "assets/images/fiscalincentives.png";

import React from "react";
import { FlipCards } from "components/FlipCards";

const rulesAndRegulationsCards = [
  {
    title: "Concession Rules",
    link: "/consession-rules",
  },
  {
    title: "Labor Welfare",
    link: "/labor-welfare",
  }
];

const RulesRegulations = () => {
  const breadcrumbs = [
    { path: "/", label: "Home" },
    { path: "/legal-framework", label: "Legal Framework" },
    { path: "#", label: "Rules & Regulations" },
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
          <div className="w-full">
            <h1 className="font-ibm-plex-sans font-semibold text-[64px] p-[0px]">
            Rules & Regulations
              <hr className="mt-1 w-32 border-4 border-green-500 rounded-full" />
            </h1>
            <div
              className="font-helvetica font-normal text-[22px] leading-[24px] mt-4"
              style={{ whiteSpace: "pre-line" }}
            >
              Guidelines and procedures set in place for all aspects of mining.
            </div>

            <div className="flex flex-wrap mt-6 space-x-4 justify-center	">
              {rulesAndRegulationsCards.map((item) => (
                <FlipCards
                  title={item.title}
                  flip={false}
                  link={item?.link}
                  changebg={false}
                />
              ))}
            </div>

            {/* large gap */}

            <div className="mt-64"></div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RulesRegulations;
