import React from "react";

export const NewsAndEvent = () => {
  return (
    <div className="max-w-[83%] m-auto border border-solid border-red">
      <div className="max-w-5xl font-roboto-condensed font-bold text-[46.73px] leading-[54.76px] uppercase">
        News and Events
      </div>
      <div class="flex content-evenly">
        <div className="bg-pakistan-image max-w-[750px] h-[659px]  text-white">
          <div className="max-w-[673px] font-roboto-condensed font-bold text-[46.73px] leading-[54.76px] uppercase">
            Manara Minerals’ team in Pakistan for talks on Reko Diq stake
          </div>
        </div>
        <div className="flex-col ml-[10px]">
          <div className="bg-china-image max-w-[431px] h-[211px] text-white ">
            <div className="max-w-[372.7px] font-roboto-condensed font-[700px] text-[24px] leading-[30px] uppercase">
              China, Pakistan agree to strengthen mining cooperation
            </div>
          </div>
          <div className="bg-rectangle-image max-w-[431px] h-[211px] text-white mt-[12px]">
            China, Pakistan agree to strengthen mining cooperation
          </div>
          <div className="bg-rectangle-image max-w-[431px] h-[211px] text-white mt-[12px]">
            China, Pakistan agree to strengthen mining cooperation
          </div>
        </div>
      </div>
    </div>
  );
};
