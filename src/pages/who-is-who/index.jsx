import BreadCrumbs from "components/Breadcrumbs";
import FiscalIncentivesBg from "assets/images/fiscalincentives.png";
import { Container } from "components/UI";
import React from "react";
import { FlipCards } from "components/FlipCards";

const WhoIsWho = () => {
  const breadcrumbs = [
    { path: "/", label: "Home" },
    { path: "#", label: "Who is Who" },
  ];

  const whoIsWhoCards = [
    {
      title: "Government Departments",
      flipContent:
        "   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis ut lorem ultricies .",
      link: "/government-departments",
    },
    {
      title: "Mining Professional",
      flipContent:
        "   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis ut lorem ultricies .",
      link: "/mining-professional",
    },
    {
      title: "Drilling Services",
      flipContent:
        "   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis ut lorem ultricies .",
      link: "/drilling-services",
    },
    {
      title: "Mineral Labs",
      flipContent:
        "   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis ut lorem ultricies .",
      link: "/mineral-labs",
    },
    {
      title: "Downstream Industries",
      flipContent:
        "   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis ut lorem ultricies .",
      link: "/downstream-industries",
    },
    {
      title: "Software & Solutions",
      flipContent:
        "   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis ut lorem ultricies .",
      link: "/software-solution",
    },
    {
      title: "Legal & Tax Services",
      flipContent:
        "   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis ut lorem ultricies .",
      link: "/legal-tax",
    },
    {
      title: "Academia",
      flipContent:
        "   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis ut lorem ultricies .",
      link: "/academia",
    },
    {
      title: "Associations",
      flipContent:
        "   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis ut lorem ultricies .",
      link: "/associations",
    },
    
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
