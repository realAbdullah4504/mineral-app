import React from "react";
import FiscalIncentivesBg from "assets/images/fiscalincentives.png";
import { FlipCards } from "components/FlipCards";
import IntroContainer from "components/IntroContainer";
import BreadCrumbs from "components/Breadcrumbs";
import { Container } from "components/UI";

function Csr() {
  const csrCards = [
    {
      title: "CSR Regulations",
      flipContent:
        "Laws and guidelines to define the responsibilities of mining companies regarding their social, environmental & ethical impact.",
      link: "/csr-regulations",
    },
    {
      title: "Success Stories",
      flipContent:
        "Successful mining initiatives that have contributed towards the development of mining sector",
      link: "/csr-success-stories",
    },
    {
      title: "Community Engagement",
      flipContent: "Share your comments and feedback.",
      link: "/csr-community",
    },
    {
      title: "CSR Initiatives",
      flipContent:
        "CSR activities implemented by mining companies, addressing social, environmental & ethical concerns.",
      link: "/csr-initiatives",
    },
  ];
  const breadcrumbs = [
    { path: "/", label: "Home" },
    { path: "csr", label: "CSR" },
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
          <div>
            <h1 className="font-ibm-plex-sans font-semibold text-[64px] p-[0px]">
              CSR
              <hr className="mt-1 w-32 border-4 border-green-500 rounded-full" />
            </h1>
            <div
              className="font-helvetica font-normal text-[22px] leading-[24px] mt-4"
              style={{ whiteSpace: "pre-line" }}
            >
              Mining companies in Pakistan are regulated by the Government to
              fulfill their Corporate Social Responsibility for sustainable
              environmental & social practices. This includes  voluntarily
              improve the quality of life for employees, local communities, and
              society at large while minimizing the negative environmental
              impact of mining activities.
            </div>
          </div>
          <div className="mt-20 flex flex-col items-center">
            <div className="flex w-[900px] mb-[50px]">
              {csrCards.slice(0, 2).map((item) => (
                <FlipCards
                  title={item.title}
                  flip={true}
                  flipContent={item.flipContent}
                  link={item.link ? item.link : ""}
                ></FlipCards>
              ))}
            </div>
            <div className="flex w-[900px] mb-[80px]">
              {csrCards.slice(2, 4).map((item) => (
                <FlipCards
                  title={item.title}
                  flip={true}
                  flipContent={item.flipContent}
                  link={item.link ? item.link : ""}
                ></FlipCards>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Csr;
