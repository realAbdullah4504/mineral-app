import React from "react";
import BusinessInvestmentBg from "assets/images/businessInvestementStrategyBg.png";
import BusinessInvestmentDevelopment from "assets/images/businessinvestemntstrategydevelopment.png";
import BusinessInvestmentEcoSystem from "assets/images/businessinvestementstrategyecosystem.png";
import BreadCrumbs from "components/Breadcrumbs";
import { Container } from "components/UI";

function MineralDevelopmentStrategy() {
  const breadcrumbs = [
    { path: "/", label: "Home" },
    { path: "/business-investment", label: "Business & Investment" },
    { path: "#", label: "Mineral Development Strategy" },
  ];
  return (
    <div>
      <div
        className="mineral-development"
        style={{
          backgroundImage: `url(${BusinessInvestmentBg})`,
        }}
      >
        <div className="mineral-development-title-content">
          <div className="mineral-development-title-wrapper">
            <span className="mineral-development-title-border"></span>
            <h1 className="mineral-development-title">Mineral Development Strategies</h1>
          </div>
        </div>
      </div>
      <div className="mineral-developmen-strategy">
        <p>
          Pakistan is home to a competitive and extensive mineral wealth. The mineral development strategies takes into
          account radical and innovative measures for uplifting of the minerals sector with coordinated efforts of all
          stakeholders including provincial authorities. The new initiatives will greatly help exploit Pakistan’s true
          mineral potential.
        </p>
        <h1>
          National Mineral Development Programe -<span style={{ color: "#009969" }}>National Strategy</span>
        </h1>
      </div>
      <div className="mineral-development-strategy-graph">
        {" "}
        <img src={BusinessInvestmentDevelopment} alt="Business Investment Development" />
      </div>
      <div className="mineral-development-ecosystem">
        <h1>EcoSystem Of The Mining Sector</h1>
        <p>
          The Federal Government drives & integrates all relevant stakeholders and creates a conducive eco-system for
          the mining industry development. The ecosystem is a cohesive framework of policies, incentives and resources
          coordinated by all relevant stakeholders under single governing structure lead by the Planning Commission of
          Pakistan. The end result of the framework/ecosystem is to integrate and optimize the mine-to-market value
          chain by aligning the production with national consumption and export potential of the country
        </p>
      </div>
      ;
      <div className="mineral-development-ecosystem-graph">
        {" "}
        <img src={BusinessInvestmentEcoSystem} alt="Business Investment Development" />
      </div>
    </div>
  );
}

export default MineralDevelopmentStrategy;
