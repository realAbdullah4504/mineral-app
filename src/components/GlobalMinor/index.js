import React from 'react'
import Distribution from 'assets/images/Distribution.png';

export const GlobalMinerSection = () => {
  return (
    <div className="bg-[#F1F3F2] pt-[52px] text-center">
    <div className="max-w-8xl font-roboto-condensed font-bold text-[38.02px] leading-[44.55px] uppercase">
    Pakistan - A destination for  Global Miners and Investors
    </div>
    <div className="max-w-6xl m-auto">
    <img className="mt-[25px]" src={Distribution} width={"100%"} />
    </div>
  </div>
  )
}
