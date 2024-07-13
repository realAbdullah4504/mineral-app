import React from 'react';


export const BreadCrump = (list) => {

const handleonClick=(list)=>{ if(list.link){window.Location.href=link}

}
  return (
   <div>
{list.map((item, index) => (
  <div key={index}>
    <span 
      onClick={() => { handleonClick(item) }} 
      style={{ cursor: item.link ? 'pointer' : 'default' }}
    >
      {item.name}
    </span>
    {index !== list.length - 1 && (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth="1.5" 
        stroke="currentColor" 
        className="size-6"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          d="m8.25 4.5 7.5 7.5-7.5 7.5" 
        />
      </svg>
    )}
  </div>
))}


   </div>
  );
};