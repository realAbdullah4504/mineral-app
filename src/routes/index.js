import React, { Suspense, lazy } from "react";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "components";

const Home = lazy(() => import("../pages/home"));
const MineralPotential = lazy(() => import("../pages/mineral-potential"));
const Login = lazy(() => import("../pages/login"));
const InvestmentOpportunity = lazy(() => import("../pages/investment-opportunities"));
const ATGDBusiness = lazy(() => import("../pages/ATGDBusiness"));
const InteractiveGisPortal = lazy(() => import("../pages/InteractiveGisPortal"));
const BusinessInvestment = lazy(() => import("../pages/BusinessInvestment"));
const MineralDevelopmentStrategy = lazy(() => import("../pages/MineralDevelopmentStrategy"));
const FiscalIncentives = lazy(() => import("../pages/FiscalIncentives"));
const Fiscal = lazy(() => import("../pages/fiscal"));
const FiscalCPEC = lazy(() => import("../pages/FiscalCPEC"));
const StartingNewBusiness = lazy(() => import("../pages/StartingNewBusiness"));
const SpecialInvestmentFacilities = lazy(() => import("../pages/SpecialInvestmentFacilities"));
const AppRouter = () => (
  <Router>
    <Suspense fallback={"...Loading"}>
      <Routes>
        <Route path="/" element={<PublicRoute component={Home} layout={DashboardLayout} />} />
        <Route path="/login" element={<PublicRoute component={Login} layout={DashboardLayout} />} />
        <Route
          path="/mineral-potential"
          element={<PublicRoute component={MineralPotential} layout={DashboardLayout} />}
        />
        <Route path="/fiscal" element={<PublicRoute component={Fiscal} layout={DashboardLayout} />} />

        <Route
          path="/investment-opportunities"
          element={<PublicRoute component={InvestmentOpportunity} layout={DashboardLayout} />}
        />
        <Route
          path="/access-to-geological-data"
          element={<PublicRoute component={ATGDBusiness} layout={DashboardLayout} />}
        />
        <Route path="/gis-portal" element={<PublicRoute component={InteractiveGisPortal} layout={DashboardLayout} />} />
        <Route
          path="/business-investment"
          element={<PublicRoute component={BusinessInvestment} layout={DashboardLayout} />}
        />
        <Route
          path="/mineral-development-strategy"
          element={<PublicRoute component={MineralDevelopmentStrategy} layout={DashboardLayout} />}
        />
        <Route
          path="/fiscal-incentives"
          element={<PublicRoute component={FiscalIncentives} layout={DashboardLayout} />}
        />
        <Route path="/fiscal-CPEC" element={<PublicRoute component={FiscalCPEC} layout={DashboardLayout} />} />

        <Route
          path="/starting-new-business"
          element={<PublicRoute component={StartingNewBusiness} layout={DashboardLayout} />}
        />

        <Route
          path="/special-investment-facilities"
          element={<PublicRoute component={SpecialInvestmentFacilities} layout={DashboardLayout} />}
        />
      </Routes>
    </Suspense>
  </Router>
);

export default AppRouter;
