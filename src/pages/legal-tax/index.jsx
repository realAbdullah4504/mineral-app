import BreadCrumbs from "components/Breadcrumbs";
import { Container } from "components/UI";
import LegalTaxServicesImg from "assets/images/legal-tax.png";
import React from "react";

const LegalTaxServices = () => {
  const breadcrumbs = [
    { path: "/", label: "Home" },
    { path: "/who-is-who", label: "Who is Who" },
    { path: "#", label: "Legal & Tax Services" },
  ];

  return (
    <Container classes="mt-8 w-[90%]">
      <BreadCrumbs breadcrumbs={breadcrumbs} />
      <div className="flex flex-wrap mt-14">
        <div className="w-full">
          <h1 className="font-ibm-plex-sans font-semibold text-[64px] p-[0px]">
          Legal & Tax Services
            <hr className="mt-1 w-32 border-4 border-green-500 rounded-full" />
          </h1>

          <div className="rounded-md mt-5 mb-[13.5px] w-full justify-center flex">
            <img className="w-[80%] object-cover" src={LegalTaxServicesImg} alt="" />
          </div>

          <div className="mt-96"></div>
        </div>
      </div>
    </Container>
  );
};

export default LegalTaxServices;
