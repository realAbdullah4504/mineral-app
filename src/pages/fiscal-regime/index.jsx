import BreadCrumbs from "components/Breadcrumbs";
import FiscalIncentivesBg from "assets/images/fiscalincentives.png";
import { Container } from "components/UI";
import React from "react";
import IntroContainer from "components/IntroContainer";
import { FlipCards } from "components/FlipCards";

const InitiativesProjects = () => {
  const breadcrumbs = [
    { path: "/", label: "Home" },
    { path: "/fiscal-regime", label: "Fiscal Regime" },
  ];

  const fiscalCards = [
    {
      title: "Tax Structure",
      flipContent:
        "Info on Different Taxes i.e. Income tax, Withholding tax and other applicable taxes.",
      link: "/fiscal-regime-tax",
    },
    {
      title: "Royalties",
      flipContent:
        "Info on Rate of Royalties for each mineral, as per rules of each provincial government.",
      link: "/royalty-fee",
    },
    {
      title: "Cess & Levies",
      flipContent:
        "Info on different Cess & Levies that companies need to comply by.",
      link: "/cess",
    },
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
              Fiscal Regime
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
              <div className="grid grid-cols-3 w-[60%] gap-4">
                {fiscalCards.map((item) => (
                  <FlipCards
                    title={item.title}
                    flip={true}
                    flipContent={item.flipContent}
                    link={item.link ? item.link : ""}
                    changebg={true}
                    className=""
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

export default InitiativesProjects;
