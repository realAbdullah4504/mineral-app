import React from "react";
import organicTest from "assets/images/organicTest.png";

const OrganicTestInfo = () => {
  return (
    <div className="flex flex-col mt-[39px] mr-[83px]">
      <div className="flex text-[#009969] text-5xl font-bold">Organic</div>
      <div className="flex text-[21px] pt-[30px]">
        Organic testing refers to the analysis of organic compounds containing
        carbon. This test focuses on identifying organic substances in a sample
        including pollutants, nutrients and natural products. Organic compounds
        include petroleum and natural gas, which are the main components of
        fossil fuels. Organic testing can be categorized into three main
        instrumental methods used to find the identity of organic compounds
      </div>
      <ul className="list-disc pl-4 text-[21px]">
        <li>Infrared Spectroscopy</li>
        <li>Mass Spectrometry</li>
        <li>Nuclear Magnetic Resonance Spectroscopy</li>
      </ul>
      <div className="flex px-[30px] py-[42px] bg-[#6CF4C4] bg-opacity-20 mt-[32px] mb-[75px]">
        <img src={organicTest} alt="Organic Materials" />
      </div>
    </div>
  );
};
export default OrganicTestInfo;
