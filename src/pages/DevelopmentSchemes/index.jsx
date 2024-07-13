import React from "react";
import BreadCrumbs from "components/Breadcrumbs";
import { Container } from "components/UI";
import BusinessInvestmentBg from "assets/images/businessInvestementStrategyBg.png";
import BusinessInvestmentDevelopment from "assets/images/businessinvestemntstrategydevelopment.png";
import BusinessInvestmentEcoSystem from "assets/images/businessinvestementstrategyecosystem.png";
const DevelopmentSchemes = () => {
  const breadcrumbs = [
    { path: '/', label: 'Home' },
    { path: '/legal-framework', label: 'Legal Framework' },
    { path: '/', label: 'Governance' },
    { path: '#', label: 'Institutional Arrangement' },
  ];

  return (
    <>
    <div >
    {/* <Container classes="bg-transparent">
      <BreadCrumbs breadcrumbs={breadcrumbs} />
      
    </Container> */}
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
    
    }}>Development Initiatives</div>
    
    </div>

    <Container>
    <div className="page-title-main">
          <p className="intro_parahgraph font-helvetica mt-10 mb-0">
          Mineral development initiatives in Pakistan encompass a range of endeavors aimed at harnessing the country's rich mineral resources for economic growth and sustainable development. These schemes include exploration, extraction, processing, and value addition projects across diverse mineral sectors such as coal, copper, gold, limestone, and gemstones. Government policies and incentives, coupled with private sector investments and international collaborations, drive these schemes to promote mineral resource development, attract investments, create employment opportunities, and boost exports.
          </p>
      </div>
    <div className="intiatives">
      
    </div>
    </Container>
   
    </div>;
 
    </>
    
  );
};

export default DevelopmentSchemes;
