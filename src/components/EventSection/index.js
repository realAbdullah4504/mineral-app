import { Container, SectionTitle } from "components/UI";
import React from "react";

export const NewsAndEvent = () => {
  return (
    <Container classes="px-[124.56px]">
      <SectionTitle heading="News and Events" />
      <div className="w-full flex gap-4">
      <div class="bg-pakistan-image bg-auto bg-no-repeat text-white w-[754px] rounded-md  flex justify-center items-end min-h-[659.78px] gap-[5.77px]">
        <div className="pb-8">
        <div className="font-semibold text-[40px] leading-[45px] w-[600px] uppercase ">
          Manara Minerals’ team in Pakistan for talks on Reko Diq stake
        </div>
       <div className="">May 6, 2024</div>
       </div>
      </div>
      <div className="h-full ">
      <div className=" bg-china-image bg-cover bg-no-repeat rounded-md mb-[13.5px]  flex items-end w-[431px]  h-[211px]   ">
        <div className="w-[372px] h-full flex items-end relative m-auto text-white">
          <div className="mb-4">
        <div className="font-bold leading-[30px] text-[24px]   flex justify-center   ">
        China, Pakistan agree to strengthen mining cooperation
        </div>
        <div className="text-[11px] leading-[13px]">READ MORE</div>
        </div>
      </div>
      </div>
      <div className=" bg-rectangle-image bg-cover bg-no-repeat rounded-md mb-[13.5px]  flex items-end w-[431px]  h-[211px]   ">
        <div className="w-[372px] h-full flex items-end relative m-auto text-white">
          <div className="mb-4">
        <div className="font-bold leading-[30px] text-[24px]   flex justify-center   ">
        China, Pakistan agree to strengthen mining cooperation
        </div>
        <div className="text-[11px] leading-[13px]">READ MORE</div>
        </div>
      </div>
      </div>
      <div className=" bg-president-image bg-cover bg-no-repeat rounded-md  flex items-end w-[431px]  h-[211px]   ">
        <div className="w-[372px] h-full flex items-end relative m-auto text-white">
          <div className="mb-4">
        <div className="font-bold leading-[30px] text-[24px]   flex justify-center   ">
        China, Pakistan agree to strengthen mining cooperation
        </div>
        <div className="text-[11px] leading-[13px]">READ MORE</div>
        </div>
      </div>
      </div>
      </div>
      </div>
    </Container>
  );
};
