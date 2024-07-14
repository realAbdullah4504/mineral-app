import React from "react";
import IntroContainer from "components/IntroContainer";
import SpecialInvestentBg from "assets/images/SpecialInvestmentBg.png";
import MoreInfo from "assets/images/MoreInfoRect.png";

function SpecialInvestmentFacilities() {
  const investmentGoals = [
    {
      description: "Enhance awareness of Pakistan’s latent potential in the relevant fields",
    },
    {
      description: "Explore new opportunities to expand cooperation in the relevant fields.",
    },
    {
      description: "Improving ease of doing business",
    },
    {
      description: "Overcome systematic/bureaucratic hurdles.",
    },
    {
      description: "Optimize horizontal-vertical synergy – coordination between federation and provinces.",
    },
    {
      description: "Facilitate timely decision-making and avoid duplication of effort.",
    },
    {
      description: "Fast-track investment and project implementation",
    },
  ];
  return (
    <div>
      {" "}
      <div className="special-investment-facilities-intro">
        <IntroContainer
          title={
            <h1>
              Special Investment <span>Facilitation Council</span>
            </h1>
          }
          content={
            <div>
              {" "}
              <p>
                {" "}
                SIFC focuses on investment & privatization, initially in five areas; Agriculture, Minerals, Information
                Technology & Telecommunication and Energy. It will act as ‘Single Window” for multi-domain cooperation
                in relevant fields with GCC countries in particular and other countries in general, for facilitation of
                investment and developing an enabling policy environment
              </p>
              <h6>
                SIFC is targeted at a long-term road-map for growth, development and investment in the relevant fields,
                by aiming to:
              </h6>
            </div>
          }
          introHeight="300px"
          width="80%"
        ></IntroContainer>
        <div
          className="special-investment-roadmap-graph"
          style={{
            width: "50%",
            backgroundImage: `url(${SpecialInvestentBg})`,
          }}
        >
          {" "}
          <ul>
            {investmentGoals.map((item, index) => (
              <li key={index}>{item.description}</li>
            ))}
          </ul>
        </div>
        <div className="special-investment-facilities-intro-moreinfo">
          {" "}
          <button style={{ backgroundImage: `url(${MoreInfo})` }}>
            <div> More Info</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SpecialInvestmentFacilities;
