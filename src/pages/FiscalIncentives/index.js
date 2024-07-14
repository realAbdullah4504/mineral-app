import React from "react";
import FiscalIncentivesBg from "assets/images/fiscalincentives.png";
import { FlipCards } from "components/FlipCards";
import IntroContainer from "components/IntroContainer";
function FiscalIncentives() {
  const fiscalIncentivesCards = [
    {
      title: "Special Economic Zones",
      flipContent: "   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis ut lorem ultricies .",
      link: "/special-economic-zones",
    },
    {
      title: "Exporting Processing Zones",
      flipContent: "   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis ut lorem ultricies .",
      link: "/export-processing-zones",
    },
    {
      title: "CPEC",
      flipContent: "   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis ut lorem ultricies .",
      link: "/fiscal-CPEC",
    },
    {
      title: "Tax Exemptions",
      flipContent: "   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis ut lorem ultricies .",
    },
  ];

  return (
    <div className="fiscal-incentivs-intro-bg" style={{ backgroundImage: `url(${FiscalIncentivesBg})` }}>
      <div className="business-investment-container">
        <IntroContainer
          title="Fiscal Incentives"
          content="The Government of Pakistan has introduced a number of initiatives and incentives, aimed at facilitating local and foreign investors, collaborators and industrial ventures. Explore how the Government of Pakistan is fostering an enabling environment for the minerals and mining sector of Pakistan"
          height="90%"
          width="85%"
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
    </div>
  );
}

export default FiscalIncentives;
