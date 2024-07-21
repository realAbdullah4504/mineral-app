import React from "react";
import FiscalIncentivesBg from "assets/images/fiscalincentives.png";
import { FlipCards } from "components/FlipCards";
import IntroContainer from "components/IntroContainer";
import BreadCrumbs from "components/Breadcrumbs";

function MapsAndReports() {
  const businessAndInvestmentcards = [
    {
      title: "GIS Portal",
      flipContent:
        "The GIS portal is an interactive map where users can view location of mineral occurrences, title, names and locations.",
      link: "/gis-portal",
    },
    {
      title: "Geological Data",
      flipContent:
        "Geological data provides information about the distribution & composition of minerals essential for identifying potential mineral deposits.",
      link: "/access-to-geological-data",
    },
  ];
  const breadcrumbs = [
    { path: "/", label: "Home" },
    { path: "/service-and-support", label: "Services and Support" },
    { path: "/maps-and-reports", label: "Maps & Reports" },
  ];

  return (
    <div
      style={{
        width: "100%",
        height: "auto",
        backgroundImage: `linear-gradient(to bottom, white, rgba(255,255,255,0)), url(${FiscalIncentivesBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }} className="pb-[150px]"
    >
      <div className="business-investment-container">
        <div
          style={{
            // marginLeft: "70px",
            marginTop: "30px",
          }}
          className="px-14"
        >
          <div className="max-w-[1440px]  relative m-auto">
          <BreadCrumbs breadcrumbs={breadcrumbs} />

          </div>
        </div>
        <IntroContainer
          title={
            <h1>
              <span
                className="lg:w-[125px] w-[95px] lg:mr-[3rem] mr-[1.5rem]"
                style={{
                  borderBottom: "5px solid green",
                  display: "inline-block",
                  borderRadius: "5px",
                }}
              >
                Maps
              </span>
              & <span className="text-[#27AE60]">Reports</span>
            </h1>
          }
          content="This section provides an interactive display of the minerals and mining sector of Pakistan, including visualization through GIS Portal and access to geological data."
          height="90%"
          width="80%"
          introHeight="280px"
        ></IntroContainer>
        <div className="business-investment-container-cards">
          {businessAndInvestmentcards.map((item) => (
            <FlipCards
              title={item.title}
              flip={true}
              flipContent={item.flipContent}
              link={item.link ? item.link : ""}
            ></FlipCards>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MapsAndReports;
