import React from 'react'
import Distribution from 'assets/images/Distribution.png';
import { Container } from 'components/UI';

export const GlobalMinerSection = () => {
  return (
    <div className="bg-[#F1F3F2] w-full text-center">
      <Container classes="px-[124.56px]">
        <div className="pt-[52px] pb-[24.41px] font-roboto-condensed font-bold text-[38.02px] leading-[44.55px] uppercase">
          Pakistan - A destination for  Global Miners and Investors
        </div>
        <div className="w-full">
          <img src={Distribution} className='w-full' alt="Distribution" />
        </div>
      </Container>
    </div>
  )
}
