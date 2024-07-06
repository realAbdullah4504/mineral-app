import React from "react";
import Vector from "../../../assets/images/Vector.svg";
import styles from "./Card.module.css"; // Assuming your module CSS file is named Card.module.css

export const Card = ({ image }) => {
  return (
    <div
      className={`flip-card ${styles.flipCard} w-[262.08px] h-[410px] perspective-1000`}
    >
      <div
        className={`flip-card-inner ${styles.flipCardInner} w-full rounded-[4px] transition-transform duration-300 transform-style-preserve-3d`}
      >
        <div
          className={`flip-card-front ${styles.flipCardFront} absolute w-full backface-hidden bg-cover ${image} font-ibm-plex-sans rounded-[4px] flex flex-col justify-end items-center gap-[12px] pb-[21px] overflow-hidden`}
        >
          <span className="font-[600] w-[80%] text-[32px] leading-[40px] text-white">
            Mineralization Zones
          </span>
          <div className="bg-[#27AE60CC] py-[8px] w-[217px] flex gap-[6.24px] rounded-[4px] justify-center">
            <img src={Vector} alt="Vector" />
            <span className="font-[500] text-[16px] leading-[16px] text-white">
              Potohar Plateau, Punjab
            </span>
          </div>
        </div>
        <div
          className={`flip-card-back ${styles.flipCardBack} relative ${image} absolute w-full backface-hidden bg-black bg-opacity-50 flex items-center justify-center rounded-[4px] transform rotate-y-0`}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <span className="font-[500] w-[80%] text-[16px] leading-[20px] text-white">
              Pakistan's geological formations, shaped by its location on
              tectonic plates account for the presence of minerals like Emerald
              in Swat Valley, Rubies in Hunza Valley, gold & copper in
              Balochistan & coal in Thar.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
