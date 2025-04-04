import React from "react";
import FiscalIncentivesBg from "assets/images/fiscalincentives.png";
import { FlipCards } from "components/FlipCards";
import IntroContainer from "components/IntroContainer";
import BreadCrumbs from "components/Breadcrumbs";
import { Container } from "components/UI";

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
      }}
      className="pb-[150px]"
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
            <h1 className="font-ibm-plex-sans font-semibold text-[64px] p-[0px]">
              Maps & Reports
              <hr className="mt-1 w-32 border-4 border-green-500 rounded-full" />
            </h1>
          }
          content="This section provides an interactive display of the minerals and mining sector of Pakistan, including visualization through GIS Portal and access to geological data."
          height="90%"
          width="80%"
          introHeight="280px"
        ></IntroContainer>
        <Container classes="w-[90%]">
          <div className="flex w-full justify-center">
            <div className="flex w-[650px]">
              <div className="flex flex-col w-1/2">
                <FlipCards
                  title={businessAndInvestmentcards[0].title}
                  flip={true}
                  flipContent={businessAndInvestmentcards[0].flipContent}
                  link={
                    businessAndInvestmentcards[0].link
                      ? businessAndInvestmentcards[0].link
                      : ""
                  }
                ></FlipCards>
              </div>
              <div className="flex flex-col w-1/2">
                <FlipCards
                  title={businessAndInvestmentcards[1].title}
                  flip={true}
                  flipContent={businessAndInvestmentcards[1].flipContent}
                  link={
                    businessAndInvestmentcards[1].link
                      ? businessAndInvestmentcards[1].link
                      : ""
                  }
                ></FlipCards>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default MapsAndReports;
