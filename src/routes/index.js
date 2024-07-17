import React, { Suspense, lazy } from "react";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "components";

const Home = lazy(() => import("../pages/home"));
const MineralPotential = lazy(() => import("../pages/mineral-potential"));
const Login = lazy(() => import("../pages/login"));
const InvestmentOpportunity = lazy(() =>
  import("../pages/investment-opportunities")
);
const ATGDBusiness = lazy(() => import("../pages/ATGDBusiness"));

const InteractiveGisPortal = lazy(() =>
  import("../pages/InteractiveGisPortal")
);
const BusinessInvestment = lazy(() => import("../pages/BusinessInvestment"));
const MineralDevelopmentStrategy = lazy(() =>
  import("../pages/MineralDevelopmentStrategy")
);
const FiscalIncentives = lazy(() => import("../pages/FiscalIncentives"));
const SpecialEconomicZones = lazy(() =>
  import("../pages/SpecialEconomicZones")
);
const FiscalExportProcessing = lazy(() =>
  import("../pages/fiscalExportProcessing")
);
const Governance = lazy(() => import("../pages/governance"));
const ActsLaws = lazy(() => import("../pages/acts-laws"));
const RulesRegulations = lazy(() => import("../pages/rules-regulations"));
const MineralTestingLabs = lazy(() => import("../pages/MineralTestingLabs"));
const TestInformation = lazy(() => import("../pages/Test-Information"));
const FiscalCPEC = lazy(() => import("../pages/FiscalCPEC"));
const StartingNewBusiness = lazy(() => import("../pages/StartingNewBusiness"));
const SpecialInvestmentFacilities = lazy(() =>
  import("../pages/SpecialInvestmentFacilities")
);
const InstitutionalArrangement = lazy(() =>
  import("../pages/InstitutionalArrangement")
);
const LegalPolicies = lazy(() => import("../pages/policies"));
const MiningOperations = lazy(() => import("../pages/mining-operations"));
const HealthSafety = lazy(() => import("../pages/health-safety"));
const ConsessionRules = lazy(() => import("../pages/consession-rules"));
const LaborWelfare = lazy(() => import("../pages/labor-welfare"));
const LegalFramework = lazy(() => import("../pages/legal-framework"));
const ApplyingForMineralTitle = lazy(() =>
  import("../pages/ApplyingForMineralTitle")
);
const DevelopmentSchemes = lazy(() => import("../pages/DevelopmentSchemes"));
const InitiativesProjects = lazy(() => import("../pages/initiatives"));
const MajorMining = lazy(() => import("../pages/major-mining"));

const FiscalTax = lazy(() => import('../pages/fiscalTax'));
const FiscalTab = lazy(() => import('../pages/FiscalTab'));
const Royalties = lazy(() => import('../pages/Roylaties'));
const Cess = lazy(() => import('../pages/cess'));
// const Fiscal = lazy(() => import('../pages/fiscal'));
const TrainingSkill = lazy(() => import("../pages/training-skill"));

