import BreadCrumbs from "components/Breadcrumbs";
import { Container } from "components/UI";
import orrImg from "assets/images/Orr, Dignam & Co.png";
import kmpgImg from "assets/images/KPMG.png";
import React from "react";
import DataCard from "components/Cards/dataCard";
import StaticDataCard from "components/Cards/staticDataCard";

const LegalTaxServices = () => {
  const breadcrumbs = [
    { path: "/", label: "Home" },
    { path: "/who-is-who", label: "Who is Who" },
    { path: "#", label: "Legal & Tax Services" },
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
          Legal & Tax Services
            <hr className="mt-1 w-32 border-4 border-green-500 rounded-full" />
          </h1>

          <div className="w-full flex justify-center mt-16">
              <div className="flex flex-wrap justify-center gap-20 p-4">
                <DataCard type={"add"} data={Adddata} />
                <StaticDataCard type={"detail"} data={{headline: "Orr, Digman & Co. Islamabad", logo: orrImg }} />
                <StaticDataCard type={"detail"} data={{headline: "KPMG Pakistan", logo: kmpgImg }} />
              </div>
            </div>

            <div className="mt-80"></div>
        </div>
      </div>
    </Container>
  );
};

export default LegalTaxServices;
