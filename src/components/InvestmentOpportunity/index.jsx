import React from "react";
import { Container } from "components/UI";
import InvestmentOpportunity from "assets/images/InvestmentOpportunity.png";

export const InvestmentOpportunitySection = () => {
  return (
    <Container>
      <div className="flex flex-wrap ml-10 mt-[20px]">
        <div className="max-w-[682px]">
          <h1 className="font-ibm-plex-sans font-semibold  text-[64px] p-[0px]">
            INVESTMENT
          </h1>
          <h1 className="font-ibm-plex-sans font-semibold text-[64px] p-[0px]  text-[#27AE60]">
            OPPORTUNITIES
          </h1>
          <div className="font-ibm-plex-sans font-[400px] text-[18px] leading-[25px]">
            Pakistan, with reserves of 92 known minerals, spanning a yearly
            production of 68.52 million metric tons (Ministry of Planning,
            Development & Reform Government of Pakistan) is a lucrative
            destination for mineral exploration & mining, With the world’s 2nd
            largest salt mines, the 7th largest coal reserves and significant
            reserves of copper & gold (SIFC – Pakistan Treasure Trove of
            Minerals), Pakistan is poised to become a mineral power-house. 
            Projects like Reko Diq, Saindak, Duddar Lead-Zinc Project & Thar
            Coalfields are testaments to the vistas of investment in Pakistan.
          </div>
          <a href="#" className="learn-more">
            Learn More
          </a>
        </div>
        <div className="ml-20 mb-10">
          <img
            src={InvestmentOpportunity}
            alt="Investment opportunities"
            style={{ width: "100%", height: "493px" }}
          />
        </div>
      </div>
    </Container>
  );
};
