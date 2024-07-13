import BreadCrumbs from "components/Breadcrumbs";
import CardComponent from "components/Card";
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

const HealthSafety = () => {
  const breadcrumbs = [
    { path: '/', label: 'Home' },
    { path: '/', label: 'Legal Framework' },
    { path: '/', label: 'Acts & Laws' },
    { path: '#', label: 'Health & Safety' },
  ];

  return (
    <Container>
      <BreadCrumbs breadcrumbs={breadcrumbs} />
      <div className="flex flex-wrap mt-[20px]">
        <div className="max-w-[100%]">
          <h1 className="font-ibm-plex-sans font-semibold text-[64px] p-[0px]">
            Health & Safety
            <hr className="mt-0 w-32 border-4 border-green-500 rounded-full" />
          </h1>
          <div
            className="font-helvetica font-normal text-[22px] leading-[24px] mt-6"
            style={{ whiteSpace: "pre-line" }}
          >
            Health and Safety Regulations establish safety protocols and
            guidelines to ensure the health and safety of workers in the mining
            sector. These regulations outline procedures for identifying
            workplace hazards, assessing risks, and implementing control
            measures to prevent accidents and injuries. Safety training programs
            are designed to raise awareness among workers about potential
            hazards associated with mining operations, such as machinery
            accidents, falls, exposure to harmful substances, and environmental
            hazards. The Mines Act,1923  is a primary legislation that
            establishes provisions for the health, safety, welfare, and working
            conditions of miners and workers in mines. {" "}
          </div>

          <CardComponent
            content={{
              text: "Mines ACT, 1923",
              color: "#009969",
            }}
          />

          <div className="font-ibm-plex-sans mt-7 font-semibold text-[36px] p-[0px]">
            Provincial Health & Safety Regulation
          </div>

          <div className="">
            <CardComponent content={cardContent} />

            {/* large gap */}
            <div className="mt-64"></div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HealthSafety;
