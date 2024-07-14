import React from 'react';

const BreadCrumbs = ({ breadcrumbs }) => {
  return (
    <ol className="flex items-center sm:flex-nowrap flex-wrap sm:whitespace-nowrap">
      {breadcrumbs.map((breadcrumb, index) => (
        <li key={index} className="inline-flex items-center">
          <a
            className="font-ibm-plex-sans flex items-center font-medium text-[22px] text-[#009969] hover:text-[#009969] focus:outline-none focus:text-[#009969]"
            href={breadcrumb.path}
          >
            {breadcrumb.label}
          </a>
          {index < breadcrumbs.length - 1 && (
            <svg
              className="flex-shrink-0 mx-2 overflow-visible size-4 text-[#009969]"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          )}
        </li>
      ))}
    </ol>
  );
};

export default BreadCrumbs;
