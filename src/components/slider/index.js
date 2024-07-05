import React, { useState } from "react";
import MapPIn from '../../assets/images/map-pin.png'

export const Slider =() => {
  const [sliderContent , setSliderContent] = useState({
    first:{
      title:'About Us' , 
      description:`The Pakistan Minerals Information and Services Portal dubbed as PAKISTAN “MINES” is envisioned to be a gateway for investors, professionals, academics and government officials for economic prosperity. 
              MINES aims to enhance and enrich the potential of Pakistan's mineral and mining industry. With a focus on consolidating critical information for the sector, the objective is to attract investment and foster international interest from companies seeking promising exploration prospects within Pakistan` , 
              image:'/RectangleOne.png' , 
              location:'Thar Sino Block I, Tharparkar'
    } , 
    sec:{
      title:'Objectives' , 
      description:`This portal aims to augment existing national efforts to uplift the minerals & mining industry of Pakistan, It will serve as a gateway to mining value chain for investors, academics, regulators & general public, in order to attract local and foreign investment & interest.` , 
              image:'/SlidSecF.png' , 
               location:'Reko Diq Gold & Copper mine, Balochistan'
    } , 
    thr:{
      title:'Vision' , 
      description:`The Portal aims to be a comprehensive platform embodying the interests of Pakistan’s minerals & mining sector, that will contribute to a brighter future for Pakistan’s mineral development within global context.` , 
              image:'/VisionMine.png' , 
               location:'Khewra Salt mine'
    }
  })
  const [active , setActive] = useState(0)
  const [imageActive , setImageActive] = useState(0)


  return (
    <div className="">
      <div  style={{ backgroundImage: `url(${active == 0 ?sliderContent.first.image :active == 1 ? sliderContent.sec.image : sliderContent.thr.image })` , backgroundSize:imageActive == 0 ? '100%' : '110%' , transition:imageActive == 1 ?'all 2s ease-in-out':'' }} className={` h-[631px]   relative`}>
        <div className="absolute backdrop:backdrop-brightness-50 bg-black/50 w-full h-full z-0"></div>
        <div className="w-full flex justify-end">
          <div className="w-fit h-[36px] mt-[40px] bg-[#27AE60] flex  text-white z-10 py-[8px] px-[12px] rounded-[4px] gap-[8px] mr-10">
            <span className="font-medium">{active == 0 ? sliderContent.first.location :active == 1 ? sliderContent.sec.location : sliderContent.thr.location   }</span><span> <img src={MapPIn} alt="Example" width={20} height={20} /></span>
          </div>
        </div>
        <div className="w-full flex justify-between z-10 relative pl-[150px] mt-[180px] ">
          <div className="h-[271px] w-[750px]">
            <div className="font-bold text-[64px] leading-[84px] text-white ">{active == 0 ? sliderContent.first.title :active == 1 ? sliderContent.sec.title : sliderContent.thr.title   }</div>
            <div className="font-medium text-[18px] leading-[25px] text-white ">{active == 0 ? sliderContent.first.description :active == 1 ? sliderContent.sec.description : sliderContent.thr.description   }</div>
          </div>
          <div className=" h-[240px] mr-10 flex">
<div className="h-full   flex-col">
  <div onClick={()=>{

    setActive(0)
    setImageActive(0) 
    setTimeout(()=>{ setImageActive(1) }, 1000)
    }} className={`${active == 0 ? 'text-[48px]  h-[32%] leading-[55px] ' : 'text-[32px] h-[32%]  leading-[36px] '} items-center flex  font-bold justify-end text-right  text-white cursor-pointer`}>{sliderContent.first.title}</div>
  <div onClick={()=>setActive(1)} className={`${active == 1 ? 'text-[48px]  h-[32%] leading-[55px] ' : 'text-[32px] h-[32%]  leading-[36px] '} items-center flex  font-bold justify-end text-right  text-white cursor-pointer`}>{sliderContent.sec.title}</div>
  <div onClick={()=>setActive(2)} className={`${active == 2 ? 'text-[48px]  h-[32%] leading-[55px] ' : 'text-[32px] h-[32%]  leading-[36px] '} items-center flex  font-bold justify-end text-right  text-white cursor-pointer`}>{sliderContent.thr.title}</div>
</div>
<div className="h-full mx-3 w-[2px] bg-white ">
<div className={` ${active == 0 ? 'pl-[8px] h-[33%] rounded bg-[#27AE60] -ml-[3px]' : 'pl-[2px] h-[33%]'}`}></div>
<div  className={` ${active == 1 ? 'pl-[8px] h-[33%] rounded bg-[#27AE60] -ml-[3px]' : 'pl-[2px] h-[33%]'}`}></div>
<div  className={` ${active == 2 ? 'pl-[8px] h-[34%] rounded bg-[#27AE60] -ml-[3px]' : 'pl-[2px] h-[33%]'}`}></div>
</div>
          </div>
        </div>
      </div>
    </div>
  );
}
