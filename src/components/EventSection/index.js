import { Container, SectionTitle } from "components/UI";
import React from "react";

export const NewsAndEvent = () => {
  return (
    <Container classes="px-[124.56px]">
      <SectionTitle heading="News and Events" />
      <div class="bg-pakistan-image bg-auto bg-no-repeat text-white flex min-h-[659.78px] gap-[5.77px]">
        <div className="font-bold text-[46.73px] leading-[54.76px] uppercase">
          Manara Minerals’ team in Pakistan for talks on Reko Diq stake
        </div>
        {/* <div className="">
          <div className="bg-china-image max-w-[431px] h-[211px] text-white ">
            <div className="max-w-[372.7px] font-roboto-condensed font-[700px] text-[24px] leading-[30px] uppercase">
              China, Pakistan agree to strengthen mining cooperation
            </div>
          </div> */}
        {/* <div className="bg-rectangle-image max-w-[431px] h-[211px] text-white mt-[12px]">
            China, Pakistan agree to strengthen mining cooperation
          </div>
          <div className="bg-rectangle-image max-w-[431px] h-[211px] text-white mt-[12px]">
            China, Pakistan agree to strengthen mining cooperation
          </div> */}
        {/* </div> */}
      </div>
    </Container>
  );
};
