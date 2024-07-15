import React from "react";
import FiscalIncentivesBg from "assets/images/fiscalincentives.png";
import { FlipCards } from "components/FlipCards";
import IntroContainer from "components/IntroContainer";
import BreadCrumbs from "components/Breadcrumbs";

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
      title: "Special Investment Facilitation Council (SIFC)",

      link: "/special-investment-facilities",
      flipContent:
        "SIFC, a special initiative for investment facilitation, with one of its core focuses being the mineral and mining sector of Pakistan",
    },
    {
      title: "Applying for Mineral Title",
      flipContent:
        "This section will guide you about the process, types, tenures and provincial procedures for obtaining a mineral title",
      link: "/applying-for-mineral-title",
    },
    {
      title: "Development Schemes",
      flipContent:
        "Government initiatives for future planning and enhancement of the mineral and mining sector of Pakistan",
      link: "/development-schemes",
    },
    {
      title: "Starting New Business",

      flipContent:
        "Learn more about the different types of business entitles that can operate in the minerals & mining sector of Pakistan and how to get started",
      link: "/starting-new-business",
    },
  ];
  const breadcrumbs = [
    { path: '/', label: 'Home' },
    { path: '#', label: 'Business & Investment' },
  ];

  return (
    <div
      style={{
        width: "100%",
        height: "auto",
        backgroundImage: `url(${FiscalIncentivesBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="business-investment-container">
      <div style={{
          marginLeft: '70px',
          marginTop: '30px',
        }}>
          <BreadCrumbs breadcrumbs={breadcrumbs} />

        </div>
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
                Business
              </span>{" "}
              & Investment
            </h1>
          }
          content="The Minerals and Mining sector of Pakistan has tremendous potential for long term sustainable development. Being a mineral-rich country, Pakistan offers a diverse range of minerals and gemstones, across the country, with massive potential for national and foreign investment."
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

export default BusinessInvestment;
