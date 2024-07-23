import BreadCrumbs from "components/Breadcrumbs";
import FiscalIncentivesBg from "assets/images/fiscalincentives.png";
import { Container } from "components/UI";
import React from "react";
import IntroContainer from "components/IntroContainer";
import { FlipCards } from "components/FlipCards";

const InitiativesProjects = () => {
  const breadcrumbs = [
    { path: "/", label: "Home" },
    { path: "/initiatives-projects", label: "Initiatives & Projects" },
  ];

  const initiativesCards = [
    {
      title: "Major Mining Projects",
      flipContent:
        "Detailed description of the ongoing mining projects in Pakistan.",
      link: "/major-mining",
    },
    {
      title: "Training & Skills Development",
      flipContent:
        "Training programs, skills development workshops, safety courses, and capacity-building initiatives for mining industry workers.",
      link: "/training-skill",
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
              Initiatives & Projects
              <hr className="mt-1 w-32 border-4 border-green-500 rounded-full" />
            </h1>
            <div
              className="font-helvetica font-normal text-[22px] leading-[24px] mt-4"
              style={{ whiteSpace: "pre-line" }}
            >
              The government of Pakistan has undertaken several projects and
              initiatives in the mining sector to promote sustainable
              development, attract investment, enhance productivity, and
              optimize the utilization of the country's mineral resources. These
              projects and initiatives reflect the government's commitment to
              unlocking the potential of the mining sector, fostering
              sustainable development, and contributing to the country's
              socio-economic progress.
            </div>

            <div className="mt-20 flex justify-center">
              <div className="grid grid-cols-2 w-[50%]">
                {initiativesCards.map((item) => (
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
