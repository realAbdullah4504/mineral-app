import React from 'react'
import royaltiesTable from 'assets/images/royaltiesTable.png'

export const RoyaltiesComp = () => {
    return (
        <>
            <div className='max-w-[1170px] relative m-auto px-5 mb-[170px]'>
                <div className='mt-[50px]'>
                    <div className='title font-ibm-plex-sans flex'>
                        <span className=''>Royalties<div className='py-[3px] rounded bg-[#009969] w-[120px]'></div> </span> 
                    </div>
                    <div className='text-[22px] leading-[24px] text-[#40384F] my-[30px]'>
                    Rate of royalty for minerals will be determined by respective government from time to time and changes will be notified to other provinces/federating units and the Federal Government.
                    </div>
                    <div>
                        <img src={royaltiesTable}/>
                    </div>
                </div>
            </div>
        </>
    )
}


