import React from 'react'
import { FiscalEconomicZone , FiscalEconomicEnclaves , FiscalDeveloperIncentive , FiscalCardBlock } from 'components'
const SpecialEconomicZones = () => {
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
