import React, { Suspense, lazy } from 'react'
import { PublicRoute } from './PublicRoute'
import { PrivateRoute } from './PrivateRoute';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {  DashboardLayout } from 'components';


const Home = lazy(() => import('../pages/home'));
const MineralPotential = lazy(() => import('../pages/mineral-potential'));
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
          element={<PrivateRoute component={MineralPotential} layout={DashboardLayout} />}
        />
  </Routes>
    </Suspense>
    </Router>
)

export default AppRouter
