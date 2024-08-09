//The HostVanInfo component displays detailed information about a specific van
//Imports
import { useOutletContext } from "react-router-dom";

//Function to access the context 
function HostVanInfo() {
    const { currentVan } = useOutletContext()

//Rendering of the component
    return (
        <section className="host-van-detail-info">
            <h4>Name: <span>{currentVan.name}</span></h4>
            <h4>Category: <span>{currentVan.type}</span></h4>
            <h4>Description: <span>{currentVan.description}</span></h4>
            <h4>Visibility: <span>Public</span></h4>
        </section>
        
    )
}

//Exporting the default Hostvaninfo component
export default HostVanInfo