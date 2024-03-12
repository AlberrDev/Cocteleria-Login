import { Route, Routes } from "react-router-dom"
import { CoctailsBuscar } from "../pages/CoctailsBuscar"
import { CoctailsPage } from "../pages/CoctailsPage"
import { HomePage } from "../pages/HomePage"
import { NavBarHome } from "./NavBarHome"

export const HomeRouter = () => {
    return (
        <>
            <NavBarHome />
            <Routes> 
                <Route path="/cocteles" element={<HomePage />} />
                <Route path="/listar" element={<CoctailsPage />} />
                <Route path="/buscar" element={<CoctailsBuscar />} />
                <Route path="/*" element={<HomePage />} />
            </Routes>

        </>
    )
}

