import React from "react";
import BreadCrumbs from "components/Breadcrumbs";
import { Container } from "components/UI";

const CsrRegulations = () => {
  const breadcrumbs = [
    { path: "/", label: "Home" },
    { path: "csr", label: "CSR" },
    { path: "csr-regulations", label: "CSR Regulations" },
  ];
  return (
    <Container classes="w-[90%]">
      <div className="flex flex-col mb-[465px]">
        <div className="flex mb-[62px] mt-[41px]">
          <BreadCrumbs breadcrumbs={breadcrumbs} />
        </div>
        <div className="flex font-semibold text-[64px]">CSR Regulations</div>
        <div className="flex font-normal text-[22px] mb-[40px]">
          CSR regulations for the mining industry in Pakistan include the
          General Order: SRO 983(I) passed in 2009. This regulation mandates
          that all public companies engaged in mining must provide mandatory
          descriptive and monetary disclosures of their corporate social
          responsibility (CSR) activities in their annual reports. The required
          disclosures cover various topics such as energy conservation,
          environmental protection, business ethics, anti-corruption measures,
          occupational safety and health, and consumer protection. While
          compliance with these CSR regulations is mandatory for public mining
          companies, they can also voluntarily refer to Pakistan’s Securities
          and Exchange Commission’s Corporate Social Responsibility Voluntary
          Guidelines for additional guidance
        </div>
        <button className="rounded-[11.66px] shadow-lg w-[222px] h-[65px] mb-[38px]">
          <span className="text-[#009969] text-xl font-semibold">
            ORDER SRO 983(1)
          </span>
        </button>
      </div>
    </Container>
  );
};

export default CsrRegulations;
