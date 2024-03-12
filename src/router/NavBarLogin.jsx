import { NavLink } from "react-router-dom"

export const NavBarLogin = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/login"
                    >
                        Login
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/register"
                    >
                        Register
                    </NavLink>


                </div>
            </div>
        </nav>
    )
}

