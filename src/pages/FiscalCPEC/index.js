import React from "react";
import CPECBg from "../../assets/images/Cpecbg.png";
import CPECMap from "../../assets/images/CpecMap.png";
import CPECPort1 from "../../assets/images/CpecPort1.png";
import CPECPort2 from "../../assets/images/CpecPort2.png";
import CPECPort3 from "../../assets/images/CpecPort3.png";
import CPECPort4 from "../../assets/images/CpecPort4.png";
import CPECPort5 from "../../assets/images/CpecPort5.png";
import CPECMining from "../../assets/images/CpecMining.png";
import IntroContainer from "components/IntroContainer";
import { CpecCards } from "components/CpecProjectCards";
import { ShowMore } from "components/UI/ShowMore";
import BreadCrumbs from "components/Breadcrumbs";

// const cpecBreadCRumbItems = [{ title: "Home", href: "" }, { title: "Fiscal Incentive", href: "" }, { title: "CPEC" }];
const FiscalCPEC = () => {
  const cpecProjects = [
    {
      title: (
        <p>
          1320MW <span>Sahiwal</span> Coal-fired Plant
        </p>
      ),
      img: CPECPort1,
      projectCompleted: "Project Completed on 28th October 2017",
      currStatus: "Operational",
    },
    {
      title: (
        <p>
          1320MW Coal-fired Power Plant at Port Qasim <span>Karachi</span>
        </p>
      ),
      img: CPECPort2,
      projectCompleted: "Project Completed on 25th April 2018",
      currStatus: "Operational",
    },
    {
      title: (
        <p>
          1320MW China Hub Coal Power Project Hub <span>Balochistan</span>
        </p>
      ),
      img: CPECPort3,
      projectCompleted: "Project Completed on 27th August 2017",
      currStatus: "Operational",
    },
    {
      title: <p>660MW Engro Thar Coal Power Project</p>,
      img: CPECPort4,
      projectCompleted: "Project Completed on 10th July 2019",
      currStatus: "Operational",
    },
    {
      title: (
        <p>
          1320MW China Hub Coal Power Project Hub <span>Balochistan</span>
        </p>
      ),
      img: CPECPort5,
      projectCompleted: `Financial Close (FC) achieved on 30th Jan 2020 
      Project Completed on 30th September 2022`,
      currStatus: "Operational",
    },
  ];
  const breadcrumbs = [
    { path: "/", label: "Home" },
    { path: "/fiscal-incentives", label: "Fiscal Incentives" },
    { path: "/fiscal-CPEC", label: "CPEC" },
  ];
  return (
    <div className="fiscal-cpec-content relative">
       <div className=" absolute z-10 pl-[270px] pt-[50px] ">
      <BreadCrumbs breadcrumbs={breadcrumbs} white={true} />

      </div>
      <div className="fiscal-incents">
        {" "}
        <IntroContainer
          // breadCRumbItems={cpecBreadCRumbItems}
          title="CPEC"
          content="The China-Pakistan Economic Corridor (CPEC) is a flagship infrastructure development project that aims to enhance connectivity and foster economic cooperation between China and Pakistan. As part of China's Belt and Road Initiative (BRI), CPEC involves the construction of transportation networks, energy infrastructure, industrial zones, and other strategic projects across Pakistan. This ambitious initiative seeks to promote trade, investment, and regional integration, driving economic growth and development in both countries while strengthening their bilateral relations"
          backgroundImage={CPECBg}
          introHeight="602px"
        ></IntroContainer>
      </div>
      <div className="cpec-map">
        
        <img src={CPECMap} alt="map not available"></img>
        <div>
          {" "}
          <p>
            The China-Pakistan Economic Corridor (CPEC) presents a transformative opportunity to enhance mining
            opportunities in Pakistan by catalyzing infrastructure development, fostering technological advancement, and
            attracting foreign investment. Through CPEC, Pakistan can upgrade its transportation networks, such as
            roads, railways, and ports, facilitating the efficient transport of mining equipment, machinery, and
            minerals to and from mining sites. Additionally, CPEC projects like energy infrastructure development can
            address Pakistan's power deficits, ensuring reliable energy supply for mining operations
            <span id="more-content-fiscal" class="showmore-content" style={{ display: "none" }}>
              Moreover, collaboration with Chinese companies under CPEC can bring advanced mining technologies and
              expertise to Pakistan, improving efficiency, safety, and environmental sustainability in mining practices.
              Furthermore, the creation of Special Economic Zones (SEZs) along the CPEC route can incentivize investment
              in mining-related industries, such as mineral processing and value-added products manufacturing, driving
              economic growth and employment opportunities. Overall, CPEC serves as a catalyst for unlocking Pakistan's
              mining potential, fostering sustainable development, and contributing to the country's economic
              prosperity.
            </span>
          </p>
          <ShowMore idButton="show-more-btn-fiscal" idContent="more-content-fiscal"></ShowMore>
        </div>
      </div>
      <div className="cpec-projects">
        <h1>
          Projects Under <span style={{ color: "green" }}>CPEC</span>
        </h1>
        {cpecProjects.map((item, index) => (
          <CpecCards key={index} item={item} index={index} />
        ))}
      </div>
      <div className="cpec-dev-graph">
        {" "}
        <img src={CPECMining} alt="unavailable"></img>
      </div>
    </div>
  );
};
export default FiscalCPEC;
