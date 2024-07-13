import React from "react";
import BusinessInvestmentBg from "assets/images/businessInvestementStrategyBg.png";
import BusinessInvestmentDevelopment from "assets/images/businessinvestemntstrategydevelopment.png";
import BusinessInvestmentEcoSystem from "assets/images/businessinvestementstrategyecosystem.png";

function MineralDevelopmentStrategy() {
    return <div >
       <div className="mineral-development" style={{
    backgroundImage: `url(${BusinessInvestmentBg})` }}>
      <div  className="mineral-development-title"> Mineral Development Strategies</div>
    
    </div>
<div  className="mineral-developmen-strategy">
        <p >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis ut lorem ultricies sollicitudin.
          Mauris varius eros vitae purus posuere, vel bibendum urna accumsan. Sed feugiat lorem et felis auctor, at
          tempor risus convallis. In hac habitasse platea dictumst. Phasellus semper augue et mi dapibus, sit amet
          sollicitudin Sed feugiat lorem et felis auctor, at tempor risus convallis. In hac habitasse platea dictumst.
          Phasellus semper augue et mi dapibus, sit amet sollicitudin
        </p>
      <h1 >-National Mineral Development Programe -<span style={{ color: '#009969' }}>National Strategy</span>
</h1>

    </div>
    <div  className="mineral-development-strategy-graph" > <img src={BusinessInvestmentDevelopment} alt="Business Investment Development" /></div>
    <div className="mineral-development-ecosystem">
      <h1>EcoSystem Of The Mining Sector


    </h1>
    <p  >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis ut lorem ultricies sollicitudin.
          Mauris varius eros vitae purus posuere, vel bibendum urna accumsan. Sed feugiat lorem et felis auctor, at
          tempor risus convallis. In hac habitasse platea dictumst. Phasellus semper augue et mi dapibus, sit amet
          sollicitudin Sed feugiat lorem et felis auctor, at tempor risus convallis. In hac habitasse platea dictumst.
          Phasellus semper augue et mi dapibus, sit amet sollicitudin
        </p>

        </div>;
        <div className="mineral-development-ecosystem-graph"> <img src={BusinessInvestmentEcoSystem} alt="Business Investment Development"    /></div>
    </div>;
}


export default MineralDevelopmentStrategy;

