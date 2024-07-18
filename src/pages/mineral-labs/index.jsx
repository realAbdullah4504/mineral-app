import BreadCrumbs from "components/Breadcrumbs";
import { Container } from "components/UI";
import MineralLabsImg from "assets/images/mineral-labs.png";
import React from "react";

const MineralLabs = () => {
  const breadcrumbs = [
    { path: "/", label: "Home" },
    { path: "/who-is-who", label: "Who is Who" },
    { path: "#", label: "Mineral Labs" },
  ];

  return (
    <Container classes="mt-8 w-[90%]">
      <BreadCrumbs breadcrumbs={breadcrumbs} />
      <div className="flex flex-wrap mt-14">
        <div className="w-full">
          <h1 className="font-ibm-plex-sans font-semibold text-[64px] p-[0px]">
          Mineral Labs
            <hr className="mt-1 w-32 border-4 border-green-500 rounded-full" />
          </h1>

          <div className="rounded-md mt-5 mb-[13.5px] w-full justify-start flex">
            <img className="w-full object-cover" src={MineralLabsImg} alt="" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MineralLabs;
