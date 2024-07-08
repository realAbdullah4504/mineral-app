import React from "react";
import {
  MineralClassification ,  
  AvenueForMineralSlider,
  InvestmentOpportunitySection,
  MineralWealthSection
} from "components";

const InvestmentOpportunity= () => {
  return (
    <div className="max-w-[100%]">
      <InvestmentOpportunitySection/>
      <MineralClassification/>
      <MineralWealthSection/>
      <AvenueForMineralSlider/>
    </div>
  );
};
export default InvestmentOpportunity;
