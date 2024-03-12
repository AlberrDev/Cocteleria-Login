import { NavLink } from "react-router-dom"

export const NavBarHome = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/Home/home"
                    >
                        Home
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/Home/listar"
                    >
                        Listar Cocteles
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/Home/buscar"
                    >
                        Buscar Cocteles
                    </NavLink>
                   
                </div>
            </div>
        </nav>
    )
}

