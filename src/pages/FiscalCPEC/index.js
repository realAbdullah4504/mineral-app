import React from "react";
import CPECBg from "../../assets/images/Cpecbg.png"
import CPECMap from "../../assets/images/CpecMap.png"
import CPECPort1 from "../../assets/images/CpecPort1.png"
import CPECPort2 from "../../assets/images/CpecPort2.png"
import CPECPort3 from "../../assets/images/CpecPort3.png"
import CPECPort4 from "../../assets/images/CpecPort4.png"
import CPECPort5 from "../../assets/images/CpecPort5.png"
import CPECMining from "../../assets/images/CpecMining.png"
import IntroContainer from "components/IntroContainer";
import { CpecCards } from "components/CpecProjectCards";
import { Breadcrumb } from 'antd';


 const cpecBreadCRumbItems=[{title:"Home",href:''},{title:"Fiscal Incentive",href:''},{title:"CPEC"}]
const FiscalCPEC = () => {
  const handleButtonClick = () => {
    const moreContent = document.getElementById('more-content');
    const showMoreBtn = document.getElementById('show-more-btn');


 if (moreContent.style.display === 'none' || moreContent.style.display === '') {
      moreContent.style.display = 'block'; 
      showMoreBtn.textContent = 'Show Less';
    } else {
      moreContent.style.display = 'none'; 
      showMoreBtn.textContent = 'Show More';
    }
  };
  
  const cpecProjects=[{
title:<p>1320MW <span>Sahiwal </span>Coal-fired Plant</p>,
img:CPECPort1,
projectCompleted:'Project Completed on 28th October 2017',
currStatus:'Operational',
},{
  title:<p>1320MW <span>Sahiwal </span>Coal-fired Plant</p>,
  img:CPECPort2,
  projectCompleted:'Project Completed on 28th October 2017',
  currStatus:'Operational'},{
    title:<p>1320MW <span>Sahiwal </span>Coal-fired Plant</p>,
    img:CPECPort3,
    projectCompleted:'Project Completed on 28th October 2017',
    currStatus:'Operational'},{
      title:<p>1320MW <span>Sahiwal </span>Coal-fired Plant</p>,
      img:CPECPort4,
      projectCompleted:'Project Completed on 28th October 2017',
      currStatus:'Operational'},{
      title:<p>1320MW <span>Sahiwal </span>Coal-fired Plant</p>,
      img:CPECPort4,
      projectCompleted:'Project Completed on 28th October 2017',
      currStatus:'Operational'}
]
  
  return (
<div className="fiscal-cpec-content">
  <div className="fiscal-incents">  <IntroContainer breadCRumbItems={cpecBreadCRumbItems} title="CPEC" content='  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis ut lorem ultricies sollicitudin.
          Mauris varius eros vitae purus posuere, vel bibendum urna accumsan. Sed feugiat lorem et felis auctor, at
          tempor risus convallis. In hac habitasse platea dictumst. Phasellus semper augue et mi dapibus, sit amet
          sollicitudin Sed feugiat lorem et felis auctor, at temp' backgroundImage={CPECBg} introHeight="602px"></IntroContainer></div>
          <div className="cpec-map">
          <img src={CPECMap} alt='map not available'></img>
     <div>     <p>The China-Pakistan Economic Corridor (CPEC) presents a transformative opportunity to enhance mining opportunities in Pakistan by catalyzing infrastructure development, fostering technological advancement, and attracting foreign investment. Through CPEC, Pakistan can upgrade its transportation networks, such as roads, railways, and ports, facilitating the efficient transport of mining equipment, machinery, and minerals to and from mining sites. Additionally, CPEC projects like energy infrastructure development can address Pakistan's power deficits, ensuring reliable energy supply for mining operations<span id="more-content" class="showmore-content" style={{display:'none'}}>The China-Pakistan Economic Corridor (CPEC) presents a transformative opportunity to enhance mining opportunities in Pakistan by catalyzing infrastructure development, fostering technological advancement, and attracting foreign investment. Through CPEC, Pakistan can upgrade its transportation networks, such as roads, railways, and ports, facilitating the efficient transport of mining equipment, machinery, and minerals to and from mining sites. Additionally, CPEC projects like energy infrastructure development can address Pakistan's power deficits, ensuring reliable energy supply for mining operations.
    </span>
  </p>
  <button id="show-more-btn" className="show-more-btn" onClick={handleButtonClick}>Show More</button></div>

          </div>
          <div className='cpec-projects'> 
            <h1>Projects Under <span style={{color:'green'}}>CPEC</span></h1>
            {cpecProjects.map((item, index) => (
        <CpecCards key={index} item={item} index={index} />
      ))}
             </div>
          <div className="cpec-dev-graph">  <img src={CPECMining} alt='unavailable'></img></div>
          
      
          </div>
  );
};
export default FiscalCPEC;
