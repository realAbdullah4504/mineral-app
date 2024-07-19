import BreadCrumbs from "components/Breadcrumbs";
import { Container } from "components/UI";
import FiscalIncentivesBg from "assets/images/fiscalincentives.png";

import React from "react";
import { FlipCards } from "components/FlipCards";

const actsAndLawsCards = [
  {
    title: "Mining Operations",
    link: "/mining-operations",
  },
  {
    title: "Health & Safety",
    link: "/health-safety",
  },
];

const ActsLaws = () => {
  const breadcrumbs = [
    { path: "/", label: "Home" },
    { path: "/legal-framework", label: "Legal Framework" },
    { path: "#", label: "Acts & Laws" },
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
              Acts & Laws
              <hr className="mt-1 w-32 border-4 border-green-500 rounded-full" />
            </h1>
            <div
              className="font-helvetica font-normal text-[22px] leading-[24px] mt-4"
              style={{ whiteSpace: "pre-line" }}
            >
              The laws governing the mining operations to promote responsible
              and safe mining practices, safeguard public health and optimize
              economic benefits.
            </div>

            <div className="w-full flex justify-center mt-20">
              <div className="grid grid-cols-2 w-[50%]">
                {actsAndLawsCards.map((item) => (
                  <FlipCards
                    title={item.title}
                    flip={false}
                    link={item?.link}
                    changebg={false}
                    className="m-0"
                  />
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

export default ActsLaws;
