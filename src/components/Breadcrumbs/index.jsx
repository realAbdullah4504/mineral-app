import React from 'react'

const BreadCrumbs = () => {
  return (
    <ol className="flex items-center whitespace-nowrap mt-9">
  <li className="inline-flex items-center">
    <a className="font-ibm-plex-sans flex items-center font-medium	text-[22px] text-[#009969] hover:text-[#009969] focus:outline-none focus:text-[#009969]" href="/">
      Home
    </a>
    <svg className="flex-shrink-0 mx-2 overflow-visible size-4 text-[#009969]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m9 18 6-6-6-6"></path>
    </svg>
  </li>
  <li className="inline-flex items-center">
    <a className="font-ibm-plex-sans flex items-center font-medium	text-[22px] text-[#009969] hover:text-[#009969] focus:outline-none focus:text-[#009969]" href="#">
      App Center
      <svg className="flex-shrink-0 mx-2 overflow-visible size-4 text-[#009969]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="m9 18 6-6-6-6"></path>
      </svg>
    </a>
  </li>
  <li className=" font-ibm-plex-sans inline-flex items-center font-medium text-[22px] text-[#009969] truncate" aria-current="page">
    Application
  </li>
</ol>
  )
}

export default BreadCrumbs