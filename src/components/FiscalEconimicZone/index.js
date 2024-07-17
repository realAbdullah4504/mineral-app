import BreadCrumbs from 'components/Breadcrumbs';
import React from 'react'

export const FiscalEconomicZone = () => {
  const breadcrumbs = [
    { path: '/', label: 'Home' },
    { path: '/business-investment', label: 'Business & Investment' },
    { path: '/fiscal-incentives', label: 'Fiscal Incentives' },
    { path: '#', label: 'Special Economic Zones' },
  ];
  return (
    <>
    <div className='w-[1179px] relative m-auto mt-[100px]'>
    <BreadCrumbs breadcrumbs={breadcrumbs} />

     <div className='text-[64px] font-[700] leading-[83px] font-ibm-plex-sans my-3'>Special Economic Zones</div>
     <div className='text-[22px] leading-[24px] '>
     The Government of Pakistan has initiated various economic reforms, placed at enhancing the economy under China-Pakistan Economic Corridor (CPEC). One of the major parts of this collaboration is the industrial growth, under which Special Economic Zones (SEZs)have been planned along the CPEC routes of the country. SEZs have been implemented and proven to be highly successful in countries like Taiwan, China, Republic of Korea and Bangladesh, enhancing industrialization, attracting foreign funding, boosting exports and creating employment opportunities.<br/><br/>  

The Government of Pakistan adopted the ‘Special Economic Zones’ Act, 2012, to encourage domestic and international investors for promotion and establishment of industrial infrastructures focusing on export increase, import substitution, transfer of technology and GDP growth.

     </div>
     </div>
    </>
  )
}


