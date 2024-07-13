import React from 'react'
import Evolution from 'assets/images/Evolution.png'

export const FiscalDeveloperIncentive = () => {
    return (
        <>
            <div className='max-w-[1179px] relative m-auto pt-[100px]'>
                <div className='font-ibm-plex-sans font-bold text-[36px] leading-[46px]'>
                    The <span className='text-[#009969]'> Government of Pakistan</span> offers two huge incentives to developers & Zone Enterprises under this act
                </div>
                <div className='max-w-[922px] rounded-xl bg-[#DCEDE9] px-[60px] py-[30px] relative m-auto my-[30px] '>
                    <ul className='list-disc text-[18px] leading-[25px] text-[#40384F] '>
                    <li>One time exemption from all custom duties and taxes for all capital goods imported into Pakistan for development, operation and maintenance</li>
                    <li>Exemption from all taxes on income period of 10 years if started commercial operations by 30th June 2020 for a period of 5 years after aforesaid dat</li>
                    </ul>
                </div>
                <div className='text-[20px] leading-[25px] font-roboto-condensed mt-[20px]'>
                The Board of Investment (BOI) has launched a Special Information System module (SEZMIS) that aims to act as a one-shop stop for investors. The module will enable transparent disposal of zone & enterprise entry applications by online registration, channeling the legal provisions of the SEZ Act & rules.
                </div>
                
            </div>
        <div className='bg-[#DCEDE9] py-[20px] mt-[70px]'>
            <img className='relative m-auto' src={Evolution} width={1140} height={706}/>
        </div>
        <div className='relative m-auto max-w-[1179px] mt-[70px]'>
            <div className='text-[64px] leading-[84px] font-bold font-ibm-plex-sans'>SEZ Leading to Mining <span className='text-[#27AE60]'>Glory</span> </div>
       <div className='text-[18px] leading-[25px] text-[#40384F] mt-[10px] '>
       The implementation of Special Economic Zones (SEZs) in Pakistan is poised to significantly benefit the mining industry in several ways. These benefits stem from a combination of policy incentives, infrastructure development, and regulatory reforms designed to attract investment and enhance productivity in the sector.
       </div>
        </div>
         
        </>
    )
} 

