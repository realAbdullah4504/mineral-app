import React from "react";
import IntroContainer from "components/IntroContainer";
import SpecialInvestentBg from "assets/images/SpecialInvestmentBg.png";
import MoreInfo from "assets/images/MoreInfoRect.png";
import BreadCrumbs from "components/Breadcrumbs";
import { Container } from "components/UI";

function SpecialInvestmentFacilities() {
  const breadcrumbs = [
    { path: "/", label: "Home" },
    { path: "/business-investment", label: "Business & Investment" },
    { path: "#", label: "Special Investment Facilitation Council" },
  ];
  const investmentGoals = [
    {
      description:
        "Enhance awareness of Pakistan’s latent potential in the relevant fields",
    },
    {
      description:
        "Explore new opportunities to expand cooperation in the relevant fields.",
    },
    {
      description: "Improving ease of doing business",
    },
    {
      description: "Overcome systematic/bureaucratic hurdles.",
    },
    {
      description:
        "Optimize horizontal-vertical synergy – coordination between federation and provinces.",
    },
    {
      description:
        "Facilitate timely decision-making and avoid duplication of effort.",
    },
    {
      description: "Fast-track investment and project implementation",
    },
  ];
  return (
    <Container classes="mt-8 w-[90%] max-w-[1170px] relative m-auto">
      {" "}
      <div className="special-investment-facilities-intro">
        <BreadCrumbs breadcrumbs={breadcrumbs} />
        <IntroContainer
          title={
            <div className="font-ibm-plex-sans font-[700] text-[64px] leading-[83px] ">
              Special Investment <span className="text-[#009969]">Facilitation Council</span>
            </div>
          }
          content={
            <div className="" >
              {" "}
              <p className="font-helvetica  text-[18px] leading-[25px] pb-5 pt-3 ">
                {" "}
                SIFC focuses on investment & privatization, initially in five
                areas; Agriculture, Minerals, Information Technology &
                Telecommunication and Energy. It will act as ‘Single Window” for
                multi-domain cooperation in relevant fields with GCC countries
                in particular and other countries in general, for facilitation
                of investment and developing an enabling policy environment
              </p>
              <h6 className="font-helvetica  text-[18px] leading-[25px] ">
                SIFC is targeted at a long-term road-map for growth, development
                and investment in the relevant fields, by aiming to:
              </h6>
            </div>
          }
          introHeight="300px"
          width="100%"
        ></IntroContainer>
        <div
          className="px-14 py-5 rounded-lg"
          style={{
            width: "60%",
            backgroundImage: `url(${SpecialInvestentBg})`,
          }}
        >
          {" "}
          <ul className="list-disc">
            {investmentGoals.map((item, index) => (
              <li key={index} className="font-helvetica  text-[18px] leading-[25px]">{item.description}</li>
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
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </Container>
  );
}

export default SpecialInvestmentFacilities;
