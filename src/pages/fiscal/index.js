import React from 'react'
import { FiscalEconomicZone , FiscalEconomicEnclaves , FiscalDeveloperIncentive , FiscalCardBlock } from 'components'
const Fiscal = () => {
  return (
    <div className='px-10'>
      <FiscalEconomicZone/>
      <FiscalEconomicEnclaves/>
      <FiscalDeveloperIncentive/>
      <FiscalCardBlock/>
    </div>
  )
}

export default Fiscal
