import React from "react";
import FiscalIncentivesBg from "assets/images/fiscalincentives.png";
import { FlipCards } from "components/FlipCards";
import IntroContainer from "components/IntroContainer";
import BreadCrumbs from "components/Breadcrumbs";

function BusinessInvestment() {
  const businessAndInvestmentcards = [
    {
      title: "Test Information",
      flipContent:
        "Mineral tests are physical & chemical methods of testing samples, which identify the mineral. This approach is used widely in mineralogy, ore geology and general geological mapping",
      link: "/test-information",
    },
    {
      title: "Apply",
      flipContent: "Apply for testing for your mineral sample",
      link: "/applying-for-mineral-test",
    },
    {
      title: "Results",
      flipContent: "Check the status of your sample test result",
      link: "/minerals-test-results",
    },
  ];
  const breadcrumbs = [
    { path: "/", label: "Home" },
    { path: "/service-and-support", label: "Services and Support" },
    { path: "/mineral-testing-labs", label: "Minerals Testing Labs" },
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
        <div
          style={{
            marginLeft: "70px",
            marginTop: "30px",
          }}
        >
          <BreadCrumbs breadcrumbs={breadcrumbs} />
        </div>
        <IntroContainer
          title={
            <h1>
              <span
                className="lg:w-[125px] w-[95px] lg:mr-[7rem] mr-[3.5rem]"
                style={{
                  borderBottom: "5px solid green",
                  display: "inline-block",
                  borderRadius: "5px",
                }}
              >
                Mineral
              </span>
              Testing <span className="text-[#27AE60]">Labs</span>
            </h1>
          }
          content="This section provides information about the various tests related to minerals to know more about their composition and properties."
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
