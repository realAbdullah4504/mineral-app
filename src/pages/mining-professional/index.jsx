import BreadCrumbs from "components/Breadcrumbs";
import { Container } from "components/UI";
import HRProImg from "assets/images/hr-pro.png";
import DataCard from "components/Cards/dataCard";

import React from "react";

const HRPro = () => {
  const breadcrumbs = [
    { path: "/", label: "Home" },
    { path: "/who-is-who", label: "Who is Who" },
    { path: "#", label: "Associations" },
  ];

  const Adddata = {
    headline: "Apply for Registration",
    link: '/registerorganization?orgtype=mp'
  };


  return (
    <Container classes="mt-8 w-[90%]">
      <BreadCrumbs breadcrumbs={breadcrumbs} />
      <div className="flex flex-wrap mt-14">
        <div className="w-full">
          <h1 className="font-ibm-plex-sans font-semibold text-[64px] p-[0px]">
          Mining Professional
            <hr className="mt-1 w-32 border-4 border-green-500 rounded-full" />
          </h1>

          <div className="w-full flex justify-center mt-16">
              <div className="flex flex-wrap justify-center gap-20 p-4">
                <DataCard type={"add"} data={Adddata} />
                <DataCard type={"detail"} data={{headline: "Salman Ahmad"}} />
                <DataCard type={"detail"} data={{headline: "Waqar Ilyas Raja"}} />
                <DataCard type={"detail"} data={{headline: "Chanzaib Sai"}} />
                <DataCard type={"detail"} data={{headline: "Sardar Sarmad"}} />
                <DataCard type={"detail"} data={{headline: "Haji Maula Bakhsh"}} />
                <DataCard type={"detail"} data={{headline: "Toor Khan"}} />
              </div>
            </div>

            <div className="mt-80"></div>
        </div>
      </div>
    </Container>
  );
};

export default HRPro;