const AppRouter = () => (
  <Router>
    <Suspense fallback={"...Loading"}>
      <Routes>
        <Route
          path="/"
          element={<PublicRoute component={Home} layout={DashboardLayout} />}
        />
        <Route
          path="/login"
          element={<PublicRoute component={Login} layout={DashboardLayout} />}
        />
        <Route
          path="/mineral-potential"
          element={
            <PublicRoute
              component={MineralPotential}
              layout={DashboardLayout}
            />
          }
        />
        {/* <Route path="/fiscal" element={<PublicRoute component={Fiscal} layout={DashboardLayout} />} /> */}

        <Route
          path="/special-economic-zones"
          element={
            <PublicRoute
              component={SpecialEconomicZones}
              layout={DashboardLayout}
            />
          }
        />
        <Route
          path="/export-processing-zones"
          element={
            <PublicRoute
              component={FiscalExportProcessing}
              layout={DashboardLayout}
            />
          }
        />
        <Route
          path="/investment-opportunities"
          element={
            <PublicRoute
              component={InvestmentOpportunity}
              layout={DashboardLayout}
            />
          }
        />
        <Route
          path="/access-to-geological-data"
          element={
            <PublicRoute component={ATGDBusiness} layout={DashboardLayout} />
          }
        />
        <Route
          path="/gis-portal"
          element={
            <PublicRoute
              component={InteractiveGisPortal}
              layout={DashboardLayout}
            />
          }
        />
        <Route
          path="/business-investment"
          element={
            <PublicRoute
              component={BusinessInvestment}
              layout={DashboardLayout}
            />
          }
        />
        <Route
          path="/applying-for-mineral-title"
          element={
            <PublicRoute
              component={ApplyingForMineralTitle}
              layout={DashboardLayout}
            />
          }
        />
        <Route
          path="/development-schemes"
          element={
            <PublicRoute
              component={DevelopmentSchemes}
              layout={DashboardLayout}
            />
          }
        />

        <Route
          path="/mineral-development-strategy"
          element={
            <PublicRoute
              component={MineralDevelopmentStrategy}
              layout={DashboardLayout}
            />
          }
        />
        <Route
          path="/fiscal-incentives"
          element={
            <PublicRoute
              component={FiscalIncentives}
              layout={DashboardLayout}
            />
          }
        />
        <Route
          path="/institutional-arrangement"
          element={
            <PublicRoute
              component={InstitutionalArrangement}
              layout={DashboardLayout}
            />
          }
        />
        <Route
          path="/legal-policies"
          element={
            <PublicRoute component={LegalPolicies} layout={DashboardLayout} />
          }
        />
        <Route
          path="/mining-operations"
          element={
            <PublicRoute
              component={MiningOperations}
              layout={DashboardLayout}
            />
          }
        />
        <Route
          path="/health-safety"
          element={
            <PublicRoute component={HealthSafety} layout={DashboardLayout} />
          }
        />
        <Route
          path="/consession-rules"
          element={
            <PublicRoute component={ConsessionRules} layout={DashboardLayout} />
          }
        />
        <Route
          path="/labor-welfare"
          element={
            <PublicRoute component={LaborWelfare} layout={DashboardLayout} />
          }
        />
        <Route
          path="/legal-framework"
          element={
            <PublicRoute component={LegalFramework} layout={DashboardLayout} />
          }
        />
        <Route
          path="/fiscal-CPEC"
          element={
            <PublicRoute component={FiscalCPEC} layout={DashboardLayout} />
          }
        />

        <Route
          path="/starting-new-business"
          element={
            <PublicRoute
              component={StartingNewBusiness}
              layout={DashboardLayout}
            />
          }
        />

        <Route
          path="/special-investment-facilities"
          element={
            <PublicRoute
              component={SpecialInvestmentFacilities}
              layout={DashboardLayout}
            />
          }
        />
        <Route
          path="/fiscal-tax"
          element={
            <PublicRoute component={FiscalTax} layout={DashboardLayout} />
          }
        />
        <Route
          path="/governance"
          element={
            <PublicRoute component={Governance} layout={DashboardLayout} />
          }
        />
        <Route
          path="/acts-laws"
          element={
            <PublicRoute component={ActsLaws} layout={DashboardLayout} />
          }
        />
        <Route
          path="/rules-regulations"
          element={
            <PublicRoute
              component={RulesRegulations}
              layout={DashboardLayout}
            />
          }
        />
        <Route
          path="/mineral-testing-labs"
          element={
            <PublicRoute
              component={MineralTestingLabs}
              layout={DashboardLayout}
            />
          }
        />
        <Route
          path="/test-information"
          element={
            <PublicRoute component={TestInformation} layout={DashboardLayout} />
          }
        />
        <Route
          path="/initiatives-projects"
          element={
            <PublicRoute component={InitiativesProjects} layout={DashboardLayout} />
          }
        />
        <Route
          path="/major-mining"
          element={
            <PublicRoute component={MajorMining} layout={DashboardLayout} />
          }
        />
        <Route
          path="/training-skill"
          element={
            <PublicRoute component={TrainingSkill} layout={DashboardLayout} />
          }
        />
          <Route
          path="/fiscal-tab"
          element={
            <PublicRoute
              component={FiscalTab}
              layout={DashboardLayout}
            />
          }
        />
         <Route
          path="/royalties"
          element={
            <PublicRoute
              component={Royalties}
              layout={DashboardLayout}
            />
          }
        />
          <Route
          path="/cess"
          element={
            <PublicRoute
              component={Cess}
              layout={DashboardLayout} />
          }
            />
      </Routes>
    </Suspense>
  </Router>
);

export default AppRouter;
