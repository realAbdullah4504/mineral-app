import React from "react";
import FiscalIncentivesBg from "assets/images/fiscalincentives.png";
import { FlipCards } from "components/FlipCards";

function BusinessInvestment() {
  const businessAndInvestmentcards = [
    {
      title: "Mineral Potential of Pakistan",
      flipContent: "Pakistan has some of the world's largest mineral reserves, offering significant potential for long-term development.",
    },
    {
      title: "Investment Opportunities",
      flipContent: "The diverse mineral resources in Pakistan offer lucrative opportunities for investors with significant potential returns.",
    },
    {
      title: "Fiscal Incentives",
      flipContent: "The Government of Pakistan has introduced financial incentives, such as tax and custom duty relief, to encourage investment. This section explores these benefits in detail.",
    },
    {
      title: "Mineral Development Strategy",
      flipContent: "Regional & National level development plans to enhance investment in mining sector.",
      link:'/mineral-development-strategy'
    },
    {
      title: "Special Investment Facilitation Council",
      flipContent: "SIFC focuses on investment and privatization in defense, agriculture, minerals, IT and telecommunication, and energy.",
    },
    {
      title: "Applying for Mineral Title",
      flipContent: "Understand the process of applying for a mineral title to start mining.",      
    },
    {
      title: "Development Schemes",
      flipContent: "Government implemented schemes for future planning and development of the mineral sector.",
    },
    {
      title: "Starting a New Business",
      flipContent: "Starting a business in Pakistan has never been easier. Now you can set-up just by following a few steps.",
    },
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
      <div className="business-investment-container">
        {" "}
        <h1 style={{ fontSize: "60px", fontWeight: "600", lineHeight:"70px" }}><span  style={{
   
          borderBottom: "5px solid green",
          display: "inline-block",
   
          borderRadius: "5px",
        }}>Business</span> & Investement</h1>
        <p style={{fontSize: "20px"}}>
        The Minerals and Mining sector of Pakistan has tremendous potential for long term sustainable development. Being a mineral-rich country, Pakistan offers a diverse range of minerals and gemstones, across the country, with massive potential for national and foreign investment. 

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
