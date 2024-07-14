import React, { useState } from 'react'

export const FiscalCardBlock = () => {
    const [cardData, setCardData] = useState([
        {
            title: '1. Attractive Fiscal Incentives',
            description: 'One time exemption from all custom duties & taxes for all capital good imported. Helps reduce expenditure for companies & making it feasible to invest in equipment & technology.'
        },
        {
            title: '2. Tax Exemption',
            description: 'Exemption from all taxes on income period of 10 years, allowing for greater flexibility and better cash-flow management.'
        },
        {
            title: '3. Improved Infrastructure',
            description: 'SEZs are developed with the aim to provide better infrastructure like roads, electricity, water supply, critical for mining operations, cutting logistical challenges and costs, boosting efficiency.'
        },
        {
            title: '4. Streamlined Regulatory Processes',
            description: 'Faster facilitation and transparency of processes allow for much quicker operationalization of projects.'
        },
        {
            title: '5. Access to Global Markets',
            description: 'SEZs are strategically located to facilitate trade, better connectivity to ports & international market. This can provide higher revenues & market expansion opportunities.'
        },
        {
            title: '6. Joint Ventures & Technology Transfer',
            description: 'SEZs promote foreign direct investment and local-foreign joint ventures, fostering collaboration with international mining firms for skill development and tech transfer.'
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


