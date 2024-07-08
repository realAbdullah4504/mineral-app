import React, { useState } from 'react'
import arrowR from "../../assets/images/arrowWealthR.png"
import arrowL from "../../assets/images/arrowWealthL.png"
import brightIcon from '../../assets/images/brightIcon.svg'
import brightGreen from '../../assets/images/brightGreen.svg'
import copperSlider from 'assets/images/copperSlide.png'
import goldSlider from 'assets/images/goldSlider.png'
import chromiteSlider from 'assets/images/chromiteSlider.png'
import coalSlider from 'assets/images/coalSlider.png'
import saltSlider from 'assets/images/saltSlider.png'
import ironSlider from 'assets/images/ironSlider.png'
import limeSlider from 'assets/images/limeSlider.png'
import marbelSlider from 'assets/images/marbelSlider.png'
import BriteSlider from 'assets/images/BriteSlider.png'
import gemstonesSlider from 'assets/images/gemstonesSlider.png'
import gypsumSlider from 'assets/images/gypsumSlider.png'
import chemical from 'assets/images/chamical.png' 
import construction from 'assets/images/construction.png' 
import glass from 'assets/images/glass.png' 
import oil from 'assets/images/oil.png' 
export const MineralWealth = () => {
 
  const [tab, setTab] = useState(
    [
      {
          "title": "Barite",
          "location": "Balochistan",
          "reserve":"14M tons",
          "production":"2022-2023: 139,655 tons",
          "gml":" $15.09M",
          "avatar":BriteSlider,
          tagFirst:'Chemical' ,
          secTag:'Construction' ,
          thrTag:'Ceramics & Glass' ,
          frTag:'Oil & Gas' ,   
          icon: brightIcon,
          iconGreen: brightGreen ,
          footerImgFirst: chemical, 
          footerImageSec : construction , 
          footerImageThr : glass , 
          footerImageOil:oil ,   
          "description":"Pakistan has abundant deposits of barite – a high-gravity mineral used in the production of multiple industrial products. The Barite deposits are located in the metallogenic zone of 300km long Lasbela-Khuzdar Belt in Balochistan. Bolan Mining Enterprises, a joint venture of the Government of Balochistan and Pakistan Petroleum Ltd (PPL), has a barite mine lease spread over 316 acres in Gunga (Khuzdar), operating a grinding/milling plant with a daily average production of 800-1000 tons (BME/PPL). Its industrial and commercial applications makes it an important industry mineral, especially in the oil and gas sector. The high-quality barite from Khuzdar is highly demanded in the international markets, including China, Iran & UAE (PPM Solutions). Daily production figures are averaged for 9 months from July 2021 to March 2022"
      },
      {
          "title": "Rock Salt",
          "location": "Khewra Mine",
          "reserve":" 65 Million tons",
          "production":" 2022-2023: 2,915,724 tons",
          "gml":" $12.65B",
          "avatar":goldSlider,
          tagFirst:'Chemical' ,
          secTag:'Construction' ,
          thrTag:'Ceramics & Glass' ,
          frTag:'Oil & Gas' ,   
          icon: brightIcon,
          iconGreen: brightGreen ,
          footerImgFirst: chemical, 
          footerImageSec : construction , 
          footerImageThr : glass , 
          footerImageOil:oil , 
          "description":"Pakistan boasts the world's 2nd largest reserves of Rock Salt (SIFC). The rock salt deposits are estimated to be over 65 million metric tons (PMDC), including reserves of both pink salt in Salt Range region and grey salt in Kohat Saline Series. Pakistan is one of the few countries that are bestowed with all three sources of rock salt including salt mines, saline lakes and sea salt. Khewra Salt mines are the world’s oldest and 2nd largest, producing 450,000 tons of salt annually (TDAP, 2021). Warcha Salt mines produce white crystalline salt while Bahadur Khel & Jatta Salt mines produce light gray to dark gray salt. There is a growing demand of salt products in the western countries & Pakistan’s salt products are known all over the world for their distinctive composition and craftsmanship. Growing international demand for salt products, availability of cheap and skilled labor, coupled with abundant raw material provides a lucrative offer & promising opportunity to investors to venture into salt products manufacturing. "
      },
      {
          "title": "Chromite",
          "location": "Balochistan",
          "reserve":" 4.5 million tons",
          "production":" 2022-2023: 158,874 tons",
          "gml":"$7618.4 M",
          "avatar":chromiteSlider,
          tagFirst:'Chemical' ,
          secTag:'Construction' ,
          thrTag:'Ceramics & Glass' ,
          frTag:'Oil & Gas' ,   
          icon: brightIcon,
          iconGreen: brightGreen ,
          footerImgFirst: chemical, 
          footerImageSec : construction , 
          footerImageThr : glass , 
          footerImageOil:oil , 
          "description":"Pakistan possess a significant amount of chromite ore, with estimated reserves of 4.5 million tons. These reserves have a 115,000 metric tons potential to be extracted annually (Finance, 2021). The chromite market has a $2 billion global demand. Bostan & Lasbela Special Economic Zones are effective locations for setting up ferrochrome production plant due to their proximity  to chromite-producing districts of Muslim Bagh, Khanozai, Nasai, Wadh and Khuzdar. This location will also have the advantage of being close to CPEC routes, giving it easy access for transportation to various steel industries in the country, as well as for foreign imports."
      },
      {
          "title": "Dimension Stone",
          "location": "KPK, Sindh",
          "reserve":"297 billion tons",
          "production":"2022-2023: 6,347,138 tons",
          "gml":"$13.4B",
          "avatar":coalSlider,
          tagFirst:'Chemical' ,
          secTag:'Construction' ,
          thrTag:'Ceramics & Glass' ,
          frTag:'Oil & Gas' ,   
          icon: brightIcon,
          iconGreen: brightGreen ,
          footerImgFirst: chemical, 
          footerImageSec : construction , 
          footerImageThr : glass , 
          footerImageOil:oil , 
          "description":"Pakistan has been endowed with extensive reserves of 297 billion tons of marble & granite (TDAP). More than 40 types of natural-colored marbles spread through 4 provinces of Pakistan. Pakistan Stone Development Company (PASDEC) and subsidiary of Pakistan Industrial Development Corporation, has initiated many projects to uplift the existing set up of Marble and granite sector. These projects are setup according to international practices, employ modern technology and focus on detail technical studies .As per plane about 10 model quarries and a number of marble cities are to be created in Pakistan .According to (PESDEC) estimates about 96,000 new jobs are to be created .these projects hold the promise to transform Pakistan’s dimension sector to a great extent."
      },
      {
          "title": "Copper & Gold",
          "location": "Balochistan",
          "reserve":"4.5 billion tons",
          "production":"2022-2023: 13378 tons",
          "gml":"$169B",
          "avatar":saltSlider,
          tagFirst:'Chemical' ,
          secTag:'Construction' ,
          thrTag:'Ceramics & Glass' ,
          frTag:'Oil & Gas' ,   
          icon: brightIcon,
          iconGreen: brightGreen ,
          footerImgFirst: chemical, 
          footerImageSec : construction , 
          footerImageThr : glass , 
          footerImageOil:oil , 
          "description":"Pakistan has the world’s 5th largest copper reserves of approximately 4.5 billion tons, mainly concentrated in Balochistan There are opportunities for the private sector and direct foreign investment in the mining, processing, and trading/exports subsectors. Reko Diq is one of the largest undeveloped copper and gold mine globally, having 12.3 million tons of copper & is capable of producing 200,000 tons of copper and 250,000 ounces of gold a year (TDAP). Tethyan Copper Company (TCC) estimates the annual profits from the mines at about $1.14 billion for copper and $2.5 billion for gold, totaling $3.64 billion annually. Copper/Gold production will play a significant part in the global shift to renewable energy and electric vehicles. The International Energy Agency (IEA) has projected that copper demand in the world would double in the coming two decades, i.e., by 2040, while the current demand for copper lies around 28 million tons. Projects like Barrick Reko Diq & Saindak present a compelling opportunity for both domestic and international investors."
      },
      {
          "title": "Gemstones",
          "location": "KPK",
          "reserve":"34 known types",
          "production":"",
          "gml":"$32.38M",
          "avatar":ironSlider,
          tagFirst:'Chemical' ,
          secTag:'Construction' ,
          thrTag:'Ceramics & Glass' ,
          frTag:'Oil & Gas' ,   
          icon: brightIcon,
          iconGreen: brightGreen ,
          footerImgFirst: chemical, 
          footerImageSec : construction , 
          footerImageThr : glass , 
          footerImageOil:oil , 
          "description":"Pakistan has been endowed with extensive reserves of rare gemstones such as pink topaz. It produces world’s top-quality emeralds, aquamarine, tourmaline, rubies, quartz, topaz, garnet and variety of other gemstones. "
      },
      {
          "title": "Coal",
          "location": "Sindh",
          "reserve":"186 billion tons",
          "production":"2022-2023: 9M",
          "gml":"2.5T",
          "avatar":limeSlider,
          tagFirst:'Chemical' ,
          secTag:'Construction' ,
          thrTag:'Ceramics & Glass' ,
          frTag:'Oil & Gas' ,   
          icon: brightIcon,
          iconGreen: brightGreen ,
          footerImgFirst: chemical, 
          footerImageSec : construction , 
          footerImageThr : glass , 
          footerImageOil:oil , 
          "description":"Pakistan has 186 billion tons of coal reserves (PIDE), concentrated in Sindh. Thar desert alone contains the world’s 7th largest coal reserves of approximately 175 billion tons. The Thar coalfield with a resource potential of 175 billion tonnes of coal covers an area of over 9,000 sq km, divided into 12 blocks. Out of these blocks, 3 have been allocated to local and international companies for mining, power generation & gasification, while the remaining blocks are available for investment. Pakistan is still in the initial stages of developing Thar coal resources. The costs will be reduced even more with expansion and reaching the optimum level."
      },
      {
          "title": "IRON ORE",
          "location": "",
          "reserve":"267 Million tons",
          "production":"2022- 2023: 376,970 tons",
          "gml":"",
          "avatar":marbelSlider,
          tagFirst:'Chemical' ,
          secTag:'Construction' ,
          thrTag:'Ceramics & Glass' ,
          frTag:'Oil & Gas' ,   
          icon: brightIcon,
          iconGreen: brightGreen ,
          footerImgFirst: chemical, 
          footerImageSec : construction , 
          footerImageThr : glass , 
          footerImageOil:oil , 
          "description":"Pakistan possesses significant potential in the mining of iron ore, offering lucrative investment opportunities. With ore reserves of approximately 267 million tons (Punjab Mineral Company, Government of Punjab) concentrated in the Chiniot region in Punjab, the area is being considered to be a designated ‘Special Economic Zone’ which will allow the investors tax breaks and exemptions of custom duties on machinery & equipment imported for mining purposes  Punjab Mineral Company (PMC) has undertaken the project of first Iron Ore Steel Mill at Chiniot."
      },
      {
          "title": "Gypsum",
          "location": "",
          "reserve":"4.8 billion tons",
          "production":"2022- 2023: 1,638,724 tons",
          "gml":"",
          "avatar":BriteSlider,
          tagFirst:'Chemical' ,
          secTag:'Construction' ,
          thrTag:'Ceramics & Glass' ,
          frTag:'Oil & Gas' ,   
          icon: brightIcon,
          iconGreen: brightGreen ,
          footerImgFirst: chemical, 
          footerImageSec : construction , 
          footerImageThr : glass , 
          footerImageOil:oil , 
          "description":"Kyber Pakhtunkhwa province of Pakistan is concentrated with about 92% of the country’s gypsum reserves which approximate to 4.8 billion tons with the extraction capacity of 2.1 million metric tons annually (TDAP, 2021). Currently KP has 158 processing factories including plaster of paris, gypsum powder units and crush plants (SMEDA, Cluster Development Program, 2017). The potential target market for the plaster of paris is general public and corporate customers. With export opportunities to Dubai, Saudi Arabia, Afghanistan, and other GCC countries that are facing an unprecedented construction boom."
      },
      {
          "title": "LIMESTONE",
          "location": "",
          "reserve":" Sufficient Reserves",
          "production":"2022- 2023: 60,590,496 ",
          "gml":"",
          "avatar":gemstonesSlider,
          tagFirst:'Chemical' ,
          secTag:'Construction' ,
          thrTag:'Ceramics & Glass' ,
          frTag:'Oil & Gas' ,   
          icon: brightIcon,
          iconGreen: brightGreen ,
          footerImgFirst: chemical, 
          footerImageSec : construction , 
          footerImageThr : glass , 
          footerImageOil:oil , 
          "description":"Pakistan is rich in limestone reserves, with extensive deposits found in regions such as Punjab, Khyber Pakhtunkhwa, Balochistan, and Sindh. These reserves showcase significant mineral potential with diverse applications across industries such as cement, construction, agriculture, industry, environment, and exports."
      }
      
      
  ])
    
  const rightHandler = () => {
    const cloneData = [...tab];
    const removedItem = cloneData.shift();
    setTab([...cloneData, removedItem])
   
};
const leftHandler = () => {
    const cloneData = [...tab];
    const removedItem = cloneData.pop();
    setTab([removedItem, ...cloneData])
   
};
  
  return (
    <div>
      <div className='flex items-center'>
        <span className='px-8'>
          <img onClick={leftHandler} src={arrowL} width={43} />
        </span>
        <span className='flex-grow  grid grid-cols-7'>
          {
            tab.map((data, index) => {
              return (
                <div>
                <span className={`${index == 0 ? 'bg-[#26AF5F]' : 'border border-[#26AF5F]'} w-[136px] h-[136px] rounded-full text-black flex justify-center items-center ${index > 6 ? 'hidden' : ''} `}>


                  <div className=''>
                    {
                      index == 0 ? <img className='relative m-auto' src={data.icon} /> : <img className='relative m-auto' src={data.iconGreen} />

                    }
                    <div className={`${index == 0 ? 'text-white' : 'text-[#26AF5F]'} w-[82px] text-center`}>{data.title}</div>
                  </div>

                </span>
                </div>
              )
            })
          }
        </span>
        <span className='px-8'>
          <img onClick={rightHandler} src={arrowR} width={43} />
        </span>
      </div>
      <div className='bg-[#e5faee] px-[150px] pt-12 mt-[70px]'>
<div className='flex'>
<div className='flex-grow'>
  <div className='text-[64px] leading-[84px] font-bold font-ibm-plex-sans mb-10'>{tab[0].title}</div>
  <div className='grid grid-cols-2 text-[24px] font-ibm-plex-sans leading-[30px]'>
<span><span className=''>Location:</span><span className='font-semibold'>{tab[0].location}</span></span>
<span><span>Reserves:</span><span className='font-semibold'>{tab[0].reserve}</span></span>
<span><span>Production:</span><span className='font-semibold'>{tab[0].production}</span></span>
<span><span>Global Market Value:</span><span className='font-semibold'>{tab[0].gml}</span></span>
  </div>
</div>
<div>
  <img src={tab[0].avatar}/>
</div>
</div>
<div className=''>
  <div className='text-[18px] text-[#40384F]'>
    {tab[0].description}
  </div>
  <div className='text-[#27AE60] underline font-bold mt-8'>
    Learn More
  </div>
  <div className='grid grid-cols-4 py-12 '>
<div>
  <div className='flex justify-center'>
  <img src={tab[0].footerImgFirst}/>

  </div>
<div className='font-semibold font-ibm-plex-sans text-[32px] leading-[42px] text-center mt-5'>{tab[0].tagFirst}</div>
</div>
<div>
  <div className='flex justify-center'>
  <img src={tab[0].footerImageSec}/>

  </div>
<div className='font-semibold font-ibm-plex-sans text-[32px] leading-[42px] text-center mt-5'>{tab[0].secTag}</div>
</div>
<div>
  <div className='flex justify-center'>
  <img src={tab[0].footerImageThr}/>

  </div>
<div className='font-semibold font-ibm-plex-sans text-[32px] leading-[42px] text-center mt-5'>{tab[0].thrTag}</div>
</div>
<div>
  <div className='flex justify-center'>
  <img src={tab[0].footerImageOil}/>

  </div>
<div className='font-semibold font-ibm-plex-sans text-[32px] leading-[42px] text-center mt-5'>{tab[0].frTag}</div>
</div>
  </div>
</div>
      </div>
    </div>
  )
}

