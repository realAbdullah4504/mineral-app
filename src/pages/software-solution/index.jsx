import BreadCrumbs from "components/Breadcrumbs";
import { Container } from "components/UI";
import SoftwareSolutionImg from "assets/images/software-solution.png";
import React from "react";

const SoftwareSolution = () => {
  const breadcrumbs = [
    { path: "/", label: "Home" },
    { path: "/who-is-who", label: "Who is Who" },
    { path: "#", label: "Software Solution" },
  ];

  return (
    <Container classes="mt-8 w-[90%]">
      <BreadCrumbs breadcrumbs={breadcrumbs} />
      <div className="flex flex-wrap mt-14">
        <div className="w-full">
          <h1 className="font-ibm-plex-sans font-semibold text-[64px] p-[0px]">
          Software & Solution
            <hr className="mt-1 w-32 border-4 border-green-500 rounded-full" />
          </h1>

          <div className="rounded-md mt-5 mb-[13.5px] w-full justify-start flex">
            <img className="w-full object-cover" src={SoftwareSolutionImg} alt="" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SoftwareSolution;
