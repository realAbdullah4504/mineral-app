import React from "react";
import BusinessInvestmentBg from "assets/images/businessInvestementStrategyBg.png";
import BusinessInvestmentDevelopment from "assets/images/businessinvestemntstrategydevelopment.png";
import BusinessInvestmentEcoSystem from "assets/images/businessinvestementstrategyecosystem.png";

function MineralDevelopmentStrategy() {
    return <div >
       <div  style={{
      width: "100%",
      height: "401px",
      backgroundImage: `url(${BusinessInvestmentBg})`,
      backgroundSize: "cover",
      display: "flex",  
       alignItems: "center", 
         justifyContent: "center",
        
    
    }}>
      <div  style={{
      width: "60%",
    backgroundColor: "white",
      display: "flex",  
       alignItems: "center", 
         justifyContent: "center",
          fontSize: "70px",
             padding: "20px",
         wordSpacing: "20px",
         fontWeight:"700"
    
    }}> Mineral Development Strategy</div>
    
    </div>
<div style={{
width:"70%",
  height:"300px",
      display: "flex",  
      flexDirection:"column",
       alignItems: "center", 
         justifyContent: "space-evenly",
    margin:"auto",
             padding: "20px",
       alignSelf:"center"
    
    }}>
        <p style={{fontSize:"20px"}} >
        Pakistan is home to a competitive and extensive mineral wealth. The mineral development strategies takes into account radical and innovative measures for uplifting of the minerals sector with coordinated efforts of all stakeholders including provincial authorities. The new initiatives will greatly help exploit Pakistan’s true mineral potential.
        </p>
      <div  style={{
fontSize: "40px",
    
fontWeight:"400"
    }}>National Mineral Development Programe -<span style={{ color: '#009969' }}>National Strategy</span>
</div>

    </div>
    <div  style={{
      width: "100%",
      height:"1074px",
      display: "flex",  

       alignItems: "center", 
         justifyContent: "center",
         
    
    }}> <img src={BusinessInvestmentDevelopment} alt="Business Investment Development" /></div>
    <div style={{
width:"70%",
  height:"300px",
      display: "flex",  
      flexDirection:"column",

         justifyContent: "space-evenly",
    margin:"auto",
             padding: "20px",
       alignSelf:"center"
    
    }}>
      <div  style={{
fontSize: "40px",
    
fontWeight:"400"
    }}>ECOSYSTEM OF THE MINING SECTOR


    </div>
    <p style={{fontSize:"20px"}} >
    The Federal Government drives & integrates all relevant stakeholders and creates a conducive eco-system for the mining industry development. The ecosystem is a cohesive framework of policies, incentives and resources coordinated by all relevant stakeholders under single governing structure lead by the Planning Commission of Pakistan. The end result of the framework/ecosystem is to integrate and optimize the mine-to-market value chain by aligning the production with national consumption and export potential of the country
        </p>

        </div>;
        <div  style={{
      width: "100%",
      height:"497px",
      display: "flex",  

       alignItems: "center", 
         justifyContent: "center",
         
    
    }}> <img src={BusinessInvestmentEcoSystem} alt="Business Investment Development"    /></div>
    </div>;
}


export default MineralDevelopmentStrategy;

