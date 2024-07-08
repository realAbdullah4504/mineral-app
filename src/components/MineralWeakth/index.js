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
 
  const [tab, setTab] = useState([
    { tagFirst:'Chemical' , secTag:'Construction' , thrTag:'Ceramics & Glass' , frTag:'Oil & Gas' ,   footerImgFirst: chemical, footerImageSec : construction , footerImageThr : glass , footerImageOil:oil ,   secImg:copperSlider ,  title: "Barite", icon: brightIcon, iconGreen: brightGreen , location:'Balochistan' , reserves : '14M tons' , production : ' 2022-2023: 139,655 tons' , marketVal : '15.09M' , dis:'Pakistan has abundant deposits of barite – a high-gravity mineral used in the production of multiple industrial products. The Barite deposits are located in the metallogenic zone of 300km long Lasbela-Khuzdar Belt in Balochistan. Bolan Mining Enterprises, a joint venture of the Government of Balochistan and Pakistan Petroleum Ltd (PPL), has a barite mine lease spread over 316 acres in Gunga (Khuzdar), operating a grinding/milling plant with a daily average production of 800-1000 tons (BME/PPL). Its industrial and commercial applications makes it an important industry mineral, especially in the oil and gas sector. The high-quality barite from Khuzdar is highly demanded in the international markets, including China, Iran & UAE (PPM Solutions). Daily production figures are averaged for 9 months from July 2021 to March 2022' },
    { tagFirst:'Chemical' , secTag:'Construction' , thrTag:'Ceramics & Glass' , frTag:'Oil & Gas' ,  footerImgFirst: chemical, footerImageSec : construction , footerImageThr : glass , footerImageOil:oil , secImg:goldSlider , title: "Rock Salt", icon: brightIcon, iconGreen: brightGreen , location:'Balochistan' , reserves : '14M tons' , production : ' 2022-2023: 139,655 tons' , marketVal : '15.09M' , dis:'Pakistan has abundant deposits of barite – a high-gravity mineral used in the production of multiple industrial products. The Barite deposits are located in the metallogenic zone of 300km long Lasbela-Khuzdar Belt in Balochistan. Bolan Mining Enterprises, a joint venture of the Government of Balochistan and Pakistan Petroleum Ltd (PPL), has a barite mine lease spread over 316 acres in Gunga (Khuzdar), operating a grinding/milling plant with a daily average production of 800-1000 tons (BME/PPL). Its industrial and commercial applications makes it an important industry mineral, especially in the oil and gas sector. The high-quality barite from Khuzdar is highly demanded in the international markets, including China, Iran & UAE (PPM Solutions). Daily production figures are averaged for 9 months from July 2021 to March 2022'  },
    { tagFirst:'Chemical' , secTag:'Construction' , thrTag:'Ceramics & Glass' , frTag:'Oil & Gas' ,  footerImgFirst: chemical, footerImageSec : construction , footerImageThr : glass , footerImageOil:oil , secImg:chromiteSlider , title: "Chromite", icon: brightIcon, iconGreen: brightGreen  , location:'Balochistan' , reserves : '14M tons' , production : ' 2022-2023: 139,655 tons' , marketVal : '15.09M' , dis:'Pakistan has abundant deposits of barite – a high-gravity mineral used in the production of multiple industrial products. The Barite deposits are located in the metallogenic zone of 300km long Lasbela-Khuzdar Belt in Balochistan. Bolan Mining Enterprises, a joint venture of the Government of Balochistan and Pakistan Petroleum Ltd (PPL), has a barite mine lease spread over 316 acres in Gunga (Khuzdar), operating a grinding/milling plant with a daily average production of 800-1000 tons (BME/PPL). Its industrial and commercial applications makes it an important industry mineral, especially in the oil and gas sector. The high-quality barite from Khuzdar is highly demanded in the international markets, including China, Iran & UAE (PPM Solutions). Daily production figures are averaged for 9 months from July 2021 to March 2022' },
    { tagFirst:'Chemical' , secTag:'Construction' , thrTag:'Ceramics & Glass' , frTag:'Oil & Gas' ,  footerImgFirst: chemical, footerImageSec : construction , footerImageThr : glass , footerImageOil:oil , secImg:coalSlider , title: "Dimension Stones", icon: brightIcon, iconGreen: brightGreen , location:'Balochistan' , reserves : '14M tons' , production : ' 2022-2023: 139,655 tons' , marketVal : '15.09M' , dis:'Pakistan has abundant deposits of barite – a high-gravity mineral used in the production of multiple industrial products. The Barite deposits are located in the metallogenic zone of 300km long Lasbela-Khuzdar Belt in Balochistan. Bolan Mining Enterprises, a joint venture of the Government of Balochistan and Pakistan Petroleum Ltd (PPL), has a barite mine lease spread over 316 acres in Gunga (Khuzdar), operating a grinding/milling plant with a daily average production of 800-1000 tons (BME/PPL). Its industrial and commercial applications makes it an important industry mineral, especially in the oil and gas sector. The high-quality barite from Khuzdar is highly demanded in the international markets, including China, Iran & UAE (PPM Solutions). Daily production figures are averaged for 9 months from July 2021 to March 2022'  },
    { tagFirst:'Chemical' , secTag:'Construction' , thrTag:'Ceramics & Glass' , frTag:'Oil & Gas' ,  footerImgFirst: chemical, footerImageSec : construction , footerImageThr : glass , footerImageOil:oil , secImg:saltSlider , title: "Copper & Gold", icon: brightIcon, iconGreen: brightGreen , location:'Balochistan' , reserves : '14M tons' , production : ' 2022-2023: 139,655 tons' , marketVal : '15.09M' , dis:'Pakistan has abundant deposits of barite – a high-gravity mineral used in the production of multiple industrial products. The Barite deposits are located in the metallogenic zone of 300km long Lasbela-Khuzdar Belt in Balochistan. Bolan Mining Enterprises, a joint venture of the Government of Balochistan and Pakistan Petroleum Ltd (PPL), has a barite mine lease spread over 316 acres in Gunga (Khuzdar), operating a grinding/milling plant with a daily average production of 800-1000 tons (BME/PPL). Its industrial and commercial applications makes it an important industry mineral, especially in the oil and gas sector. The high-quality barite from Khuzdar is highly demanded in the international markets, including China, Iran & UAE (PPM Solutions). Daily production figures are averaged for 9 months from July 2021 to March 2022'  }, 
    { tagFirst:'Chemical' , secTag:'Construction' , thrTag:'Ceramics & Glass' , frTag:'Oil & Gas' ,  footerImgFirst: chemical, footerImageSec : construction , footerImageThr : glass , footerImageOil:oil , secImg:ironSlider , title: "Gemstones", icon: brightIcon, iconGreen: brightGreen , location:'Balochistan' , reserves : '14M tons' , production : ' 2022-2023: 139,655 tons' , marketVal : '15.09M' , dis:'Pakistan has abundant deposits of barite – a high-gravity mineral used in the production of multiple industrial products. The Barite deposits are located in the metallogenic zone of 300km long Lasbela-Khuzdar Belt in Balochistan. Bolan Mining Enterprises, a joint venture of the Government of Balochistan and Pakistan Petroleum Ltd (PPL), has a barite mine lease spread over 316 acres in Gunga (Khuzdar), operating a grinding/milling plant with a daily average production of 800-1000 tons (BME/PPL). Its industrial and commercial applications makes it an important industry mineral, especially in the oil and gas sector. The high-quality barite from Khuzdar is highly demanded in the international markets, including China, Iran & UAE (PPM Solutions). Daily production figures are averaged for 9 months from July 2021 to March 2022' },
    { tagFirst:'Chemical' , secTag:'Construction' , thrTag:'Ceramics & Glass' , frTag:'Oil & Gas' ,  footerImgFirst: chemical, footerImageSec : construction , footerImageThr : glass , footerImageOil:oil , secImg:limeSlider , title: "Coal", icon: brightIcon, iconGreen: brightGreen , location:'Balochistan' , reserves : '14M tons' , production : ' 2022-2023: 139,655 tons' , marketVal : '15.09M' , dis:'Pakistan has abundant deposits of barite – a high-gravity mineral used in the production of multiple industrial products. The Barite deposits are located in the metallogenic zone of 300km long Lasbela-Khuzdar Belt in Balochistan. Bolan Mining Enterprises, a joint venture of the Government of Balochistan and Pakistan Petroleum Ltd (PPL), has a barite mine lease spread over 316 acres in Gunga (Khuzdar), operating a grinding/milling plant with a daily average production of 800-1000 tons (BME/PPL). Its industrial and commercial applications makes it an important industry mineral, especially in the oil and gas sector. The high-quality barite from Khuzdar is highly demanded in the international markets, including China, Iran & UAE (PPM Solutions). Daily production figures are averaged for 9 months from July 2021 to March 2022' },
    { tagFirst:'Chemical' , secTag:'Construction' , thrTag:'Ceramics & Glass' , frTag:'Oil & Gas' ,  footerImgFirst: chemical, footerImageSec : construction , footerImageThr : glass , footerImageOil:oil , secImg:marbelSlider , title: "Iron Ore", icon: brightIcon, iconGreen: brightGreen , location:'Balochistan' , reserves : '14M tons' , production : ' 2022-2023: 139,655 tons' , marketVal : '15.09M' , dis:'Pakistan has abundant deposits of barite – a high-gravity mineral used in the production of multiple industrial products. The Barite deposits are located in the metallogenic zone of 300km long Lasbela-Khuzdar Belt in Balochistan. Bolan Mining Enterprises, a joint venture of the Government of Balochistan and Pakistan Petroleum Ltd (PPL), has a barite mine lease spread over 316 acres in Gunga (Khuzdar), operating a grinding/milling plant with a daily average production of 800-1000 tons (BME/PPL). Its industrial and commercial applications makes it an important industry mineral, especially in the oil and gas sector. The high-quality barite from Khuzdar is highly demanded in the international markets, including China, Iran & UAE (PPM Solutions). Daily production figures are averaged for 9 months from July 2021 to March 2022' },
    { tagFirst:'Chemical' , secTag:'Construction' , thrTag:'Ceramics & Glass' , frTag:'Oil & Gas' ,  footerImgFirst: chemical, footerImageSec : construction , footerImageThr : glass , footerImageOil:oil , secImg:BriteSlider , title: "Gypsum", icon: brightIcon, iconGreen: brightGreen , location:'Balochistan' , reserves : '14M tons' , production : ' 2022-2023: 139,655 tons' , marketVal : '15.09M' , dis:'Pakistan has abundant deposits of barite – a high-gravity mineral used in the production of multiple industrial products. The Barite deposits are located in the metallogenic zone of 300km long Lasbela-Khuzdar Belt in Balochistan. Bolan Mining Enterprises, a joint venture of the Government of Balochistan and Pakistan Petroleum Ltd (PPL), has a barite mine lease spread over 316 acres in Gunga (Khuzdar), operating a grinding/milling plant with a daily average production of 800-1000 tons (BME/PPL). Its industrial and commercial applications makes it an important industry mineral, especially in the oil and gas sector. The high-quality barite from Khuzdar is highly demanded in the international markets, including China, Iran & UAE (PPM Solutions). Daily production figures are averaged for 9 months from July 2021 to March 2022' },
    { tagFirst:'Chemical' , secTag:'Construction' , thrTag:'Ceramics & Glass' , frTag:'Oil & Gas' ,  footerImgFirst: chemical, footerImageSec : construction , footerImageThr : glass , footerImageOil:oil , secImg:gemstonesSlider , title: "Limestone", icon: brightIcon, iconGreen: brightGreen , location:'Balochistan' , reserves : '14M tons' , production : ' 2022-2023: 139,655 tons' , marketVal : '15.09M' , dis:'Pakistan has abundant deposits of barite – a high-gravity mineral used in the production of multiple industrial products. The Barite deposits are located in the metallogenic zone of 300km long Lasbela-Khuzdar Belt in Balochistan. Bolan Mining Enterprises, a joint venture of the Government of Balochistan and Pakistan Petroleum Ltd (PPL), has a barite mine lease spread over 316 acres in Gunga (Khuzdar), operating a grinding/milling plant with a daily average production of 800-1000 tons (BME/PPL). Its industrial and commercial applications makes it an important industry mineral, especially in the oil and gas sector. The high-quality barite from Khuzdar is highly demanded in the international markets, including China, Iran & UAE (PPM Solutions). Daily production figures are averaged for 9 months from July 2021 to March 2022' }])
  
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
<span><span>Reserves:</span><span className='font-semibold'>{tab[0].reserves}</span></span>
<span><span>Production:</span><span className='font-semibold'>{tab[0].production}</span></span>
<span><span>Global Market Value:</span><span className='font-semibold'>{tab[0].marketVal}</span></span>
  </div>
</div>
<div>
  <img src={tab[0].secImg}/>
</div>
</div>
<div className=''>
  <div className='text-[18px] text-[#40384F]'>
    {tab[0].dis}
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

