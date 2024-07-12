import React from "react";
import { Container } from "components/UI";


export const InvestmentOpportunitySection = ({title = "", subTitle = "", description = "", avatar=""}) => {
  return (
    <Container>
      <div className="flex flex-wrap ml-10 mt-[20px]">
        <div className="max-w-[682px]">
          <h1 className="font-ibm-plex-sans font-semibold  text-[64px] p-[0px]">
            {title}
          </h1>
          <h1 className="font-ibm-plex-sans font-semibold text-[64px] p-[0px]  text-[#27AE60]">
            {subTitle}
          </h1>
          <div className="font-ibm-plex-sans font-[400px] text-[18px] leading-[25px]">
            {description}
          </div>
          <a href="#" className="learn-more">
            Learn More
          </a>
        </div>
        <div className="ml-20 mb-10">
          {
            avatar? 
            <img
              src={avatar}
              alt="Investment opportunities"
              style={{ width: "100%", height: "493px" }}
            /> : ""
          }
        </div>
      </div>
    </Container>
  );
};
