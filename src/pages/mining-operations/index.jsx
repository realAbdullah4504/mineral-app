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

const MiningOperations = () => {
  const breadcrumbs = [
    { path: "/", label: "Home" },
    { path: "/legal-framework", label: "Legal Framework" },
    { path: "/", label: "Acts & Laws" },
    { path: "#", label: "Mining Operations" },
  ];

  return (
    <Container classes="mt-8 w-[90%]">
      <BreadCrumbs breadcrumbs={breadcrumbs} />
      <div className="flex flex-wrap mt-[20px]">
        <div className="max-w-[100%]">
          <h1 className="font-ibm-plex-sans font-semibold text-[64px] p-[0px]">
            Mining Operations
            <hr className="mt-0 w-32 border-4 border-green-500 rounded-full" />
          </h1>
          <div
            className="font-helvetica font-normal text-[22px] leading-[24px] mt-6"
            style={{ whiteSpace: "pre-line" }}
          >
            Each Province has designated Mineral Federal & Provincial laws &
            regulations governing mineral development acts & procedures.
            Constitutionally, all minerals except nuclear, mineral oil & natural
            gas are under the provincial jurisdiction. The mining operations are
            governed by the ‘Regulation of Mines & Oil field & Mineral
            Development Act 1948. The provinces, there of have their own
            policies in place 
          </div>

          <div className="flex flex-wrap mt-6 space-x-4">
            <CardComponent
              content={{
                text: "Regulation of Mines & Oil Field & Mineral Development ACT 1948",
                color: "#009969",
              }}
            />
          </div>

          <div className="font-ibm-plex-sans mt-7 font-semibold text-[36px] p-[0px]">
            Provincial Mining Operation Acts
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

export default MiningOperations;
