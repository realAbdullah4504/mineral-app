import React from "react";
import FiscalIncentivesBg from "assets/images/fiscalincentives.png";
import { FlipCards } from "components/FlipCards";
import IntroContainer from "components/IntroContainer";
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
  const cpecBreadCRumbItems=[{title:"Home",href:''},{title:"Fiscal Incentive",href:''},{title:"CPEC"}]

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
      <div className="business-investment-container">
   
      <IntroContainer breadCRumbItems={cpecBreadCRumbItems} title={  <h1 ><span  style={{
   
   borderBottom: "5px solid green",
   display: "inline-block",

   borderRadius: "5px",
 }}>Business</span> & Investemnt</h1>}content='  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis ut lorem ultricies sollicitudin.
          Mauris varius eros vitae purus posuere, vel bibendum urna accumsan. Sed feugiat lorem et felis auctor, at
          tempor risus convallis. In hac habitasse platea dictumst. Phasellus semper augue et mi dapibus, sit amet
          sollicitudin Sed feugiat lorem et felis auctor, at temp' height="90%" width="80%" introHeight="280px"></IntroContainer>
       
        <div className="business-investment-container-cards" >
          {businessAndInvestmentcards.map((item) => (
            <FlipCards title={item.title} flip={true} flipContent={item.flipContent} link={item.link? item.link :""}></FlipCards>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BusinessInvestment;
