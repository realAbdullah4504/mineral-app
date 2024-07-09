import React, { Suspense, lazy } from 'react'
import { PublicRoute } from './PublicRoute'
import { PrivateRoute } from './PrivateRoute';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {  DashboardLayout } from 'components';


const Home = lazy(() => import('../pages/home'));
const MineralPotential = lazy(() => import('../pages/mineral-potential'));
const Login = lazy(() => import('../pages/login'));
const InvestmentOpportunity = lazy(() => import('../pages/investment-opportunities'));
const ATGDBusiness = lazy(() => import('../pages/ATGDBusiness'));
const InteractiveGisPortal = lazy(() => import('../pages/InteractiveGisPortal'));


const AppRouter = () => (
  <Router>
    <Suspense fallback={"...Loading"}>
      <Routes>
        <Route
          path="/"
          element={<PrivateRoute component={Home} layout={DashboardLayout} />}
        />
        <Route
          path="/login"
          element={<PublicRoute component={Login} layout={DashboardLayout} />}
        />
        <Route
          path="/mineral-potential"
          element={<PublicRoute component={MineralPotential} layout={DashboardLayout} />}
        />
        <Route
          path="/investment-opportunities"
          element={<PrivateRoute component={InvestmentOpportunity} layout={DashboardLayout} />}
        />
         <Route
          path="/access-to-geological-data"
          element={<PrivateRoute component={ATGDBusiness} layout={DashboardLayout} />}
        />
        <Route
          path="/gis-portal"
          element={<PrivateRoute component={InteractiveGisPortal} layout={DashboardLayout} />}
        />
  </Routes>
    </Suspense>
    </Router>
)

export default AppRouter
