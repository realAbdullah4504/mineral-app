import React from "react";
import { Container } from "components/UI";

export const InstitutionalArrangementSection = ({title = "", subTitle = "", description1 = "",subTitle2 = "", description2 = "", avatar=""}) => {
  const [mainTitle, secondTitle] = title.split(" ");
  
  return (
    <Container>
      <div className="flex flex-wrap mt-[20px]">
        <div className="max-w-[100%]">
          <h1 className="font-ibm-plex-sans font-semibold text-[64px] p-[0px]">
            {mainTitle} <span className="text-[#27AE60]">{secondTitle}</span>
          </h1>
          <div className="bg-institutional-arrangement-image object-cover bg-cover bg-no-repeat rounded-md mb-[13.5px] w-full h-[55rem] bg-center">
</div>

          <div className="font-ibm-plex-sans mt-8 font-semibold text-[36px] p-[0px]">
            {subTitle}
          </div>
          <div className="font-helvetica font-normal text-[22px] leading-[25px] mt-4" style={{ whiteSpace: 'pre-line' }}>
            {description1}
          </div>
          <div className="font-ibm-plex-sans mt-7 font-semibold text-[36px] p-[0px]">
            {subTitle2}
          </div>
          <div className="font-helvetica font-normal text-[22px] leading-[25px] mt-4" style={{ whiteSpace: 'pre-line' }}>
            {description2}
          </div>
        </div>
      </div>
    </Container>
  );
};
