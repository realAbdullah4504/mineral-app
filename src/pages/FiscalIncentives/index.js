import React from "react";
import FiscalIncentivesBg from "assets/images/fiscalincentives.png";
import { FlipCards } from "components/FlipCards";
import IntroContainer from "components/IntroContainer";
import BreadCrumbs from "components/Breadcrumbs";
import { Container } from "components/UI";
function FiscalIncentives() {
  const breadcrumbs = [
    { path: "/", label: "Home" },
    { path: "/business-investment", label: "Business & Investment" },
    { path: "#", label: "Fiscal Incentives" },
  ];
  const fiscalIncentivesCards = [
    {
      title: "Special Economic Zones",
      flipContent:
        "   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis ut lorem ultricies .",
      link: "/special-economic-zones",
    },
    {
      title: "Exporting Processing Zones",
      flipContent:
        "   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis ut lorem ultricies .",
      link: "/export-processing-zones",
    },
    {
      title: "CPEC",
      flipContent:
        "   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis ut lorem ultricies .",
      link: "/fiscal-CPEC",
    },
    {
      title: "Tax Exemptions",
      flipContent:
        "   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis ut lorem ultricies .",
      link: "/fiscal-tax",
    },
  ];

  return (
    <div
      className="fiscal-incentivs-intro-bg"
      style={{ backgroundImage: `url(${FiscalIncentivesBg})` }}
    >
      <Container classes="mt-8 w-[90%]">
        <div className="business-investment-container">
          <BreadCrumbs breadcrumbs={breadcrumbs} />
          <IntroContainer
            title="Fiscal Incentives"
            content="The Government of Pakistan has introduced a number of initiatives and incentives, aimed at facilitating local and foreign investors, collaborators and industrial ventures. Explore how the Government of Pakistan is fostering an enabling environment for the minerals and mining sector of Pakistan"
            // height="90%"
            width="100%"
            introHeight="280px"
          ></IntroContainer>
          <div className="fiscal-incentives-container-cards">
            {fiscalIncentivesCards.map((item) => (
              <FlipCards
                title={item.title}
                flip={false}
                flipContent={item.flipContent}
                link={item.link ? item.link : ""}
                changebg={true}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default FiscalIncentives;
