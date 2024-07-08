import React, { useState } from 'react'
import Energy from "../../assets/images/Energy.png"
import gypsum from "../../assets/images/gemstoneClassification.png"
import Dimension from "assets/images/Dimension.png";
import Industrial from "assets/images/Industrial.png";
import Metallic from "assets/images/Metallic.png";
import DimensionIcon from "assets/images/DimensionIcon.png";
import DiamondIcon from "assets/images/DiamondIcon.png";
import EnergyIcon from "assets/images/EnergyIcon.png";
import IndustrialIcon from "assets/images/IndustrialIcon.png";
import MetallicIcon from "assets/images/MetallicIcon.png";
import gemIcon from "../../assets/images/gemIcon.png"
import arrowR from "../../assets/images/arrowR.png"
import arrowL from "../../assets/images/arrowL.png"

export const MineralClassification = () => {
    const [tab, setTab] = useState(["Metallic Minerals", "Energy", "Gemstones", "Dimension Stones", "Industrial Stones"])
    const [activeTab, setActiveTab] = useState(1)
    const [data, setData] = useState([
        {
            "title": "Energy",
            "description":"With the world’s 5th largest coal mine, Pakistan produces 9 million tons of coal every year. This coal is used for power generation in various industries. Moreover, with extensive reserves of 297 billion tons of marble, there are more than 40 types of natural colored marbles.",
            "avatar":Energy,
            "icon":EnergyIcon
        },
        {
            "title":"Gemstones",
            "description":"The mines in Pakistan boast world’s finest quality Aquamarine, emeralds and pink topaz. From the rugged peaks of the Gilgit-Baltistan region to the remote valleys of Khyber Pakhtunkhwa, these mining sites have captivated gemstone enthusiasts, collectors, and geologists alike.",
             "avatar":gypsum,
            "icon":DiamondIcon
        },
        {
            "title":"Dimension Stones",
            "description":"The country boasts a significant presence of dimension stones such as granite, marble, limestone, sandstone, and slate, with varying colors, textures, and patterns. These dimension stones are found in different regions, including the famous marble quarries in Balochistan, Khyber Pakhtunkhwa, and Punjab provinces. ",
             "avatar":Dimension,
            "icon": DimensionIcon
        }
        ,
        {
            "title":"Industrial Stones ",
            "description":"Pakistan is home to a diverse array of industrial stones, including limestone, gypsum, salt, and quartzite, among others. These industrial stones are found in various regions across the country, with significant deposits in areas such as Punjab, Sindh, Khyber Pakhtunkhwa, and Balochistan, making Pakistan a key supplier of raw material for industrial processess. ",
             "avatar":Industrial,
            "icon": IndustrialIcon
        },
        {
            "title":"Metallic Minerals",
            "description":"With the 5th biggest copper & gold mine in the world, Pakistan estimates the annual profit from these mines to be $3.64 billion. With belts of chromite deposits in Balochistan & KPK, Pakistan boasts an estimated reserve of 2.5 million tons, while the Chagai Iron Ore deposits are being produced at 24,000 tons per annum.",
             "avatar":Metallic,
            "icon": MetallicIcon
        }
      ])
    const rightHandler = () => {
        const cloneData = [...data];
        const removedItem = cloneData.shift();
        setData([...cloneData, removedItem])
        if(activeTab == 4){
            setActiveTab(0)
        }else{
            setActiveTab(activeTab+1)
        }
    };
    const leftHandler = () => {
        const cloneData = [...data];
        const removedItem = cloneData.pop();
        setData([removedItem, ...cloneData])
        if(activeTab == 0){
            setActiveTab(4)
        }else{
            setActiveTab(activeTab-1)
        }
    };
    return (
        <div className=' w-full bg-[#e5faee] overflow-hidden py-10 '>
            <div className='font-semibold text-[45px] leading-[60px] text-center font-ibm-plex-sans'>Mineral Classification</div>
            <div className='flex justify-center mt-3'>
                <div className='flex gap-5 w-fit'>
                    {
                        tab.map((data, index) => {
                            return (
                                <span className={`text-[18px] leading-[24px] ${index == activeTab ? 'font-[500] border-b border-b-black' : ''}`}>{data}</span>
                            )
                        })
                    }
                </div>

            </div>
            <div className='flex items-center  mt-12 justify-between gap-10'>
                {
                    data.map((dataSub, index) => {
                        return (
                            <div className={` relative rounded-lg ${index == 1 ? 'grow' : ''}  p-2 ${index > 2 ? 'hidden' : ''} ${index == 0 ? '-ml-[150px]' : index == 2 ? ' -mr-[150px] ':''} `}>
                                <img className='rounded-xl' src={dataSub.avatar} width={index == 1 ? 800 :530} height={index == 1 ? 400 : 351} />
                                <div className={` ${index != 1 ? 'hidden' : ''} bg-white absolute  p-8 mx-12  -mt-[100px]  z-50 rounded-lg`}>
                                    <div className='flex gap-4  items-center font-ibm-plex-sans'>
                                        <img className='' src={dataSub?.icon} width={40} height={40} />
                                        <span className='text-[24px] bg-white font-bold leading-[30px]'>{dataSub.title}</span>
                                    </div>
                                    <div className='mt-3 '>
                                        {dataSub.description}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='flex justify-end items-center gap-8  mb-14 pr-[100px]'>
<span className='flex gap-4 '>
    <span onClick={leftHandler} className='w-[40px] h-[40px] rounded-full bg-[#27AE60]/10 flex justify-center items-center '><img src={arrowL} width={22} height={20}/></span>
    <span onClick={rightHandler} className='w-[40px] h-[40px] rounded-full bg-[#27AE60]/10 flex justify-center items-center'><img src={arrowR} width={22} height={20}/></span>
</span>
<span className='font-ibm-plex-sans'>
    <span className='font-bold text-[32px] leading-[30px] mr-2'>0{activeTab+1}</span> <span className='font-bold text-[20px] leading-[30px] mr-2'>/05</span>
</span>
            </div>
        </div>
    )
}


