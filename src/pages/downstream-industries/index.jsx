import BreadCrumbs from "components/Breadcrumbs";
import { Container } from "components/UI";
import bmeImg from "assets/images/Bolan Mining Enterprise.png";
import oilIndustriesImg from "assets/images/Oil Industries Pakistan.png";
import luckyCementImg from "assets/images/Lucky Cement.png";
import askariCementImg from "assets/images/Askari Cement.png";
import attockCementImg from "assets/images/Attock Cement.png";
import pioneerCementImg from "assets/images/pioneer_cement_logo.png";
import React from "react";
import DataCard from "components/Cards/dataCard";

const DownstreamIndustries = () => {
  const breadcrumbs = [
    { path: "/", label: "Home" },
    { path: "/who-is-who", label: "Who is Who" },
    { path: "#", label: "Downstream Industries" },
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
          Downstream Industries
            <hr className="mt-1 w-32 border-4 border-green-500 rounded-full" />
          </h1>

          <div className="w-full flex justify-center mt-16">
              <div className="flex flex-wrap justify-center gap-20 p-4">
                <DataCard type={"add"} data={Adddata} />
                <DataCard type={"detail"} data={{headline: "Bolan Mining Enterprises (BME)", logo: bmeImg}} />
                <DataCard type={"detail"} data={{headline: "Oil Industries Pakistan Limited", logo: oilIndustriesImg}} />
                <DataCard type={"detail"} data={{headline: "Lucky Cement Limited", logo: luckyCementImg}} />
                <DataCard type={"detail"} data={{headline: "Askari Cement Limited", logo: askariCementImg}} />
                <DataCard type={"detail"} data={{headline: "Attock Cement Pakistan Limited", logo: attockCementImg}} />
                <DataCard type={"detail"} data={{headline: "Pioneer Cement Limited", logo: pioneerCementImg}} />
              </div>
            </div>

            <div className="mt-80"></div>
        </div>
      </div>
    </Container>
  );
};

export default DownstreamIndustries;
