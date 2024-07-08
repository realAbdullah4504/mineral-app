import React from "react";
import {
  MineralClassification ,  
  AvenueForMineralSlider,
  InvestmentOpportunitySection,
  MineralWealthSection,
  MineralWealth
} from "components";

const InvestmentOpportunity= () => {
  return (
    <div className="max-w-[100%]">
      <InvestmentOpportunitySection/>
      <MineralClassification/>
      <MineralWealthSection/>
      <MineralWealth/>
      <AvenueForMineralSlider/>
    </div>
  );
};
export default InvestmentOpportunity;
