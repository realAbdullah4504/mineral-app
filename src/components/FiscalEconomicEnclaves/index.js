import React from 'react'
import  PakistanMap  from 'assets/images/PakistanMap.png'

export const FiscalEconomicEnclaves = () => {
  return (
    <>
    <div className='mt-[50px] '>
    <div className='font-ibm-plex-sans font-[600] text-[34px] leading-[44px] text-[#009969] bg-[#DCEDE9] rounded-md py-3 px-2 w-fit relative m-auto'>Economic Enclaves along the Pakistan-China Corridor</div>
    <div style={{background: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #E8FFF2 66.9%)"
}} className='mt-[70px] pb-8 '>
        <img className='relative m-auto' src={PakistanMap} width={1195} height={699}/>
    </div>
    </div>
    </>
  )
}

 

