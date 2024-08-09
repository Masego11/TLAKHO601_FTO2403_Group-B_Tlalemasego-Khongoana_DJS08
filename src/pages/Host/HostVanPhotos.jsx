//The HostVanPhotos component displays the main image of a specific van
//Imports 
import { useOutletContext } from "react-router-dom";

//Function to access the context
function HostVanPhotos() {
    const { currentVan} = useOutletContext()
    return (
        <img src={currentVan.imageUrl} className="host-van-detail-image"/>
    )
}
//Exporting the default HostvanPhotos component
export default HostVanPhotos