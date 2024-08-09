//The hostlayout component sets up a navigation bar specific to the host section and renders nested routes via the Outlet component
// Imports 
import { NavLink, Outlet } from "react-router-dom";

// Active styles 
function HostLayout() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

// Navigation menu
    return (
        <>
        <nav className="host-nav">
            <NavLink to="."
                end
                style={({ isActive}) => isActive ? activeStyles : null}
            >
                Dashboard
            </NavLink>
            <NavLink to="income"
                end
                style={({ isActive}) => isActive ? activeStyles : null}
            >
                Income
            </NavLink>

            <NavLink to="vans"
                end
                style={({ isActive}) => isActive ? activeStyles : null}
            >
                Vans
            </NavLink>

            <NavLink to="reviews"
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

// Exporting HostLayout component 
export default HostLayout
