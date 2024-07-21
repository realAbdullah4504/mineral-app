import BreadCrumbs from "components/Breadcrumbs";
import { Container } from "components/UI";
import FiscalIncentivesBg from "assets/images/fiscalincentives.png";
import React from "react";
import { FlipCards } from "components/FlipCards";

const serviceSupportCards = [
  {
    title: "Maps and Reports",
    flipContent:
      "This section provides an interactive display of the minerals and mining sector of Pakistan, including visualization through GIS Portal and access to geological data.",
    link: "/maps-and-reports",
  },
  {
    title: "Mineral Testing Labs",
    flipContent:
      "This section provides information about the various tests related to minerals to know more about their composition and properties.",
    link: "/mineral-testing-labs",
  },
  {
    title: "Expatriate Security",
    flipContent:
      "Procedures for expat NOC clearance for setting up a mining company in Pakistan",
    link: "#",
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
              The mining sector of Pakistan has tremendous potential for long
              term sustainable development. Being a mineral-rich country,
              Pakistan offers a diverse range of minerals and gemstones over a
              vast area where prospects of national and foreign investment are
              endless.
            </div>

            <div className="mt-20 flex justify-center">
              <div className="service-sport-container-cards ">
                {serviceSupportCards.map((item) => (
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

export default ServiceAndSupport;
