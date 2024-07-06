import React from "react";
import Map from 'assets/images/Map.png';
export const GisMineSection = () => {
  return (
    <div className="m-auto">
      <div className="max-w-8xl font-roboto-condensed font-bold text-[46.73px] leading-[54.76px] uppercase ml-[120px]">
        GIS Mines & Mineral Portal
      </div>
      <div className="max-w-7xl m-auto">
        <img className="mt-[25px]" src={Map} width={"100%"} />
      </div>
    </div>
  );
};
