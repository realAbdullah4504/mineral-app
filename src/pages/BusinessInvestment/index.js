import React from "react";
import FiscalIncentivesBg from "assets/images/fiscalincentives.png";
import { FlipCards } from "components/FlipCards";

function BusinessInvestment() {
  const businessAndInvestmentcards = [
    {
      title: "Mineral Potential of Pakistan",
      flipContent: "   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis ut lorem ultricies .",
    },
    {
      title: "Mineral Potential of Pakistan",
      flipContent: "   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis ut lorem ultricies .",
    },
    {
      title: "Mineral Potential of Pakistan",
      flipContent: "   Lorem ipsum dohandleClicklor sit amet, consectetur adipiscing elit. Nullam eget felis ut lorem ultricies .",
    },
    {
      title: "Mineral Potential of Pakistan",
      flipContent: "   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis ut lorem ultricies .",
    },
    {
      title: "Mineral Potential of Pakistan",
      flipContent: "   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis ut lorem ultricies .",
    },
    {
      title: "Mineral Development Strategies",
      flipContent: "   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis ut lorem ultricies .",
      link:'/mineral-development-strategy'
    },
    {
      title: "Mineral Potential of Pakistan",
      flipContent: "   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis ut lorem ultricies .",
    },
    {
      title: "Mineral Potential of Pakistan",
      flipContent: "   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis ut lorem ultricies .",
    },
    {
      title: "Mineral Potential of Pakistan",
      flipContent: "   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis ut lorem ultricies .",
    },
  ];
  return (
    <div
      style={{
        width: "100%",
        height: "1250px",
        backgroundImage: `url(${FiscalIncentivesBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="business-investment-container">
        {" "}
        <h1 style={{ fontSize: "60px", fontWeight: "600", lineHeight:"70px" }}><span  style={{
   
          borderBottom: "5px solid green",
          display: "inline-block",
   
          borderRadius: "5px",
        }}>Business</span> & Investemnt</h1>
        <p style={{fontSize: "20px"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis ut lorem ultricies sollicitudin.
          Mauris varius eros vitae purus posuere, vel bibendum urna accumsan. Sed feugiat lorem et felis auctor, at
          tempor risus convallis. In hac habitasse platea dictumst. Phasellus semper augue et mi dapibus, sit amet
          sollicitudin Sed feugiat lorem et felis auctor, at tempor risus convallis. In hac habitasse platea dictumst.
          Phasellus semper augue et mi dapibus, sit amet sollicitudin
        </p>
        <div className="business-investment-container-cards" style={{ width: "70%", margin: "auto ", padding: "30px",margin:"40px auto 30px auto" }}>
          {businessAndInvestmentcards.map((item) => (
            <FlipCards title={item.title} flip={true} flipContent={item.flipContent} link={item.link? item.link :""}></FlipCards>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BusinessInvestment;
