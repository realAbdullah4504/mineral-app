import { Container, SectionTitle } from "components/UI";
import React from "react";
import arrowRight from '../../assets/images/arrowRight.png'

export const NewsAndEvent = () => {
  return (
    <Container classes="px-[124.56px]">
      <SectionTitle heading="News and Events" />
      <div className="w-full flex gap-4">
      <div class="bg-pakistan-image bg-auto bg-no-repeat text-white w-[754px] rounded-md  flex justify-center items-end min-h-[659.78px] gap-[5.77px]">
        <div className="pb-8">
        <div className="font-semibold text-[40px] leading-[45px] w-[600px] uppercase ">
        PM invites Chinese firm to invest in Pakistan mining sector seeking to boost foreign investment
        </div>
       <div className="">May 17, 2024</div>
       </div>
      </div>
      <div className="h-full ">
      <div className=" bg-china-image bg-cover bg-no-repeat rounded-md mb-[13.5px]  flex items-end w-[431px]  h-[211px]   ">
        <div className="w-[372px] h-full flex items-end relative m-auto text-white">
          <div className="mb-4">
        <div className="font-bold leading-[30px] text-[24px]   flex justify-center   ">
        PM for steps to grant industrial status to gems, precious stones sector
        </div>
        <div className="text-[11px] flex gap-2 mt-2 leading-[13px]"><span>READ MORE</span> <img src={arrowRight} width={'12.67px'} height={'12.67px'}/></div>
        </div>
      </div>
      </div>
      <div className=" bg-rectangle-image bg-cover bg-no-repeat rounded-md mb-[13.5px]  flex items-end w-[431px]  h-[211px]   ">
        <div className="w-[372px] h-full flex items-end relative m-auto text-white">
          <div className="mb-4">
        <div className="font-bold leading-[30px] text-[24px]   flex justify-center   ">
        Pakistan eyes Chinese collaboration to revitalize Gemstone Sector : Dr Nawaz Ahmed Virk, DG Minerals
        </div>
        <div className="text-[11px] flex gap-2 mt-2 leading-[13px]"><span>READ MORE</span> <img src={arrowRight} width={'12.67px'} height={'12.67px'}/></div>
        </div>
      </div>
      </div>
      <div className=" bg-president-image bg-cover bg-no-repeat rounded-md  flex items-end w-[431px]  h-[211px]   ">
        <div className="w-[372px] h-full flex items-end relative m-auto text-white">
          <div className="mb-4">
        <div className="font-bold leading-[30px] text-[24px]   flex justify-center   ">
        CEO AsiaPak, DAEWOO Express Shaheryar Chishty signs MOUs with Chinese firms on Thar Coal Gasification, Electric Bus Manufacturing
        </div>
        <div className="text-[11px] flex gap-2 mt-2 leading-[13px]"><span>READ MORE</span> <img src={arrowRight} width={'12.67px'} height={'12.67px'}/></div>
        </div>
      </div>
      </div>
      </div>
      </div>
    </Container>
  );
};
