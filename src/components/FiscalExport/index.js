import React from 'react'
import exportProcess from "assets/images/exportPrccess.png"
import BreadCrumbs from 'components/Breadcrumbs';

export const FiscalExport = () => {
    const breadcrumbs = [
        { path: '/', label: 'Home' },
        { path: '/business-investment', label: 'Business & Investment' },
        { path: '/fiscal-incentives', label: 'Fiscal Incentives' },
        { path: '#', label: 'Export Processing Zones' },
      ];
    return (
        <>
         <div className=' lg:max-w-[1440px] w-[90%] mt-[50px] relative m-auto '>
        <BreadCrumbs breadcrumbs={breadcrumbs} />

        </div>
        <div className='max-w-[1170px] relative m-auto'>
            {/* <div className='mt-[50px]'>
            <BreadCrumbs breadcrumbs={breadcrumbs} />

            </div> */}

            <div className='flex  gap-8 mt-[50px] px-5 mb-[50px] '>

                <div className='max-w-[652px]'>
                    <div className='text-[64px] leading-[83px] font-ibm-plex-sans font-[700]'>
                        Export Processing <span className='text-[#27AE60]'>Zones</span>
                    </div>
                    <div className='text-[18px] leading-[25px]'>
                        Export Processing Zones (EPZs) in Pakistan are designated areas established by the government to promote exports and attract foreign investment. The Pakistan Export Processing Zone Authority (EPZA) is the autonomous government body responsible for organizing, creating, and managing these EPZs across the country. The goal of EPZs is to accelerate industrialization, enhance exports, create jobs, bring in new technology, and attract foreign investment by providing an enabling environment for export-oriented businesses.
                    </div>
                </div>
                <div className=' '>
                    <img src={exportProcess} width={'480px'} height={'400px'} />
                </div>
            </div>
            </div>
        </>
    )
}


