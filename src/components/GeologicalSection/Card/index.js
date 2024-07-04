import React from 'react';
import Vector from "../../../assets/images/Vector.svg";

export const Card = () => {
    return (
        <div className="font-ibm-plex-sans bg-san-andreas-fault bg-cover w-[262.08px] h-[410px] rounded-[4px] flex flex-col justify-end items-center gap-[12px] pb-[21px] overflow-hidden relative">
            <div className="absolute inset-0 transition duration-300 ease-in-out opacity-0 hover:opacity-100 bg-black bg-opacity-50 flex text-center">
                <span className="font-[500] w-[80%] text-[16px] leading-[20px] text-white m-auto">
                    Pakistan’s geological formations, shaped by its location on tectonic plates account for the presence of minerals like Emerald in Swat Valley, Rubies in Hunza Valley, gold & copper in Balochistan & coal in Thar.
                </span>
            </div>
            <span className="font-[600] w-[80%] text-[32px] leading-[40px] text-white hover:opacity-0">
                Mineralization
                Zones
            </span>
            <div className="bg-[#27AE60CC] py-[8px] w-[217px] flex gap-[6.24px] rounded-[4px] justify-center">
                <img src={Vector} alt="Vector" />
                <span className="font-[500] text-[16px] leading-[16px] text-white">Potohar Plateau, Punjab</span>
            </div>

        </div>
    );
};