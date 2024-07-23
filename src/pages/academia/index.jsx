import BreadCrumbs from "components/Breadcrumbs";
import { Container } from "components/UI";
import AcademiaImg from "assets/images/academia.png";
import React from "react";
import DataCard from "components/Cards/dataCard";

const Academia = () => {
  const breadcrumbs = [
    { path: "/", label: "Home" },
    { path: "/who-is-who", label: "Who is Who" },
    { path: "#", label: "Academia" },
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
          Academia
            <hr className="mt-1 w-32 border-4 border-green-500 rounded-full" />
          </h1>

          <div className="w-full flex justify-center mt-16">
              <div className="flex flex-wrap justify-center gap-20 p-4">
                <DataCard type={"add"} data={Adddata} />
                <DataCard type={"detail"} data={{headline: "University of Engineering and Technology (UET), Lahore"}} />
                <DataCard type={"detail"} data={{headline: "Balochistan University of Information Technology"}} />
                <DataCard type={"detail"} data={{headline: "University of the Punjab, Lahore"}} />
                <DataCard type={"detail"} data={{headline: "University of Peshawar"}} />
                <DataCard type={"detail"} data={{headline: "National University of Science and Technology (NUST)"}} />
                <DataCard type={"detail"} data={{headline: "COMSATS University Islamabad (CUI)"}} />
              </div>
            </div>

            <div className="mt-80"></div>
        </div>
      </div>
    </Container>
  );
};

export default Academia;
