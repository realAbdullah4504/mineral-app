import BreadCrumbs from "components/Breadcrumbs";
import { Container } from "components/UI";
import SoftwareSolutionImg from "assets/images/software-solution.png";
import React from "react";
import DataCard from "components/Cards/dataCard";

const SoftwareSolution = () => {
  const breadcrumbs = [
    { path: "/", label: "Home" },
    { path: "/who-is-who", label: "Who is Who" },
    { path: "#", label: "Software Solution" },
  ];

  const Adddata = {
    headline: "Apply for Registration",
    link: '/registerorganization?orgtype=go'
  };

  return (
    <Container classes="mt-8 w-[90%]">
      <BreadCrumbs breadcrumbs={breadcrumbs} />
      <div className="flex flex-wrap mt-14">
        <div className="w-full">
          <h1 className="font-ibm-plex-sans font-semibold text-[64px] p-[0px]">
          Software & Solution
            <hr className="mt-1 w-32 border-4 border-green-500 rounded-full" />
          </h1>

          <div className="w-full flex justify-center mt-16">
              <div className="flex flex-wrap justify-center gap-20 p-4">
                <DataCard type={"add"} data={Adddata} />
                <DataCard type={"detail"} data={{headline: "i3a"}} />
                <DataCard type={"detail"} data={{headline: "Dice"}} />
                <DataCard type={"detail"} data={{headline: "ATI"}} />
                <DataCard type={"detail"} data={{headline: "Urban Vision"}} />
                <DataCard type={"detail"} data={{headline: "MMP (Multi-disciplinary Consultants)"}} />
                <DataCard type={"detail"} data={{headline: "National Engineering Services Pakistan (NESPAK)"}} />
              </div>
            </div>

            <div className="mt-80"></div>
        </div>
      </div>
    </Container>
  );
};

export default SoftwareSolution;
