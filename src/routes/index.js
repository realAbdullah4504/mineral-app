import React, { Suspense, lazy } from 'react'
import { PublicRoute } from './PublicRoute'
// import { PrivateRoute } from './PrivateRoute'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {  DashboardLayout } from 'components';


const Home = lazy(() => import('../pages/home'))


const AppRouter = () => (
  <Router>
    <Suspense fallback={"...Loading"}>
      <Routes>
        <Route
          path="/"
          element={<PublicRoute component={Home} layout={DashboardLayout} />}
        />
  </Routes>
    </Suspense>
    </Router>
)

export default AppRouter
