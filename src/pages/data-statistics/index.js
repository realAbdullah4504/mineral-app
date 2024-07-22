import React from "react";
import FiscalIncentivesBg from "assets/images/fiscalincentives.png";
import { FlipCards } from "components/FlipCards";
import IntroContainer from "components/IntroContainer";
import BreadCrumbs from "components/Breadcrumbs";
import { Container } from "components/UI";

function Csr() {
  const csrCards = [
    {
      title: "Revenue Collection",
      flipContent:
        "Revenue collection from the governing authorities from mining entities.",
      link: "/statistics-revenue",
    },
    {
      title: "Employment",
      flipContent:
        "Employment opportunities created by the mining sector of Pakistan",
      link: "/statistics-employement",
    },
    {
      title: "Production Data",
      flipContent: "Statistics on the mineral production data of Pakistan.",
      link: "/statistics-production",
    },
    {
      title: "Import & Export Stats",
      flipContent:
        "Statistics on import & export opportunities in the mining industry",
      link: "/statistics-ie",
    },
    {
      title: "Accident & Rescue",
      flipContent: "Statistics on incidents of accidents",
      link: "/statistics-incidents",
    },
  ];
  const breadcrumbs = [
    { path: "/", label: "Home" },
    { path: "statistics", label: "Data & Statistics" },
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
    >
      <Container classes="mt-8 w-[90%]">
        <div className="business-investment-container">
          <BreadCrumbs breadcrumbs={breadcrumbs} />
          <IntroContainer
            title={
              <h1>
                <span
                  style={{
                    borderBottom: "5px solid green",
                    display: "inline-block",
                    borderRadius: "5px",
                  }}
                >
                  Data
                </span>{" "}
                & Statistics
              </h1>
            }
            content="Statistical data related to mining operations."
            height="70%"
            width="100%"
            introHeight="280px"
          ></IntroContainer>

          <div className="w-full flex justify-center mb-16">
            <div className="grid grid-cols-3 w-[70%] gap-4 ">
              {csrCards.map((item) => (
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
      </Container>
    </div>
  );
}

export default Csr;
