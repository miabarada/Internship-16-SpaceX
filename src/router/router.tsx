import { Route, Routes } from "react-router-dom"
import { Layout } from "../components/Layout/Layout"
import { ROUTHES } from "./routes"

import HomePage from "../pages/HomePage/HomePage"
import LaunchesPage from "../pages/LaunchesPage/LaunchesPage"
import LaunchDetailPage from "../pages/LaunchDetailPage/LaunchDetailPage"
import ShipsPage from "../pages/ShipsPage/ShipsPage"
import ShipDetailPage from "../pages/ShipDetailPage/ShipDetailPage"
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage"

export function AppRouter() {
   return (
      <Layout>
         <Routes>
            <Route path={ROUTHES.Home} element={<HomePage />}/>
            <Route path={ROUTHES.Launches} element={<LaunchesPage />}/>
            <Route path={ROUTHES.LaunchDetail} element={<LaunchDetailPage />}/>
            <Route path={ROUTHES.Ships} element={<ShipsPage />}/>
            <Route path={ROUTHES.ShipDetail} element={<ShipDetailPage />}/>
            <Route path="*" element={<NotFoundPage />}/>
         </Routes>
      </Layout>
   )
}