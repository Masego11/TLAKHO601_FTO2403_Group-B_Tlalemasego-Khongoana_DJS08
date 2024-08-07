import { NavLink, Outlet } from "react-router-dom";

function HostLayout() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    return (
        <>
        <nav className="host-nav">
            <NavLink to="/host"
                end
                style={({ isActive}) => isActive ? activeStyles : null}
            >
                Dashboard
            </NavLink>
            <NavLink to="/host/income"
                end
                style={({ isActive}) => isActive ? activeStyles : null}
            >
                Income
            </NavLink>

            <NavLink to="/host/vans"
                end
                style={({ isActive}) => isActive ? activeStyles : null}
            >
                Vans
            </NavLink>

            <NavLink to="/host/reviews"
                end
                style={({ isActive}) => isActive ? activeStyles : null}
            >
                Reviews
            </NavLink>
        </nav>
        <Outlet />
        </>
    )
}
export default HostLayout
