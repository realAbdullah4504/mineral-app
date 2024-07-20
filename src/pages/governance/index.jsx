import BreadCrumbs from "components/Breadcrumbs";
import { Container } from "components/UI";
import FiscalIncentivesBg from "assets/images/fiscalincentives.png";
import { FlipCards } from "components/FlipCards";

import React from "react";

const Governance = () => {
  const breadcrumbs = [
    { path: "/", label: "Home" },
    { path: "/legal-framework", label: "Legal Framework" },
    { path: "#", label: "Governance" },
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
          <div className="w-full">
            <h1 className="font-ibm-plex-sans font-semibold text-[64px] p-[0px]">
              Governance
              <hr className="mt-1 w-32 border-4 border-green-500 rounded-full" />
            </h1>
            <div
              className="font-helvetica font-normal text-[22px] leading-[24px] mt-4"
              style={{ whiteSpace: "pre-line" }}
            >
              Regulatory policies & legislation that govern Pakistan’s mining
              operations
            </div>
            <div className="w-full flex justify-center mt-20">
              <div className="grid grid-cols-2 w-[50%]">
                {/* <CardComponent
                  content={{
                    text: "Institutional Arrangement",
                    url: "",
                    para: "Constitutional structure to legislate mining plans & operations to ensure transparency & regulatory compliance.",
                    color: "#009969",
                  }}
                />
                <CardComponent
                  content={{
                    text: "Policies",
                    url: "/legal-policies",
                    para: ,
                    color: "#009969",
                  }}
                /> */}
                <FlipCards
                  title={"Institutional Arrangement"}
                  flip={true}
                  flipContent={
                    "Constitutional structure to legislate mining plans & operations to ensure transparency & regulatory compliance."
                  }
                  link={"/institutional-arrangement"}
                ></FlipCards>
                <FlipCards
                  title={"Policies"}
                  flip={true}
                  flipContent={
                    "Policies & rules set in place by the Government to guide decision making by industry standards for ensuring sustainable & responsible mining practices."
                  }
                  link={"/legal-policies"}
                ></FlipCards>
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

export default Governance;
