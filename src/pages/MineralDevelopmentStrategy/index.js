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
    
    }}> Mineral Development Strategies</div>
    
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis ut lorem ultricies sollicitudin.
          Mauris varius eros vitae purus posuere, vel bibendum urna accumsan. Sed feugiat lorem et felis auctor, at
          tempor risus convallis. In hac habitasse platea dictumst. Phasellus semper augue et mi dapibus, sit amet
          sollicitudin Sed feugiat lorem et felis auctor, at tempor risus convallis. In hac habitasse platea dictumst.
          Phasellus semper augue et mi dapibus, sit amet sollicitudin
        </p>
      <div  style={{
fontSize: "40px",
    
fontWeight:"400"
    }}>-National Mineral Development Programe -<span style={{ color: '#009969' }}>National Strategy</span>
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
    }}>EcoSystem Of The Mining Sector


    </div>
    <p style={{fontSize:"20px"}} >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis ut lorem ultricies sollicitudin.
          Mauris varius eros vitae purus posuere, vel bibendum urna accumsan. Sed feugiat lorem et felis auctor, at
          tempor risus convallis. In hac habitasse platea dictumst. Phasellus semper augue et mi dapibus, sit amet
          sollicitudin Sed feugiat lorem et felis auctor, at tempor risus convallis. In hac habitasse platea dictumst.
          Phasellus semper augue et mi dapibus, sit amet sollicitudin
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

