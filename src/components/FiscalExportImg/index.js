import React from 'react'
import steps from 'assets/images/Steps.png'

export const FiscalExportImg = () => {
    return (
        <div className='bg-[#F4FBF7] py-[50px] px-5 '>
            <div className=' max-w-[1170px] relative m-auto'>
                <div className='font-ibm-plex-sans font-medium text-[36px] leading-[40px] text-center mb-[50px]'>
                    Fiscal Incentives for EPZs
                </div>
                <div className='flex justify-between  gap-5'>
                    <div className='text-[18px] text-[#40384F] leading-[25px] rounded-xl my-[50px] py-12 px-8 bg-white shadow-md w-[380px] h-fit'>
                        Export Processing Zones (EPZs) can be a game-changer for Pakistan's economy, particularly for the mining sector. By offering duty-free exports, streamlined regulations, and improved infrastructure within designated zones, EPZs create a highly attractive environment for foreign investment. These benefits extend beyond just revenue generation.
                    </div>
                    <div>
                        <img src={steps} width={400} height={600} />
                    </div>
                    <div className=' flex items-center'>
                        <div className=''>
                            <div className='flex gap-5 mb-10'>
                                <div className='bg-[#006D4B] rounded-full h-fit p-3'></div><span>Exemption of all custom duties and taxes on machinery, equipment, and materials</span>
                            </div>
                            <div className='flex gap-5 mb-10'>
                                <div className='bg-[#009969] rounded-full h-fit p-3'></div><span>Freedom from national import regulations & exchange control regulations of Pakistan</span>
                            </div>
                            <div className='flex gap-5 mb-10'>
                                <div className='bg-[#26CE7A] rounded-full h-fit p-3'></div><span>No sales tax on inputs including electricity and gas bills</span>
                            </div>
                            <div className='flex gap-5 '>
                                <div className='bg-[#73EAAF] rounded-full h-fit p-3'></div><span>Access to domestic markets</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


