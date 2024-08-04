import BreadCrumbs from "components/Breadcrumbs";
import { Container } from "components/UI";
import uetImg from "assets/images/UET Lahore.png";
import balochistanImg from "assets/images/Balochistan University of Information.png";
import uopImg from "assets/images/University of Punjab.png";
import uopeshawarImg from "assets/images/University if Peshawar.png";
import nustImg from "assets/images/Nust.png";
import comsatsImg from "assets/images/Comsats.png";
import React from "react";
import DataCard from "components/Cards/dataCard";
import StaticDataCard from "components/Cards/staticDataCard";

const Academia = () => {
  const breadcrumbs = [
    { path: "/", label: "Home" },
    { path: "/who-is-who", label: "Who is Who" },
    { path: "#", label: "Academia & RD" },
  ];

  const Adddata = {
    headline: "Apply for Registration",
    link: '/registerorganization?orgtype=ard'
  };

  return (
    <Container classes="mt-8 w-[90%]">
      <BreadCrumbs breadcrumbs={breadcrumbs} />
      <div className="flex flex-wrap mt-14">
        <div className="w-full">
          <h1 className="font-ibm-plex-sans font-semibold text-[64px] p-[0px]">
          Academia & RD
            <hr className="mt-1 w-32 border-4 border-green-500 rounded-full" />
          </h1>

          <div className="w-full flex justify-center mt-16">
              <div className="flex flex-wrap justify-center gap-20 p-4">
                <DataCard type={"add"} data={Adddata} />
                <StaticDataCard type={"detail"} data={{headline: "University of Engineering and Technology (UET), Lahore", logo: uetImg}} />
                <StaticDataCard type={"detail"} data={{headline: "Balochistan University of Information Technology", logo: balochistanImg}} />
                <StaticDataCard type={"detail"} data={{headline: "University of the Punjab, Lahore", logo: uopImg}} />
                <StaticDataCard type={"detail"} data={{headline: "University of Peshawar", logo: uopeshawarImg}} />
                <StaticDataCard type={"detail"} data={{headline: "National University of Science and Technology (NUST)", logo: nustImg}} />
                <StaticDataCard type={"detail"} data={{headline: "COMSATS University Islamabad (CUI)", logo: comsatsImg}} />
              </div>
            </div>

            <div className="mt-80"></div>
        </div>
      </div>
    </Container>
  );
};

export default Academia;
