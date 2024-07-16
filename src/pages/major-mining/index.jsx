import BreadCrumbs from "components/Breadcrumbs";
import { MajorMiningProjectSection } from "components/MajorMiningProjects";
import { Container } from "components/UI";
import React, { useState } from "react";

const MajorMining = () => {
  const [selectedOption, setSelectedOption] = useState("option1");

  const breadcrumbs = [
    { path: "/", label: "Home" },
    { path: "/initiatives-projects", label: "Initiatives & Projects" },
    { path: "#", label: "Major Mining Projects" },
  ];

  const options = [
    { id: "option1", label: "Reko Diq Copper " },
    { id: "option2", label: "Duddar Lead-Zinc" },
    { id: "option3", label: "Saindak Copper-Gold" },
    { id: "option4", label: "Thar Coal Block-I" },
    { id: "option5", label: "Thar Coal Block-II" },
    { id: "option6", label: "Boya M. Khel Copper " },
  ];

  return (
    <Container classes="mt-8 w-[90%]">
      <BreadCrumbs breadcrumbs={breadcrumbs} />
      <div className="flex flex-wrap mt-[20px]">
        <div className="w-full">
          <h1 className="font-ibm-plex-sans font-semibold text-[64px] p-[0px]">
            Major Mining Projects
            <hr className="mt-1 w-32 border-4 border-green-500 rounded-full" />
          </h1>

          <div className="flex mt-16 w-full mb-20">
            {/* Sidebar */}
            <div className="max-w-60  p-4">
              <ul className="border-l-4 border-spacing-2 rounded border-green-500">
                {options.map((option) => (
                  <li
                    key={option.id}
                    className={`cursor-pointer font-semibold text-lg w-56 p-2 ${
                      selectedOption === option.id ? "bg-green-200" : ""
                    }`}
                    onClick={() => setSelectedOption(option.id)}
                  >
                    {option.label}
                  </li>
                ))}
              </ul>
            </div>

            {/* Content */}
            <div className="px-4 pl-10 w-full">
              <MajorMiningProjectSection selectedOption={selectedOption} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MajorMining;
