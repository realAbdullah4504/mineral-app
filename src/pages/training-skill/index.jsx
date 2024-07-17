import BreadCrumbs from "components/Breadcrumbs";
import { Container } from "components/UI";
import TrainingCalender from "assets/images/trainingCalender.png";
import React from "react";

const TrainingSkill = () => {
  const breadcrumbs = [
    { path: "/", label: "Home" },
    { path: "/initiatives-projects", label: "Initiatives & Projects" },
    { path: "#", label: "Training & Skill Development" },
  ];

  return (
    <Container classes="mt-8 w-[90%]">
      <BreadCrumbs breadcrumbs={breadcrumbs} />
      <div className="flex flex-wrap mt-[20px]">
        <div className="w-full">
          <h1 className="font-ibm-plex-sans font-semibold text-[64px] p-[0px]">
            Training & Skills Development
            <hr className="mt-1 w-32 border-4 border-green-500 rounded-full" />
          </h1>

          <div className="rounded-md mt-5 mb-[13.5px] w-full justify-start flex">
            <img src={TrainingCalender} alt="" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TrainingSkill;
