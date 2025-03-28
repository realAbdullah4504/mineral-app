import BreadCrumbs from "components/Breadcrumbs";
import CardComponent from "components/Cards/simpleCard";
import { Container } from "components/UI";
import React from "react";

const cardContent = [
  { text: "KP", color: "#009969" },
  { text: "Baluchistan", color: "#009969" },
  { text: "Punjab", color: "#009969" },
  { text: "Sindh", color: "#009969" },
  { text: "GB", color: "#009969" },
  { text: "AJK", color: "#009969" },
];

const LaborWelfare = () => {
  const breadcrumbs = [
    { path: "/", label: "Home" },
    { path: "/legal-framework", label: "Legal Framework" },
    { path: "/rules-regulations", label: "Rules & Regulations" },
    { path: "/labor-welfare", label: "Labor Welfare" },
  ];

  return (
    <Container classes="mt-8 w-[90%]">
      <BreadCrumbs breadcrumbs={breadcrumbs} />

      <div className="flex flex-wrap mt-[20px]">
        <div className="max-w-[100%]">
          <h1 className="font-ibm-plex-sans font-semibold text-[64px] p-[0px]">
            Labor Welfare
            <hr className="mt-0 w-32 border-4 border-green-500 rounded-full" />
          </h1>
          <div
            className="font-helvetica font-normal text-[22px] leading-[24px] mt-8"
            style={{ whiteSpace: "pre-line" }}
          >
            Labor welfare rules related to mining in Pakistan encompass various
            regulations, standards, and guidelines aimed at ensuring the health,
            safety, well-being, and rights of workers employed in the mining
            sector. These rules are designed to create a safe and healthy work
            environment, promote fair labor practices, protect workers' rights,
            and provide social security benefits.
          </div>

          <div className="font-ibm-plex-sans mt-7 font-semibold text-[36px] p-[0px]">
            Provincial Labor Welfare Rules
          </div>

          <div className="">
            <div className="flex flex-wrap mt-6 space-x-4">
              <CardComponent content={cardContent} />
            </div>
            {/* large gap */}
            <div className="mt-64"></div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LaborWelfare;
