import React from "react";
import FiscalIncentivesBg from "assets/images/fiscalincentives.png";
import { FlipCards } from "components/FlipCards";

function FiscalIncentives() {
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
          flipContent: "   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis ut lorem ultricies .",
        },
        {
          title: "Mineral Potential of Pakistan",
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis ut lorem ultricies sollicitudin.
          Mauris varius eros vitae purus posuere, vel bibendum urna accumsan. Sed feugiat lorem et felis auctor, at
          tempor risus convallis. In hac habitasse platea dictumst. Phasellus semper augue et mi dapibus, sit amet
          sollicitudin Sed feugiat lorem et felis auctor, at temp
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
