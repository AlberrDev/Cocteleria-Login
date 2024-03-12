import { Routes, Route, Navigate } from 'react-router-dom'
import { LoginRouter } from './LoginRouter'
import { HomeRouter } from './HomeRouter'
import { UserProvider } from '../context/UserProvider'

export const MainRouter = () => {
    return (
        <>
            <UserProvider>
                <Routes>
                    <Route path="/*" element={<LoginRouter />} />
                    <Route path="/Home/*" element={<HomeRouter />} />

                </Routes>
            </UserProvider>
        </>
    )
}

