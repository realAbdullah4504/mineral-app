import React from "react";

export const SectionTitle = ({ heading = "No title" }) => {
  return (
    <div className="font-roboto-condensed font-[500] text-[46.73px] leading-[54.76px] py-[24.72px]">
      {heading}
    </div>
  );
};
