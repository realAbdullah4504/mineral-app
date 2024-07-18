import React from "react";
import { useState } from "react";
import BreadCrumbs from "components/Breadcrumbs";
import { Container } from "components/UI";

import CsrPmdc from "components/CsrPmdc";
import CsrSindh from "components/CsrSindh";
import CsrBoya from "components/CsrBoya";
import CsrFwo from "components/CsrFwo";

const CSRInitiatives = () => {
  const breadcrumbs = [
    { path: "/", label: "Home" },
    { path: "/csr", label: "CSR" },
    { path: "/csr-initiatives", label: "CSR Initiatives" },
  ];

  // Content data for each option
  const contentData = [
    "CSR INITIATIVES BY PMDC",
    "SINDH ENGRO COAL MINING COMPANY",
    "CSR - Boya Muhammad",
    "CSR FWO",
  ];
  const headings = [
    "CSR Initiatives",
    "CSR Initiatives",
    "CSR - Boya Muhammed",
    "CSR By FWO",
  ];
  const [selectedOption, setSelectedOption] = useState(contentData[0]);

  return (
    <div>
      {/* Bread Crumbs */}
      <Container classes="w-[90%]">
        <div className="flex flex-col pt-[43px]">
          <BreadCrumbs breadcrumbs={breadcrumbs} />
          <span className="font-semibold text-[64px] mt-[50px] pb-[80px]">
            CSR Initiatives
          </span>
        </div>
      </Container>
      {/* Secondary Navbar */}
      <div className="flex w-fit bg-[#F4FBF7] p-[10px] max-w-[82.5rem] mx-auto rounded-t-lg mb-[80px]">
        {contentData.map((option) => (
          <button
            key={option}
            onClick={() => setSelectedOption(option)}
            className={`py-[12px] px-[24px] cursor-pointer transition-all rounded-[8px] text-2xl font-semibold ${
              selectedOption === option
                ? "bg-[#27AE60] text-white"
                : "text-black"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      {/* First Option */}
      {selectedOption === contentData[0] && <CsrPmdc />}
      {/* Second Option */}
      {selectedOption === contentData[1] && <CsrSindh />}
      {/* Third Option */}
      {selectedOption === contentData[2] && <CsrBoya />}
      {/* Fourth Option */}
      {selectedOption === contentData[3] && <CsrFwo />}
    </div>
  );
};
export default CSRInitiatives;
