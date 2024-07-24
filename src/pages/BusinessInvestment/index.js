import React from "react";
import FiscalIncentivesBg from "assets/images/fiscalincentives.png";
import { FlipCards } from "components/FlipCards";
import IntroContainer from "components/IntroContainer";
import BreadCrumbs from "components/Breadcrumbs";
import { Container } from "components/UI";

function BusinessInvestment() {
  const businessAndInvestmentcards = [
    {
      title: "Mineral Potential of Pakistan",
      flipContent:
        "Boasting some of the largest mineral reserve,Pakistan is destined to become the hortspot for mineral and mining activities for years to come",
      link: "/mineral-potential",
    },
    {
      title: "Investment Opportunities",
      flipContent:
        "The diverse mineral resources in Pakistan offer lucrative opportunities for local and international investors",
      link: "/investment-opportunities",
    },
    {
      title: "Fiscal Incentives",
      flipContent:
        "The Government of Pakistan has introduced financial incentives such as tax and custom-duty relief, to encourage investemnt. This section explores these benefits in details",
      link: "/fiscal-incentives",
    },
    {
      title: "Mineral Development Strategy",
      flipContent:
        "Learn more about initiatives being taken by Government of Pakistan, regarding plans to enhance the minerals and mining sector",
      link: "/mineral-development-strategy",
    },
    {
      title: "Special Investment Facilitation Council",

      link: "/special-investment-facilities",
      flipContent:
        "SIFC, a special initiative for investment facilitation, with one of its core focuses being the mineral and mining sector of Pakistan",
    },
    {
      title: "Applying for Mineral Title",
      flipContent:
        "Understand the process of applying for a mineral title to start mining.",
      link: "/applying-for-mineral-title",
    },
    {
      title: "Development Schemes",
      flipContent:
        "Government initiatives for future planning and enhancement of the mineral and mining sector of Pakistan",
      link: "/development-initiatives",
    },
    {
      title: "Starting New Business",

      flipContent:
        "Learn more about the different types of business entitles that can operate in the minerals & mining sector of Pakistan and how to get started",
      link: "/starting-new-business",
    },
  ];
  const breadcrumbs = [
    { path: "/", label: "Home" },
    { path: "#", label: "Business & Investment" },
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
      <Container classes="mt-8 mb-[100px] w-[90%]">
        <BreadCrumbs breadcrumbs={breadcrumbs} />
        <div className="flex flex-wrap mt-[20px]">
          <div className="mb-20">
            <h1 className="font-ibm-plex-sans font-semibold text-[64px] p-[0px]">
              Business & Investment
              <hr className="mt-1 w-32 border-4 border-green-500 rounded-full" />
            </h1>
            <div
              className="font-helvetica font-normal text-[22px] leading-[24px] mt-4"
              style={{ whiteSpace: "pre-line" }}
            >
              The Minerals and Mining sector of Pakistan has tremendous
              potential for long term sustainable development. Being a
              mineral-rich country, Pakistan offers a diverse range of minerals
              and gemstones, across the country, with massive potential for
              national and foreign investment.
            </div>
          </div>

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
      </Container>
    </div>
  );
}

export default BusinessInvestment;
