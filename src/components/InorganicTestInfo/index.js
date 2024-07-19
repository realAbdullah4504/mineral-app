import React from "react";
import inorganic from "assets/images/inorganicTest.png";

const InorganicTestInfo = () => {
  return (
    <div className="flex flex-col mt-[39px] mr-[83px]">
      <div className="flex text-[#009969] text-5xl font-bold">Inorganic</div>
      <div className="flex text-[21px] pt-[30px]">
        Inorganic testing refers to the analysis of inorganic substances that do
        not contain carbon-hydrogen. This type of testing focuses on identifying
        and quantifying inorganic elements and compounds of samples including
        metals and minerals. Geoscience Advance Research Laboratory (GARL) is
        responsible for Inorganic testing. GARL's conduct the testing using
        following methods:
      </div>
      <ul className="list-disc pl-4 text-[21px]">
        <li>Chemical Analysis</li>
        <li>Mineral Identification</li>
        <li>Petrographic Analysis</li>
      </ul>
      <div className="flex text-[#009969] text-5xl font-bold mt-[46px]">
        Minerals & Ores
      </div>
      <div className="flex px-[30px] py-[42px] mt-[10px] mb-[75px]">
        <img src={inorganic} alt="Organic Materials" />
      </div>
      <div className="flex text-5xl font-bold">1. Chemical Analysis</div>
      <div className="flex text-xl mt-8">
        Chemical analysis is the process used to determine the chemical
        composition of a mineral or rock. It involves identifying and
        quantifying the different elements and compounds that make up a mineral.
        This technique encompasses the following methods:
      </div>
      <div className="flex text-xl">
        <ul className="pl-8 list-disc">
          <li>Whole Rock Analysis</li>
          <li>Single Element Analysis</li>
        </ul>
      </div>
      <div className="flex text-[#009969] text-xl font-semibold mt-6 ml-8">
        i. Whole Rock Analysis
      </div>
      <div className="flex text-xl ml-8">
        Whole Rock Analysis is a comprehensive technique used to determine the
        chemical composition of a mineral sample. This analysis provides
        detailed information about the concentrations of major, minor and trace
        elements within the mineral sample, giving insights into its mineralogy,
        formation history and geological process. This method includes the
        following techniques:
      </div>
      <ul className="pl-4 list-disc text-xl ml-12">
        <li>XRF Analysis</li>
        <li>ICP-MS Analysis</li>
      </ul>
      <div className="flex text-[#009969] text-xl font-semibold mt-6 ml-8">
        ii. Single Element Analysis
      </div>
      <div className="flex text-xl ml-8">
        Single Element Analysis is a focused type of chemical analysis that aims
        to identify and quantify a specific element within a mineral sample. It
        helps in detecting contaminants, thus ensuring accurate data necessary
        for quality control and regulatory compliance. The following techniques
        are used under Single Element Analysis:
      </div>
      <ul className="pl-4 list-disc text-xl ml-12">
        <li>Atomic Absorption Spectroscopy (AAS)</li>
        <li>
          Inductively Coupled Plasma Optical Emission Spectroscopy (ICP-OES)
        </li>
        <li>Inductively Coupled Plasma Mass Spectroscopy (ICP-MS)</li>
        <li>X-Ray Fluorescence (XRF)</li>
      </ul>
      <div className="flex text-5xl font-bold mt-[33px]">
        2. Mineral Identification
      </div>
      <div className="flex text-xl mt-8">
        The Mineral Identification process involves a series of steps and tests
        to determine the identity of a mineral sample based on its physical and
        chemical properties including color, streak, luster, hardness and
        density. These tests consist of the following processes:
      </div>
      <div className="flex text-xl">
        <ul className="pl-8 list-disc">
          <li>X-Ray Diffraction Analysis</li>
          <li>Physical parameters</li>
          <li>Scanning Electron Microscopy (SEM)</li>
          <li>Differential Thermal Analysis (DTA)</li>
          <li>Stereoscopy</li>
        </ul>
      </div>
      <div className="flex text-5xl font-bold mt-[33px]">
        3. Petrographic Analysis
      </div>
      <div className="flex text-xl mt-8">
        Petrographic Analysis is a detailed examination of the composition and
        texture of rocks using a petrographic microscope. This technique is
        widely used in mineral and rock analysis to study the mineralogy and
        textural characteristics of the mineral sample. The following techniques
        are used for Petrographic analysis:
      </div>
      <div className="flex text-xl">
        <ul className="pl-8 list-disc">
          <li>Physical parameters</li>
          <li>X-Ray Diffraction Analysis</li>
          <li>Scanning Electron Microscopy (SEM)</li>
          <li>Differential Thermal Analysis (DTA)</li>
          <li>Stereoscopy</li>
        </ul>
      </div>
    </div>
  );
};
export default InorganicTestInfo;
