import BreadCrumbs from "components/Breadcrumbs";
import { Container } from "components/UI";
import React from "react";
import minertalFeeImage from "../../assets/images/mineral_title_fee.jpg"
import minertalTitleTenure from "../../assets/images/mineral_title_tenure.jpg"
import Sindh_img from "../../assets/images/Sindh_img.png"
import Kpk_img from "../../assets/images/kpk_img.png"
import Balochistan_img from "../../assets/images/Balochistan_img.png"
import punjab_img from "../../assets/images/punjab_img.png"
import Kashmirt_img from "../../assets/images/Kashmirt_img.png"
import Gilgit_img from "../../assets/images/Gilgit_img.png"

import {HowToApply} from "./howToApply.js";
const ApplyingForMineralTitle = () => {
  const breadcrumbs = [
    { path: '/', label: 'Home' },
    { path: '/business-investment', label: 'Business & Investment' },
    { path: '#', label: 'Applying For mineral title' },
  ];

  const applyingForMineralTitleData = [
    {
      "title" : "Sindh",
      "slug" : "sindh",
      "image": Sindh_img,
    },
    {
      "title" : "KPK",
      "slug" : "kpk",
      "image": Kpk_img,
    },
    {
      "title" : "Balochistan",
      "slug" : "valochistan",
      "image": Balochistan_img,
    },
    {
      "title" : "Punjab",
      "slug" : "punjab",
      "image": punjab_img,
    },
    {
      "title" : "Kashmir",
      "slug" : "kashmir",
      "image": Kashmirt_img,
    },
    {
      "title" : "Gilgit",
      "slug" : "gilgit",
      "image": Gilgit_img,
    }
  ]

  return (
    <>
    <Container classes="mt-8">
      
      <div className="page_introduction_section my-5">
      
      <div className="page-title-main">
      <BreadCrumbs breadcrumbs={breadcrumbs} />
          <h1 className="page-title">Applying for <span>Mineral Title</span></h1>
          <p className="intro_parahgraph my-4 font-helvetica">
          Mineral Title" refers to the legal rights granted by the government to individuals or companies to explore, develop, and extract minerals from a designated area. These titles are essential for regulating mining activities and ensuring that mineral resources are exploited in an orderly and lawful manner. Here are the main types of mineral titles typically found in Pakistan:
          </p>
      </div>
      </div>
      <div className="content_area_main">
        <div className="apply_for_mineral_sec_1 xl:py-10 md:py-5 py-4">
            <div className="page_subtitle text-center">Mineral Title Fee / Annual <span>Rent & Fee</span></div>
            <div className="table_strucutre">
              <img src={minertalFeeImage} alt="" className="rounded-xl"/>
            </div>
        </div>

        <div className="apply_for_mineral_sec_2 xl:py-10 md:py-5 py-4">
            <div className="page_subtitle text-center">Mineral Title <span>Tenure</span></div>
            <div className="table_strucutre">
              <img src={minertalTitleTenure} alt="" className="rounded-xl"/>
            </div>
        </div>
      </div>

    </Container>
    <div className="how_to_apply_for_mineral_title_main md:my-10 my-5 bg-[#F4FBF7] md:py-20 py-5">
      <Container>
      <div className="how_to_apply_intro mx-auto md:max-w-[600px] max-w-[90%] text-center">
        <h2 className="how_to_apply_for_mineral_heading">How to Apply for Mineral Title</h2>
        <p>Step by step procedure to apply for a mineral title, to embark on a successful mining venture</p>
      </div>
      <div className="apply_for_mineral_title_image flex justify-center my-10">
        <HowToApply />
      </div>
      </Container>
    </div>

    <Container>
      <div className="links_for_appliation_of_provincial">
        <div className="links_for_application_title text-center">

        <h2 className="page-title text-center max-w-[1000px] mx-auto">Links for Application of <span>Provincial </span> Mineral Title</h2>

        <div className="provitional_menerial_title_main">
        <div className="provitional_menerial_title_inner">
        <ul>
        {applyingForMineralTitleData?.map((item,i) => 
          <li key={i}>  
            <div className="mineral_title_item">
               <div className="mineral_title_heading">{item?.title}</div>
               <div className="mineral_img">
                  <img className="max-w-[411px]" src={item?.image} alt=""/>
               </div>
            </div>
          </li>
        )}
        </ul>
        
        </div>
        </div>

        </div>
      </div>
    </Container>
    </>
  );
};

export default ApplyingForMineralTitle;
