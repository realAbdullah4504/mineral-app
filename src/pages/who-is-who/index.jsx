import BreadCrumbs from "components/Breadcrumbs";
import FiscalIncentivesBg from "assets/images/fiscalincentives.png";
import { Container } from "components/UI";
import React from "react";
import { FlipCards } from "components/FlipCards";
import { whoIsWhoCards } from "utils/constant/common";

const WhoIsWho = () => {
  const breadcrumbs = [
    { path: "/", label: "Home" },
    { path: "#", label: "Who is Who" },
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
              Who is Who
              <hr className="mt-1 w-32 border-4 border-green-500 rounded-full" />
            </h1>
            <div
              className="font-helvetica font-normal text-[22px] leading-[24px] mt-4"
              style={{ whiteSpace: "pre-line" }}
            >
              Directory of essential institutes and personnel related to the
              mining industry
            </div>

            <div className="mt-20 flex justify-center">
              <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {whoIsWhoCards.map((item, index) => (
                  <FlipCards
                    key={index}
                    title={item.title}
                    flip={false}
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

export default WhoIsWho;
