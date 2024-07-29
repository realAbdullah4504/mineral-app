import BreadCrumbs from "components/Breadcrumbs";
import { Container } from "components/UI";
import SoftwareSolutionImg from "assets/images/software-solution.png";
import i3aImg from "assets/images/i3a-logo.png";
import avImg from "assets/images/av-logo.png";
import mmpImg from "assets/images/MMP.png";
import nespakImg from "assets/images/NESPAK.png";
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
    link: '/registerorganization?orgtype=sse'
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
                <DataCard type={"detail"} data={{headline: "i3a", logo: i3aImg}} />
                <DataCard type={"detail"} data={{headline: "Dice"}} />
                <DataCard type={"detail"} data={{headline: "ATI"}} />
                <DataCard type={"detail"} data={{headline: "Urban Vision", logo: avImg}} />
                <DataCard type={"detail"} data={{headline: "MMP (Multi-disciplinary Consultants)", logo: mmpImg}} />
                <DataCard type={"detail"} data={{headline: "National Engineering Services Pakistan (NESPAK)", logo: nespakImg}} />
              </div>
            </div>

            <div className="mt-80"></div>
        </div>
      </div>
    </Container>
  );
};

export default SoftwareSolution;
