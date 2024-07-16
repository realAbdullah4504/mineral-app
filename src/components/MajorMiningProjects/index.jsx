import React from "react";

const Content = [
  {
    id: "option1",
    label: "Reko Diq Copper Project",
    location: "Location: District Chagai, Balochistan",
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
    location: "Location: District Lasbela, Balochistan",
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
    location: "Location: District Chagai, Balochistan",
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
    location: "Location: Tharparkar, Sindh",
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
    location: "Location: Tharparkar, Sindh",
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
    location: "Location: North Waziristan, Khyber Pakhtunkhwa",
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
    <div>
      <h2 className="text-2xl font-semibold">
        <span className="text-green-500">{firstWord}</span>
        {restOfLabel}
      </h2>
      <p className="mt-2">{selectedContent.location}</p>
      <h3 className="mt-4 text-xl font-semibold">Project Overview:</h3>
      <p className="mt-2">{selectedContent.overview}</p>
      <h3 className="mt-4 text-xl font-semibold">Project Details:</h3>
      {selectedContent.subheadings.map((subheading, index) => (
        <div key={index} className="mt-2">
          <h4 className="text-lg font-semibold">{subheading.title}</h4>
          <p>{subheading.detail}</p>
        </div>
      ))}
    </div>
  );
};
