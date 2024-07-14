import React, { useState } from 'react'

export const FiscalCardBlock = () => {
    const [cardData, setCardData] = useState([
        {
            title: '1. Attractive Fiscal Incentives',
            description: 'One time exemption from all custom duties & taxes for all capital good imported. Helps reduce expenditure for companies & making if feasible to invest in equipment & technology.'
        },
        {
            title: '2. Attractive Fiscal Incentives',
            description: 'One time exemption from all custom duties & taxes for all capital good imported. Helps reduce expenditure for companies & making if feasible to invest in equipment & technology.'
        },
        {
            title: '3. Attractive Fiscal Incentives',
            description: 'One time exemption from all custom duties & taxes for all capital good imported. Helps reduce expenditure for companies & making if feasible to invest in equipment & technology.'
        },
        {
            title: '4. Attractive Fiscal Incentives',
            description: 'One time exemption from all custom duties & taxes for all capital good imported. Helps reduce expenditure for companies & making if feasible to invest in equipment & technology.'
        },
        {
            title: '5. Attractive Fiscal Incentives',
            description: 'One time exemption from all custom duties & taxes for all capital good imported. Helps reduce expenditure for companies & making if feasible to invest in equipment & technology.'
        },
        {
            title: '6. Attractive Fiscal Incentives',
            description: 'One time exemption from all custom duties & taxes for all capital good imported. Helps reduce expenditure for companies & making if feasible to invest in equipment & technology.'
        }
    ])
    return (
        <>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 max-w-[1179px] my-[50px] relative m-auto gap-8'>
                {
                    cardData.map((data, index) => {
                        return (
                            <div className='bg-[#DCEDE9] rounded-xl px-5 pb-12 pt-8'>
                                <div className='font-ibm-plex-sans font-bold leading-[30px] text-[24px]'>
                                    {data.title}
                                </div>
                                <div className='text-[#40384F]'>{data.description}</div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}


