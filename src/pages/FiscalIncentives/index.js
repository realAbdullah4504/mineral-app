import React from "react";
import FiscalIncentivesBg from "assets/images/fiscalincentives.png";
import { FlipCards } from "components/FlipCards";

function FiscalIncentives() {
    const businessAndInvestmentcards = [
        {
          title: "Special Economic Zones",
          flipContent: "   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis ut lorem ultricies .",
        },
        {
          title: "Export Processing Zones",
          flipContent: "   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis ut lorem ultricies .",
        },
        {
          title: "CPEC",
          flipContent: "   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis ut lorem ultricies .",
        },
        {
          title: "Tax Exemptions",
          flipContent: "   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis ut lorem ultricies .",
        },
        
    ]
    return   <div
    style={{
        width: "100%",
        height: "auto",
        backgroundImage: `url(${FiscalIncentivesBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent:"center",
        alignItems:'center'
  
  
      }}
    >
      <div className="business-investment-container">
        {" "}
        <h1 style={{ fontSize: "60px", fontWeight: "600" }}>Fiscal Incentives</h1>
        <p style={{ fontSize: "20px"}}>
        The Government of Pakistan has introduced a number of initiatives and incentives, aimed at facilitating local and foreign investors, collaborators and industrial ventures. Explore how the Government of Pakistan is fostering an enabling environment for the minerals and mining sector of Pakistan

        </p>
        <div className="business-investment-container-cards" style={{ width: "90%",margin:"40px auto 30px auto" }}>
          {businessAndInvestmentcards.map((item) => (
      <FlipCards title={item.title} flip={false} flipContent={item.flipContent} changebg={true} />
  
          ))}
        </div>
      </div>
    </div>;
}

export default FiscalIncentives;
