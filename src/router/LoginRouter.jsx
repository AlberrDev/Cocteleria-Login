import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage"
import { RegisterPage } from "../pages/RegisterPage"
import { NavBarLogin } from "./NavBarLogin"

export const LoginRouter = () => {
    return (
        <>
            <NavBarLogin />
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/*" element={<RegisterPage />} />

            </Routes>



        </>
    )
}

