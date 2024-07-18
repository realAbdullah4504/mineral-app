import React, { useState } from 'react'
import arrowR from "../../assets/images/arrowR.png"
import arrowL from "../../assets/images/arrowL.png"
import {mineralClassification} from 'utils/constant/common';

export const MineralClassification = () => {
    const [tab, setTab] = useState(["Metallic Minerals", "Dimension Stones", "Gemstones", "Industrial Stones", "Energy"])
    const [activeTab, setActiveTab] = useState(1)
    const [data, setData] = useState(mineralClassification)
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
                                <img className={`rounded-xl ${index == 1 && 'w-full'} `} src={dataSub.avatar} width={index == 1 ? 800 :530} height={index == 1 ? 400 : 351} />
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


