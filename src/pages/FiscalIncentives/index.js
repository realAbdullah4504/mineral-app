import React from "react";
import FiscalIncentivesBg from "assets/images/fiscalincentives.png";
import { FlipCards } from "components/FlipCards";
import IntroContainer from "components/IntroContainer";
function FiscalIncentives() {
    const fiscalIncentivesCards = [
        {
          title: "Mineral Potential of Pakistan",
          flipContent: "   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis ut lorem ultricies .",
        },
        {
          title: "Mineral Potential of Pakistan",
          flipContent: "   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis ut lorem ultricies .",
 
        },
        {
          title: "CPEC",
          flipContent: "   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis ut lorem ultricies .",
                   link:"/fiscal-CPEC"
        },
        {
          title: "Mineral Potential of Pakistan",
          flipContent: "   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis ut lorem ultricies .",
        },
        
    ]
    const cpecBreadCRumbItems=[{title:"Home",href:''},{title:"Fiscal Incentive",href:''},{title:"CPEC"}]
    return   <div className="fiscal-incentivs-intro-bg"
    style={{backgroundImage: `url(${FiscalIncentivesBg})` }}
    >
      <div className="business-investment-container" >

        <IntroContainer breadCRumbItems={cpecBreadCRumbItems} title="Fiscal Incentives" content='  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis ut lorem ultricies sollicitudin.
          Mauris varius eros vitae purus posuere, vel bibendum urna accumsan. Sed feugiat lorem et felis auctor, at
          tempor risus convallis. In hac habitasse platea dictumst. Phasellus semper augue et mi dapibus, sit amet
          sollicitudin Sed feugiat lorem et felis auctor, at temp' height="90%" width="85%" introHeight="280px"></IntroContainer>
        <div className="fiscal-incentives-container-cards"   >
          {fiscalIncentivesCards.map((item) => (
      <FlipCards title={item.title} flip={false} flipContent={item.flipContent}  link={item.link? item.link :""} changebg={true} />
  
          ))}
        </div>
      </div>
    </div>;
}

export default FiscalIncentives;
