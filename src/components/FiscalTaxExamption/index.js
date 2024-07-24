import BreadCrumbs from 'components/Breadcrumbs'
import React from 'react'

export const FiscalTaxExemption = () => {
    const breadcrumbs = [
        { path: '/', label: 'Home' },
        { path: '/business-investment', label: 'Business & Investment' },
        { path: '/fiscal-incentives', label: 'Fiscal Incentives' },
        { path: '#', label: 'Tax Exemptions' },
      ];
    return (
        <>
        <div className=' lg:max-w-[1440px] w-[90%] mt-[50px] relative m-auto '>
        <BreadCrumbs breadcrumbs={breadcrumbs} />

        </div>
            <div className='max-w-[1170px] relative m-auto px-5 pt-[0px]'>
                <div className='mb-[50px]'>

                </div>

                <div className='title mb-[30px]'> <span className='text-textGreen'>Tax</span> Exemptions</div>
                <div className='grid grid-cols-2 gap-[15px]'>
                    <div className='grow shadow-md  rounded-lg px-[20px] py-[20px]'>
                        <div className='text-textGreen text-[24px] leading-[30px] font-bold mb-2'>Concessions for Tax -filers</div>
                        <div className='text-[18px] leading-[25px] text-[#40384F]'>According to Section 236-V of Income Tax Ordinance, there will be advance tax on extraction of minerals collected at the rate specified in Division XXVI of Part-IV of the First Schedule on the value of minerals extracted, produced, dispatched and carried away from the licensed or leased areas of the mines. The rate of tax to be collected under section 236-V shall be 5% of the value of the minerals for non-filers and 0% for filers. </div>

                    </div>
                    <div className='grow shadow-md rounded-lg px-[20px] py-[20px]'>
                        <div className='text-textGreen text-[24px] leading-[30px] font-bold mb-2'>Exemption on the Import of Mineral oil</div>
                        <div className='text-[18px] leading-[25px] text-[#40384F]'>Import of Mineral oil by a manufacturer or formulator of pesticides is exempted from customs- duties under the customs Notification No. S.R.O. 857(I)/20084 , dated the 16th August, 2008. </div>

                    </div>


                </div>
                <div className='grow shadow-md rounded-lg mt-[40px] px-[20px] py-[20px]'>
                    <div className='text-textGreen text-[24px] leading-[30px] font-bold mb-2'>Exemption on coal mining equipment and machinery</div>
                    <div className='text-[18px] leading-[25px] text-[#40384F]'>Under S.R.O. 268(I)/20155 amended vide S.R.O 673(I)/20196 , the Federal Government exempted coal mining equipment and machinery including vehicles for site use, if not manufactured locally, imported for Thar Coal Field from whole of customs duty subject to the following conditions, namely:</div>
                    <div>
                        <ul className='list-disc ml-5 text-[#40384F]'>
                            <li>The exemption shall be available to those Mining Companies or their authorized operators or contractors who hold permits, licenses, leases and who enter into agreements with the Government of Pakistan or a Provincial Government.</li>
                            <li>The goods shall not be sold or otherwise disposed of without prior approval of the Board and the payment of customs duties and taxes leviable at the time of import. These shall, however, be allowed to be transferred to other entitled mining companies with prior approval of the Board.</li>
                        </ul>
                    </div>
                </div>

                <div className='mt-[50px]'>
                    <div className='text-[36px] leading-[50px] font-semibold max-w-[766px]'>Exploration and Extraction of Mineral Deposits a Separate Business</div>
                    <div className='bg-[#F4FBF7] rounded-[17px] py-[20px] px-[40px] text-[#40384F] my-[30px] '>
                        <ul className='list-disc ml-5 text-[#40384F] gap-4 space-y-5'>
                            <li>Where any person carries on, or is treated as carrying on, any business which consists of or includes the exploration or extraction of mineral deposits of a wasting nature (other than petroleum) in Pakistan, such business or part thereof, as the case may be, shall be, for the purposes of this Ordinance [or the repealed Ordinance], treated as a separate undertaking (hereinafter referred to as “such undertaking”) and the profits and gains of such undertaking shall be computed separately from the income, profits and gains from any other business, if any, carried on by the person. </li>
                            <li>Tax Exemption of Profits from Refining or Concentrating Mineral Deposits. Where such undertaking is also engaged in the business of refining or concentrating in Pakistan the mineral deposits extracted by it in Pakistan, so much of the profits and gains (hereinafter referred to as the “said amount”) derived from such business as does not exceed ten per cent of the capital employed in such business (such capital being computed in accordance with such rules as may be made by the [Board] for the purposes of this rule) shall be exempt from tax. </li>
                            <li>Where the profits and gains of such business computed for any tax year cover a period which is less or more than one year, the amount of profits and gains exempt under sub-rule (1) shall be the amount which bears the same proportion to the said amount of profits as the said period bears to a period of one year. </li>
                            <li>The profits and gains of the business to which this rule applies shall be computed in accordance with Part IV of Chapter II.</li>
                        </ul>
                    </div>
                </div>
                <div className='my-[50px]'>
                    <div className='text-[36px] leading-[50px] font-semibold max-w-[766px]'>Exemption in Customs Acts, 1969 & Sales Tax Act, 1990 on the import of machinery</div>
                    <div className='bg-[#F4FBF7] rounded-[17px] py-[20px] px-[40px] text-[#40384F] mt-[30px] '>
                 <div className='mb-[30px]'>Under S.R.O. 678(I)/20048 , the Federal Government exempted:  </div>   
                        <ul className='list-disc ml-5 text-[#40384F] gap-4 space-y-5'>
                            <li>Machinery, equipment, materials, specialized vehicles or vessels, picks-ups, helicopters, aircraft, accessories, spares, chemicals and consumables, as are not manufactured locally, imported by the Exploration and Production (E&P) Companies, their contractors, sub-contractors and service companies, from customs- duty in excess of five per cent ad valorem leviable under the First Schedule to the Customs Act, 1969 (IV of 1969), and the whole of sales tax leviable under the Sales Tax Act, 1990, on their import and subsequent supply, subject to the conditions specified.</li>
                            <li>Machinery and equipment, as are not manufactured locally, imported by companies other than Exploration and Production Companies, from custom duty in excess of five per cent ad valorem leviable under the First Schedule to the Customs Act, 1969 (IV of 1969), subject to the conditions specified.  </li>
                            <li>Plant, machinery and equipment [including Floating Storage and Regasification Unit], as are not manufactured locally, imported by LNG developers or LNG TO/O [and natural gas infrastructure importers and its developers], from customs-duty as is in excess of 5%ad valorem, leviable under the First Schedule to the Customs Act, 1969 (IV of 1969), and the whole of sales tax, subject to the conditions specified.</li>
                         
                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}


