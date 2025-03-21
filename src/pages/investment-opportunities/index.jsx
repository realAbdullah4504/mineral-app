import React from "react";
import InvestmentOpportunities from "assets/images/InvestmentOpportunity.png";
import BreadCrumbs from "components/Breadcrumbs";
import {
  MineralClassification,
  AvenueForMineralSlider,
  InvestmentOpportunitySection,
  MineralWealthSection,
  MineralWealth,
} from "components";
import { Container } from "components/UI";

const InvestmentOpportunity = () => {
  const breadcrumbs = [
    { path: "/", label: "Home" },
    { path: "/business-investment", label: "Business & Investment" },
    { path: "#", label: "Investment Opportunities" },
  ];
  return (
    <Container classes="mt-8 w-[90%]">
      <BreadCrumbs breadcrumbs={breadcrumbs} />
      <InvestmentOpportunitySection
        title="INVESTMENT"
        subTitle="OPPORTUNITIES"
        avatar={InvestmentOpportunities}
        description="Pakistan, with reserves of 92 known minerals, spanning a yearly
      production of 68.52 million metric tons (Ministry of Planning,
      Development & Reform Government of Pakistan) is a lucrative
      destination for mineral exploration & mining, With the world’s 2nd
      largest salt mines, the 7th largest coal reserves and significant
      reserves of copper & gold (SIFC – Pakistan Treasure Trove of
      Minerals), Pakistan is poised to become a mineral power-house. 
      Projects like Reko Diq, Saindak, Duddar Lead-Zinc Project & Thar
      Coalfields are testaments to the vistas of investment in Pakistan."
      />
      <MineralClassification />
      <MineralWealthSection />
      <MineralWealth />
      <AvenueForMineralSlider />
    </Container>
  );
};
export default InvestmentOpportunity;
