import React, { useState } from 'react'
import rightarrow from 'assets/images/rightarrow.png'
import leftarrow from 'assets/images/leftarrow.png'

export const FiscalExportTable = () => {
    const [list, setList] = useState([
        {
            title: 'Duddar EPZ',
            discretion: 'Duddar EPZ is a lead and zinc mining project started in 2009. The project is developed by Messrs MRDL which is a subsidiary of China Metallurgical Construction Corporation (MCC). This project was valued at US $30.894 million in 2019-20 while the cumulative export is US $201.578.',
            listing: [
                {
                    title: 'EPZ  Notified on',
                    discretion: 'May 12, 2004, Revised on May 12, 2016, Extended to 2035'
                }
                ,
                {
                    title: 'Location',
                    discretion: 'District Lasbella, Balochistan'
                }
                ,
                {
                    title: 'Leased to',
                    discretion: 'MCC HUAYE Duddar Mining Company'
                }
                ,
                {
                    title: 'Land/Zone Area',
                    discretion: '1500 Acres'
                },
                {
                    title: 'Project Stakeholder',
                    discretion: 'Ministry PNR Govt. of Balochistan along with MCC HDM Company'
                }
                ,
                {
                    title: 'Incentives',
                    discretion: '100% Import/Export'
                },
                {
                    title: 'EPZA Role',
                    discretion: 'Security & Regulatory Functions'
                }
                ,
                {
                    title: 'Product',
                    discretion: 'Zinc & Lead'
                },
                {
                    title: 'Work Force',
                    discretion: '500 Approx'
                },
            ]
        },
        {
            title: 'Saindak EPZ',
            discretion: 'Saindak EPZ, a Gold and Copper Project in Balochistan, produces 20,000 tons of blister copper yearly. Its 2019-20 exports totaled US $55.002 million, with cumulative exports at US $2258.647 million. The project has created 1500 job opportunities for Pakistanis alongside foreign workers.',
            listing: [
                {
                    title: 'EPZ  Notified on 2',
                    discretion: 'May 12, 2004, Revised on May 12, 2016, Extended to 2035'
                }
                ,
                {
                    title: 'Location 2',
                    discretion: 'District Lasbella, Balochistan'
                }
                ,
                {
                    title: 'Leased to 2',
                    discretion: 'MCC HUAYE Duddar Mining Company'
                }
                ,
                {
                    title: 'Land/Zone Area 2',
                    discretion: '1500 Acres'
                },
                {
                    title: 'Project Stakeholder 2',
                    discretion: 'Ministry PNR Govt. of Balochistan along with MCC HDM Company'
                }
                ,
                {
                    title: 'Incentives 2',
                    discretion: '100% Import/Export'
                },
                {
                    title: 'EPZA Role 2',
                    discretion: 'Security & Regulatory Functions'
                }
                ,
                {
                    title: 'Product 2',
                    discretion: 'Zinc & Lead'
                },
                {
                    title: 'Work Force 2',
                    discretion: '500 Approx'
                },
            ]
        },
        {
            title: 'Boya Muhammad Khel',
            discretion: 'To exploit the mineral resources of Boyal Muhammad Khel, North Waziristan, open-pit mining is planned up to the depth of 1325m from MSL and installation of Copper beneficiation plant at the mouth of the mine is accomplished for 1500 MTPD. The project is 100 per cent indigenous and already contributing scientifically towards the socioeconomic development of the area through CSR, employment generation, and building of social infrastructure.'
            , listing: [
                {
                    title: 'EPZ  Notified on 3',
                    discretion: 'May 12, 2004, Revised on May 12, 2016, Extended to 2035'
                }
                ,
                {
                    title: 'Location 3',
                    discretion: 'District Lasbella, Balochistan'
                }
                ,
                {
                    title: 'Leased to 3',
                    discretion: 'MCC HUAYE Duddar Mining Company'
                }
                ,
                {
                    title: 'Land/Zone Area 3',
                    discretion: '1500 Acres'
                },
                {
                    title: 'Project Stakeholder 3',
                    discretion: 'Ministry PNR Govt. of Balochistan along with MCC HDM Company'
                }
                ,
                {
                    title: 'Incentives 3',
                    discretion: '100% Import/Export'
                },
                {
                    title: 'EPZA Role 3',
                    discretion: 'Security & Regulatory Functions'
                }
                ,
                {
                    title: 'Product 3',
                    discretion: 'Zinc & Lead'
                },
                {
                    title: 'Work Force 3',
                    discretion: '500 Approx'
                },
            ]
        },
    ])

    const rightHandler = () => {
        const cloneData = [...list];
        const removedItem = cloneData.shift();
        setList([...cloneData, removedItem]);
    };
    const leftHandler = () => {
        const cloneData = [...list];
        const removedItem = cloneData.pop();
        setList([removedItem, ...cloneData]);
    };
    return (
        <>
            <div className='max-w-[1170px] relative m-auto mb-[100px]'>
                <div className='text-[64px] my-[50px] leading-[84px] font-bold font-ibm-plex-sans text-center'>Fiscal Incentives for <span className='text-[#27AE60]'>EPZs</span> </div>

                <div className=''>
                    <div className='w-full bg-export-bg-image h-[280px] bg-no-repeat bg-cover flex gap-5 items-center justify-between'>
                        <div className='w-[74px]'>
                            <div onClick={leftHandler} className='bg-[#00FF65] bg-opacity-40 w-[74px] h-[74px] rounded-r-md flex justify-center items-center cursor-pointer'>
                                <img className=' relative z-10' src={leftarrow} width={14} height={28} />
                            </div>
                        </div>
                        <div className='flex-grow flex-col text-center  '>
                            <div className='text-[43px] leading-[41px] text-center font-roboto-condensed text-white font-medium'>{list[0].title}</div>

                            <div className='text-[20px]  leading-[26px] text-center font-roboto-condensed text-white '>{list[0].discretion}</div>
                        </div>
                        <div className='w-[74px]'>
                            <div onClick={rightHandler} className='bg-[#00FF65] bg-opacity-40 w-[74px] h-[74px] rounded-l-md flex justify-center items-center cursor-pointer'>
                                <img className=' relative z-10' src={rightarrow} width={14} height={28} />

                            </div>

                        </div>
                    </div>
                </div>


                <div className='border-collapse border border-[#B0B0B0] shadow-2xl rounded-b-2xl overflow-hidden'>
                    {
                        list[0].listing.map((data, index) => {
                            return (
                                <div className='flex border-b border-b-[#B0B0B0] font-roboto-condensed '>
                                    <span className=' w-[224px] bg-[#DCEDE9] py-4 pl-8 text-[#009969] font-[700] text-[18px] leading-[21px]'>{data.title}</span>
                                    <span className=' py-4 pl-8 text-[18px] leading-[21px]'>{data.discretion}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </>
    )
}


