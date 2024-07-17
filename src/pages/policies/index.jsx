import BreadCrumbs from "components/Breadcrumbs";
import CardComponent from "components/Cards/simpleCard";
import { Container } from "components/UI";
import React from "react";

const cardContent = [
  { text: "KP", color: "#009969" },
  { text: "Baluchistan", color: "#009969" },
  { text: "Punjab", color: "#009969" },
];

const LegalPolicies = () => {
  const breadcrumbs = [
    { path: "/", label: "Home" },
    { path: "/legal-framework", label: "Legal Framework" },
    { path: "/governance", label: "Governance" },
    { path: "#", label: "Policies" },
  ];

  return (
    <Container classes="mt-8 w-[90%]">
      <BreadCrumbs breadcrumbs={breadcrumbs} />
      <div className="flex flex-wrap mt-[20px]">
        <div className="max-w-[100%]">
          <h1 className="font-ibm-plex-sans font-semibold text-[64px] p-[0px]">
            Policies
            <hr className="mt-1 w-32 border-4 border-green-500 rounded-full" />
          </h1>
          <div className="font-ibm-plex-sans mt-8 font-semibold text-[36px] p-[0px]">
            National Mineral Policy
          </div>
          <div
            className="font-helvetica font-normal text-[22px] leading-[24px] mt-4"
            style={{ whiteSpace: "pre-line" }}
          >
            The policy focuses on attracting local and foreign investment in the
            exploration and development of mineral resources through
            deregulation, liberalization and private sector participation, while
            also ensuring environmental protection and social responsibility.
            The policy also addresses the international competitiveness through
            attractive regulatory regimes to create a conducive environment for
            investment. Implementation of policy has brought significant direct
            foreign investment to the mineral sector, which resulted into
            discovery & scientific development of world-class mineral deposits
            in remote areas.
          </div>
          <div className="flex flex-wrap mt-6 space-x-4">
            <CardComponent
              content={{
                text: "National Mineral Policy, 2013",
                color: "#009969",
              }}
            />
          </div>

          <div className="font-ibm-plex-sans mt-7 font-semibold text-[36px] p-[0px]">
            Provincial Policies
          </div>

          <div className="">
            <div className="flex flex-wrap mt-6 space-x-4">
              <CardComponent content={cardContent} />

              {/* large gap */}
            </div>
            <div className="mt-64"></div>

          </div>
        </div>
      </div>
    </Container>
  );
};

export default LegalPolicies;
