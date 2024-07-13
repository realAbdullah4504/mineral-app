import React from "react";
import IntroContainer from "components/IntroContainer";

import BusinessCards from "./BusinessCards";

function StartingNewBusiness() {

    const cpecBreadCRumbItems=[{title:"Home",href:''},{title:"Fiscal Incentive",href:''},{title:"CPEC"}]
    const miningPoints=[
        
        {title:'Sole Proprietorship', description:<p>A sole proprietorship is an unincorporated business conducted by only one person and does not distinguish between the owner and the company. A sole proprietorship's owner is accountable for the company's debts, losses, liabilities, and all gains. The company registration process in this case is carried out through the Federal Board of Revenue (FBR).</p>},
        {title:'Sole Proprietorship', description:<p>A sole proprietorship is an unincorporated business conducted by only one person and does not distinguish between the owner and the company. A sole proprietorship's owner is accountable for the company's debts, losses, liabilities, and all gains. The company registration process in this case is carried out through the Federal Board of Revenue (FBR).</p>},  {title:'Sole Proprietorship', description:<p>A sole proprietorship is an unincorporated business conducted by only one person and does not distinguish between the owner and the company. A sole proprietorship's owner is accountable for the company's debts, losses, liabilities, and all gains. The company registration process in this case is carried out through the Federal Board of Revenue (FBR).</p>}
    ,  {title:'Sole Proprietorship', description:<p>A sole proprietorship is an unincorporated business conducted by only one person and does not distinguish between the owner and the company. A sole proprietorship's owner is accountable for the company's debts, losses, liabilities, and all gains. The company registration process in this case is carried out through the Federal Board of Revenue (FBR).</p>}
    ,  {title:'Sole Proprietorship', description:<p>A sole proprietorship is an unincorporated business conducted by only one person and does not distinguish between the owner and the company. A sole proprietorship's owner is accountable for the company's debts, losses, liabilities, and all gains. The company registration process in this case is carried out through the Federal Board of Revenue (FBR).</p>}
    ,  {title:'Sole Proprietorship', description:<p>A sole proprietorship is an unincorporated business conducted by only one person and does not distinguish between the owner and the company. A sole proprietorship's owner is accountable for the company's debts, losses, liabilities, and all gains. The company registration process in this case is carried out through the Federal Board of Revenue (FBR).</p>}
    
    
    ]
    return <div >
     
    <div className="starting-business-intro">  <IntroContainer breadCRumbItems={cpecBreadCRumbItems} title="Registering your Mining Business in Pakistan" content='  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis ut lorem ultricies sollicitudin.
          Mauris varius eros vitae purus posuere, vel bibendum urna accumsan. Sed feugiat lorem et felis auctor, at
          tempor risus convallis. In hac habitasse platea dictumst. Phasellus semper augue et mi dapibus, sit amet
          sollicitudin Sed feugiat lorem et felis auctor, at temp' introHeight="350px"></IntroContainer></div>
<div>
{miningPoints.map((item,index)=><BusinessCards item={item} index={index}></BusinessCards>)}

</div>
    </div>;
}
export default StartingNewBusiness;