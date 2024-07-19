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
      style={{
        width: "100%",
        height: "auto",
        backgroundImage: `url(${FiscalIncentivesBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container classes="mt-8 w-[90%]">
        <div className="business-investment-container">
          <BreadCrumbs breadcrumbs={breadcrumbs} />
          <IntroContainer
            title={
              <h1>
                <span
                  style={{
                    borderBottom: "5px solid green",
                    display: "inline-block",
                    borderRadius: "5px",
                  }}
                >
                  CSR
                </span>{" "}
              </h1>
            }
            content="Mining companies in Pakistan are regulated by the Government to fulfill their Corporate Social Responsibility for sustainable environmental & social practices. This includes  voluntarily improve the quality of life for employees, local communities, and society at large while minimizing the negative environmental impact of mining activities."
            height="70%"
            width="100%"
            introHeight="280px"
          ></IntroContainer>

          <div className="flex flex-col items-center">
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
