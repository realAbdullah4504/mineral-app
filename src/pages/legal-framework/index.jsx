import BreadCrumbs from "components/Breadcrumbs";
import { Container } from "components/UI";
import FiscalIncentivesBg from "assets/images/fiscalincentives.png";
import { FlipCards } from "components/FlipCards";
import React from "react";

const legalFrameworkCards = [
  {
    title: "Governance",
    flipContent:
      "Overarching framework for governing the mineral and mining sector of Pakistan and the policies related to the sector for smooth and effective management and execution.",
    link: "/governance",
  },
  {
    title: "Acts & Laws",
    flipContent:
      "Federal and Provincial acts and laws ensuring effective mining operations and health and safety considerations.",
    link: "/acts-laws",
  },
  {
    title: "Rules & Regulations",
    flipContent:
      "This section covers the regulations enforced by authorities for protection of labor welfare as well as the concession rules and guidelines.",
    link: "/rules-regulations",
  },
];

const LegalFramework = () => {
  const breadcrumbs = [
    { path: "/", label: "Home" },
    { path: "#", label: "Legal Framework" },
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

            <div className="mt-20 flex justify-center">
              <div className="service-sport-container-cards">
                {legalFrameworkCards.map((item) => (
                  <FlipCards
                    title={item.title}
                    flip={true}
                    flipContent={item.flipContent}
                    link={item.link ? item.link : ""}
                  ></FlipCards>
                ))}
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
