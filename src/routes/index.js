import React, { Suspense, lazy } from 'react'
import { PublicRoute } from './PublicRoute'
import { PrivateRoute } from './PrivateRoute';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {  DashboardLayout } from 'components';


const Home = lazy(() => import('../pages/home'));
const MineralPotential = lazy(() => import('../pages/mineral-potential'));
const Fiscal = lazy(() => import('../pages/fiscal'));
const Login = lazy(() => import('../pages/login'));


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
          path="/fiscal"
          element={<PublicRoute component={Fiscal} layout={DashboardLayout} />}
        />
  </Routes>
    </Suspense>
    </Router>
)

export default AppRouter
