import React from 'react'
import { FiscalTaxExemption } from 'components'
import BreadCrumbs from "components/Breadcrumbs";

const FiscaTax = () => {
  const breadcrumbs = [
    { path: '/', label: 'Home' },
    { path: '/business-investment', label: 'Business & Investment' },
    { path: '/fiscal-incentives', label: 'Fiscal Incentives' },
    { path: '#', label: 'Tax Exemptions' },
  ];
  return (
    <div>
      <div style={{
          marginLeft: '70px',
          marginTop: '30px',
        }}>
        <BreadCrumbs breadcrumbs={breadcrumbs} />
        </div>
   <FiscalTaxExemption/>
    </div>
  )
}

export default FiscaTax
