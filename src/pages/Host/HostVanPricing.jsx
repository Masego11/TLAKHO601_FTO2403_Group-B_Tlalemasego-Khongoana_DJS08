//The HostVans component displays a list of vans for a host, including handling data fetching, error states, and rendering
//Imports
import { useOutletContext } from "react-router-dom";

//Function to access the context
function HostVanPricing() {
    const { currentVan } = useOutletContext()
    return (
        <h3 className="host-van-price">${currentVan.pricegit }<span>/day</span></h3>
    )
}
//Exporting the default HostvanPricing component
export default HostVanPricing