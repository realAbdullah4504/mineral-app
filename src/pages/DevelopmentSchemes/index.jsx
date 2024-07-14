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
                        <li>Assessment Study & Establishment of Mines Monitoring and Surveillance Units in Mineral Bearing Areas of Khyber Pakhtunkhwa.</li>
                        <li>Geological Mapping of Khyber Pakhtunkhwa.</li>
                        <li>Fencing of Fizzagat Emerald Mine Swat</li>
                        <li>Capacity Building of Mineral Testing Laboratory</li>
                        <li>Establishment of Mining Cadast System Phase-II</li>
                        <li>Establishment of Crushing Zone in Khyber Pakhtunkhwa</li>
                        <li>Rehabilitation of Mine Rescue safety & Training center Jalozai District Nowshera</li>
                      </ul>
                    </div>

                    <div className={`${intiativeActive === "balochistan" ? "active" : "" } balochistan_content intiative_contents`} data-id="balochistan">
                      <div className="intiative_right_content_heading mb-5">Balochistan Government</div>
                      <ul>
                        <li>Capacity Building of MinerConstruction of 20 km black top road from PMDC coal mines Shahrag to Nakas via Hazar dum road, Harnai.</li>
                        <li>Construction of bypass form duki mines area to loralai.</li>
                        <li>Installation of digital weigthbridges at Hanna, Degari, Rakhni, Zhob & Lung Lohaar (Hub)</li>
                        <li>Construction of new mineral check post at Noshki, Pishin, Loralai, Mastung.</li>
                        <li>Automation of royalty regime in mining sector, installation of weigh machines & bridges & est of check post</li>
                        <li>Road from aari pir to saroona  district khuzdar 30 kms  (mines)</li>
                        <li>Construction of mineral complex in Balochistan at Quetta.</li>
                        <li>Mineral resource mapping in balochistan</li>
                      </ul>
                    </div>

                    <div className={`${intiativeActive === "punjab" ? "active" : "" } punjab_content intiative_contents`} data-id="punjab">
                      <div className="intiative_right_content_heading mb-5">Punjab Government</div>
                      <ul>
                        <li>Rehabilitation of Office of Deputy Director, Mines & Minerals, Rawalpindi</li>
                        <li>Evaluation of Placer Gold in River Indus, District Attock</li>
                        <li>Rehabilitation of Office and Residences of Assistant Director Mines & Minerals, Attock</li>
                        <li>Strengthening of Punjab School of Mines, Katas, District Chakwal</li>
                        <li>Construction of Office for Inspector and Junior Inspector of Mines, Chakwal</li>
                        <li>Establishment of Mines Sample Testing Laboratory, Chakwal</li>
                        <li>Rehabilitation of Mines Rescue & Safety Sub-Station, Choa Saiden Shah, District Chakwal</li>
                        <li>Establishment of Geo Mineral Gallery, Salt Range, Kallar Kahar, District Chakwal</li>
                        <li>Rehabilitation of Office and Residences of Punjab School of Mines, Katas, District Chakwal</li>
                        <li>Construction of Office and Residences for Inspector of Mines, Sargodha</li>
                        <li>Rehabilitation of Mines Rescue & Safety Station, Khushab</li>
                        <li>Establishment of Office & Residences for Junior Inspector of Mines, Khushab</li>
                        <li>Construction of Residences for Officers/Officials of Deputy Director Small Scale Mining, Khushab</li>
                      </ul>
                    </div>

                    <div className={`${intiativeActive === "gilgit" ? "active" : "" } gilgit_content intiative_contents`} data-id="gilgit">
                      <div className="intiative_right_content_heading mb-5">Gilgit Government</div>
                      <ul>
                        <li>Financial and Technical Assistance for Lapidary Center in GilgitBaltistan.</li>
                        <li>Financial & Technical Assistance for Capacity Building of Gemstones Miners in GB</li>
                        <li>Estab. of Inspectorate of Mines and Minerals GB</li>
                        <li>Establishment of Minerals Check Post in Exit Points of GB</li>
                        <li>Identification of Locations of Quartz, Feldspar and Lithium  in Entire GB</li>
                        <li>Establishment of Heavy Duty Weighbridge System in Collection of Royalty in Exit Points of GB.</li>
                        <li>Const. of Additional Rooms in Existing Directorate Office Building at Gilgit & District Office Building at Astore
                        Exploration/Feasibility Study of Marble and Granite Deposits in GB.</li>
                        <li>Exploration and Feasibility Study of Iron and Copper Ore in Entire GB</li>
                      </ul>
                    </div>

                    <div className={`${intiativeActive === "ajk" ? "active" : "" } gilgit_content intiative_contents`} data-id="ajk">
                      <div className="intiative_right_content_heading mb-5">Ajk Government</div>
                      <ul>
                        <li>Exploration and Evaluation for Ruby Occurrences/Deposits in Chitta Katha, Panj Katha & Usman Bahaik (Shounthar Nala) Dist. Neelum Azad Kashmir</li>
                        <li>Provision of Equipment for Resource Mapping & Exploration Map Updation in AJ&K</li>
                        <li>Feasibility Study/Bankable Document of 6 Dimension Stone Mineral Deposits for Public Sector Exploitation/Investment at District Neelum Valley AJ&K</li>
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
