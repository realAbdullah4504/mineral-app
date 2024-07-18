import React from 'react'
import BreadCrumbs from "components/Breadcrumbs";
import { FiscalEconomicZone , FiscalEconomicEnclaves , FiscalDeveloperIncentive , FiscalCardBlock } from 'components'
const SpecialEconomicZones = () => {
  const breadcrumbs = [
    { path: '/', label: 'Home' },
    { path: '/business-investment', label: 'Business & Investment' },
    { path: '/fiscal-incentives', label: 'Fiscal Incentives' },
    { path: '#', label: 'Special Economic Zones' },
  ];
  return (
    <div className='px-10'>
     
      <FiscalEconomicZone/>
      <FiscalEconomicEnclaves/>
      <FiscalDeveloperIncentive/>
      <FiscalCardBlock/>
    </div>
  )
}

export default SpecialEconomicZones;
