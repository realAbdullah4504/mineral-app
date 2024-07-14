import React, {useState} from "react";
import BreadCrumbs from "components/Breadcrumbs";
import { Container } from "components/UI";
import BusinessInvestmentBg from "assets/images/businessInvestementStrategyBg.png";
const DevelopmentSchemes = () => {
  const [intiativeActive, setIntiativeActive] = useState("federal");
  const breadcrumbs = [
    { path: '/', label: 'Home' },
    { path: '/legal-framework', label: 'Legal Framework' },
    { path: '/', label: 'Governance' },
    { path: '#', label: 'Institutional Arrangement' },
  ];

  const InstiativeTabsList = [
    {
      "title": "Federal Gov.",
      "slug": "federal"
    },
    {
      "title": "KPK",
      "slug": "kpk"
    },
    {
      "title": "Balochistan",
      "slug": "balochistan"
    },
    {
      "title": "Punjab",
      "slug": "punjab"
    },
    {
      "title": "Gilgit",
      "slug": "gilgit"
    },
    {
      "title": "Ajk",
      "slug": "ajk"
    },
    
  ];

  const handleItemClick = (id) => {
    setIntiativeActive(id);
  };


  return (
    <>
      <div >
        
        <div className="flex-wrap" style={{
          width: "100%",
          height: "401px",
          backgroundImage: `url(${BusinessInvestmentBg})`,
          backgroundSize: "cover",
          display: "flex",
          

        }}>
          <Container classes="flex w-full breadcrums_white">
       <BreadCrumbs breadcrumbs={breadcrumbs} />
      
       </Container>
          
          <Container classes="text-left flex w-full justify-start inline-block">
           <div className="bg-white xl:text-[64px] text-[30px] font-bold rounded px-10 py-5 flex items-center"><span className="mr-2 inline-flex w-1 h-[50px] rounded bg-[#009969]"></span> <span>Development Initiatives</span></div>
          </Container>

        </div>



      </div>
       <Container>
       <div className="page-title-main">
          <p className="intro_parahgraph font-helvetica xl:my-10 my-5">
            Mineral development initiatives in Pakistan encompass a range of endeavors aimed at harnessing the country's rich mineral resources for economic growth and sustainable development. These schemes include exploration, extraction, processing, and value addition projects across diverse mineral sectors such as coal, copper, gold, limestone, and gemstones. Government policies and incentives, coupled with private sector investments and international collaborations, drive these schemes to promote mineral resource development, attract investments, create employment opportunities, and boost exports.
          </p>
        </div>
       </Container>
        <div className="intiatives_main">
          <div className="intiative_title subpage_title font-semibold mb-5 xl:text-[50px] text-[30px] text-center">Initiatives</div>
          <div className="intiatives_Inner">
            <div className="intiatives_left">
              <div className="intiatives_left_inner">
                <ul>
                  {InstiativeTabsList?.map((item,i) =>
                  <li onClick={() => handleItemClick(item.slug)} id={item?.slug} key={i} className={`${item?.slug === intiativeActive ? "active" : "" } intiative_left_heading`}> {item?.title}</li>
                  )}
                </ul>
              </div>
            </div>
            <div className="intiatives_right">
              <div className="intiative_right_inner">
                <div className="intiative_right_content_content max-w-[918px] mx-auto">
                    
                    <div className={`${intiativeActive === "federal" ? "active" : "" } federal_content intiative_contents`} data-id="federal">
                      <div className="intiative_right_content_heading mb-5">Federal Government</div>
                      <ul>
                        <li>Accelerated Geological Mapping Using Modern Satellite Imaging Based Technologies for Unmapped Areas in Pakistan</li>
                        <li>Geological Mapping of 50 Toposheets out of 354 Unmapped Toposheets of Outcrop Area of Balochistan Province</li>
                        <li>National Mineral Data Center</li>
                        <li>Accelerated Geological Mapping using Satellite Imaging-Based Technologies for Unmapped Areas in Pakistan</li>
                        <li>Harmonization of legal and regulatory framework</li>
                        <li>HR Development Plan</li>
                        <li>Provision of critical infrastructure</li>
                        <li>Sustainable coal utilization policy</li>
                      </ul>
                    </div>

                    <div className={`${intiativeActive === "kpk" ? "active" : "" } kpk_content intiative_contents`} data-id="kpk">
                      <div className="intiative_right_content_heading mb-5">KPK Government</div>
                      <ul>
                        <li>Accelerated Geological Mapping Using Modern Satellite Imaging Based Technologies for Unmapped Areas in Pakistan</li>
                        <li>Geological Mapping of 50 Toposheets out of 354 Unmapped Toposheets of Outcrop Area of Balochistan Province</li>
                        <li>National Mineral Data Center</li>
                        <li>Accelerated Geological Mapping using Satellite Imaging-Based Technologies for Unmapped Areas in Pakistan</li>
                        <li>Harmonization of legal and regulatory framework</li>
                        <li>HR Development Plan</li>
                        <li>Provision of critical infrastructure</li>
                        <li>Sustainable coal utilization policy</li>
                      </ul>
                    </div>

                    <div className={`${intiativeActive === "balochistan" ? "active" : "" } balochistan_content intiative_contents`} data-id="balochistan">
                      <div className="intiative_right_content_heading mb-5">Balochistan Government</div>
                      <ul>
                        <li>Accelerated Geological Mapping Using Modern Satellite Imaging Based Technologies for Unmapped Areas in Pakistan</li>
                        <li>Geological Mapping of 50 Toposheets out of 354 Unmapped Toposheets of Outcrop Area of Balochistan Province</li>
                        <li>National Mineral Data Center</li>
                        <li>Accelerated Geological Mapping using Satellite Imaging-Based Technologies for Unmapped Areas in Pakistan</li>
                        <li>Harmonization of legal and regulatory framework</li>
                        <li>HR Development Plan</li>
                        <li>Provision of critical infrastructure</li>
                        <li>Sustainable coal utilization policy</li>
                      </ul>
                    </div>

                    <div className={`${intiativeActive === "punjab" ? "active" : "" } punjab_content intiative_contents`} data-id="punjab">
                      <div className="intiative_right_content_heading mb-5">Punjab Government</div>
                      <ul>
                        <li>Accelerated Geological Mapping Using Modern Satellite Imaging Based Technologies for Unmapped Areas in Pakistan</li>
                        <li>Geological Mapping of 50 Toposheets out of 354 Unmapped Toposheets of Outcrop Area of Balochistan Province</li>
                        <li>National Mineral Data Center</li>
                        <li>Accelerated Geological Mapping using Satellite Imaging-Based Technologies for Unmapped Areas in Pakistan</li>
                        <li>Harmonization of legal and regulatory framework</li>
                        <li>HR Development Plan</li>
                        <li>Provision of critical infrastructure</li>
                        <li>Sustainable coal utilization policy</li>
                      </ul>
                    </div>

                    <div className={`${intiativeActive === "gilgit" ? "active" : "" } gilgit_content intiative_contents`} data-id="gilgit">
                      <div className="intiative_right_content_heading mb-5">Gilgit Government</div>
                      <ul>
                        <li>Accelerated Geological Mapping Using Modern Satellite Imaging Based Technologies for Unmapped Areas in Pakistan</li>
                        <li>Geological Mapping of 50 Toposheets out of 354 Unmapped Toposheets of Outcrop Area of Balochistan Province</li>
                        <li>National Mineral Data Center</li>
                        <li>Accelerated Geological Mapping using Satellite Imaging-Based Technologies for Unmapped Areas in Pakistan</li>
                        <li>Harmonization of legal and regulatory framework</li>
                        <li>HR Development Plan</li>
                        <li>Provision of critical infrastructure</li>
                        <li>Sustainable coal utilization policy</li>
                      </ul>
                    </div>

                    <div className={`${intiativeActive === "ajk" ? "active" : "" } gilgit_content intiative_contents`} data-id="ajk">
                      <div className="intiative_right_content_heading mb-5">Ajk Government</div>
                      <ul>
                        <li>Accelerated Geological Mapping Using Modern Satellite Imaging Based Technologies for Unmapped Areas in Pakistan</li>
                        <li>Geological Mapping of 50 Toposheets out of 354 Unmapped Toposheets of Outcrop Area of Balochistan Province</li>
                        <li>National Mineral Data Center</li>
                        <li>Accelerated Geological Mapping using Satellite Imaging-Based Technologies for Unmapped Areas in Pakistan</li>
                        <li>Harmonization of legal and regulatory framework</li>
                        <li>HR Development Plan</li>
                        <li>Provision of critical infrastructure</li>
                        <li>Sustainable coal utilization policy</li>
                      </ul>
                    </div>
                   

                </div>
              </div>
            </div>
          </div>
        </div>
    </>

  );
};

export default DevelopmentSchemes;
