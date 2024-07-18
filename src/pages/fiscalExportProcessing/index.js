import React from 'react'
import BreadCrumbs from "components/Breadcrumbs";
import { FiscalExport , FiscalExportImg , FiscalExportTable} from 'components'
const FiscalExportProcessing = () => {
  const breadcrumbs = [
    { path: '/', label: 'Home' },
    { path: '/business-investment', label: 'Business & Investment' },
    { path: '/fiscal-incentives', label: 'Fiscal Incentives' },
    { path: '#', label: 'Export Processing Zones' },
  ];
  return (
    <div>
   
      <FiscalExport/>
      <FiscalExportImg/>
      <FiscalExportTable/>
    </div>
  )
}

export default FiscalExportProcessing
