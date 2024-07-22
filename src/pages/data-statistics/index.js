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
        <BreadCrumbs breadcrumbs={breadcrumbs} />
        <div className="flex flex-wrap mt-[20px]">
          <div className="flex flex-col">
            <h1 className="font-ibm-plex-sans font-semibold text-[64px] p-[0px]">
              Data & Statistics
              <hr className="mt-1 w-32 border-4 border-green-500 rounded-full" />
            </h1>
            <div
              className="font-helvetica font-normal text-[22px] leading-[24px] mt-4"
              style={{ whiteSpace: "pre-line" }}
            >
              Statistical data related to mining operations.
            </div>
          </div>

          <div className="w-full flex justify-center mb-16 mt-20">
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
