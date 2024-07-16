import React from "react";
import Copper from "assets/images/copperProject.png";
import LeadZinc from "assets/images/leadZinc.png";
import CopperGold from "assets/images/copperGold.png";
import TharCoal from "assets/images/tharCoal.png";
import TharCoal2 from "assets/images/tharCoal2.png";
import KhelCopper from "assets/images/khelCopper.png";

const Content = [
  {
    id: "option1",
    label: "Reko Diq Copper Project",
    location: "District Chagai, Balochistan",
    img: Copper,
    overview:
      "Considered one of the world's largest undeveloped copper and gold deposits, the Reko Diq project is currently under development by the Reko-Diq Mining Company. It has the potential to significantly boost Pakistan's mineral reserves and economic growth.",
    subheadings: [
      {
        title: "Development Status",
        detail:
          "The project is in the development phase, with significant progress made in geological surveys and feasibility studies.",
      },
      {
        title: "Economic Impact",
        detail:
          "Expected to contribute significantly to the local and national economy through job creation and mineral exports.",
      },
    ],
  },
  {
    id: "option2",
    label: "Duddar Lead-Zinc Project",
    location: "District Lasbela, Balochistan",
    img: LeadZinc,
    overview:
      "The Duddar project focuses on lead and zinc extraction, playing a crucial role in meeting Pakistan's metal needs and contributing to the local economy.",
    subheadings: [
      {
        title: "Production Capacity",
        detail:
          "The project has an estimated production capacity of 100,000 tons of lead and zinc annually.",
      },
      {
        title: "Environmental Measures",
        detail:
          "Stringent environmental protection measures are in place to minimize the impact on the surrounding ecosystem.",
      },
    ],
  },
  {
    id: "option3",
    label: "Saindak Copper Gold Project",
    location: "District Chagai, Balochistan",
    img: CopperGold,
    overview:
      "The Saindak project has been operational since the early 2000s, producing copper, gold, and silver, significantly contributing to Pakistan's mineral exports.",
    subheadings: [
      {
        title: "Operational History",
        detail:
          "Operational since the early 2000s, with consistent production of copper, gold, and silver.",
      },
      {
        title: "Exports",
        detail:
          "A major contributor to Pakistan's mineral exports, providing significant revenue to the national economy.",
      },
    ],
  },
  {
    id: "option4",
    label: "Thar Coal Block-I (Sino-Sindh Resources Limited)",
    location: "Tharparkar, Sindh",
    img: TharCoal,
    overview:
      "Thar Coal Block-I aims to harness the vast coal reserves of Tharparkar, providing a sustainable energy source and supporting Pakistan's energy security.",
    subheadings: [
      {
        title: "Energy Production",
        detail:
          "Expected to produce over 1,320 MW of electricity, significantly contributing to Pakistan's energy grid.",
      },
      {
        title: "Sustainability",
        detail:
          "Focuses on sustainable mining practices to minimize environmental impact and ensure long-term viability.",
      },
    ],
  },
  {
    id: "option5",
    label: "Thar Coal Block-II (Sindh Engro Coal Mining Company)",
    location: "Tharparkar, Sindh",
    img: TharCoal2,
    overview:
      "Thar Coal Block-II is a joint venture to develop coal mines and power plants, addressing the energy needs of Pakistan and fostering economic development in the region.",
    subheadings: [
      {
        title: "Joint Venture",
        detail:
          "A collaborative effort between the Sindh government and Engro Corporation to develop coal resources.",
      },
      {
        title: "Economic Benefits",
        detail:
          "Anticipated to generate significant economic benefits through job creation and energy production.",
      },
    ],
  },
  {
    id: "option6",
    label: "Boya Muhammad Khel Copper Project",
    location: "North Waziristan, Khyber Pakhtunkhwa",
    img: KhelCopper,
    overview:
      "The Boya Muhammad Khel project is focused on copper extraction, with the potential to enhance the local economy and contribute to Pakistan's mineral output.",
    subheadings: [
      {
        title: "Resource Potential",
        detail:
          "Potentially rich in copper deposits, with ongoing exploration to determine the full extent of the resource.",
      },
      {
        title: "Local Development",
        detail:
          "Aims to enhance local development through infrastructure improvements and job opportunities.",
      },
    ],
  },
];

export const MajorMiningProjectSection = ({ selectedOption }) => {
  const selectedContent = Content.find((item) => item.id === selectedOption);

  if (!selectedContent) {
    return <div>Select an option</div>;
  }

  const firstSpaceIndex = selectedContent.label.indexOf(" ");
  const firstWord = selectedContent.label.substring(0, firstSpaceIndex);
  const restOfLabel = selectedContent.label.substring(firstSpaceIndex);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between">
      <div className="w-[70%] flex flex-col justify-between">
          <div>
            <h2 className="text-[60px] font-semibold font-ibm-plex-sans leading-[78px]">
              <span className="text-green-500">{firstWord}</span>
              {restOfLabel}
            </h2>
            <p className="mt-6 font-ibm-plex-sans font-normal text-[22px] leading-[28px]">
              Location: <strong>{selectedContent.location}</strong>
            </p>
          </div>
          <h3 className="text-xl font-semibold">Project Overview:</h3>
        </div>

        <div className="w-[30%] flex justify-end">
          <img
            src={selectedContent.img}
            alt={selectedContent.label}
            className="w-60 h-56 object-cover rounded" 
          />
        </div>
      </div>
      <div>
        <p className="mt-2">{selectedContent.overview}</p>
        <h3 className="mt-4 text-[33px] leading-[33px] font-medium">Project Details:</h3>
        {selectedContent.subheadings.map((subheading, index) => (
          <div key={index} className="mt-2">
            <h4 className="text-lg font-semibold">{subheading.title}</h4>
            <p>{subheading.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
