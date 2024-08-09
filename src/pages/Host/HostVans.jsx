//The hostvans component displays a list of vans for a host 
//Imports 
import React from "react";
import { Link } from "react-router-dom";
import { getHostVans } from "../../../api";

//HostVans function to execute state and effect hooks
function HostVans() {
    const [vans, setVans] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        async function loadVans() {
            setLoading(true);
            try {
                const data = await getHostVans();
                setVans(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }
        loadVans();
    }, []);

    //Conditional rendering 
    if (loading) {
        return <h1>Loading...</h1>;
    }
    if (error) {
        return <h1>There was an error: {error.message}</h1>;
    }

    //Rendering the list of vans 
    const hostVansEls = vans.map(van => (
        <Link to={van.id} key={van.id} className="host-van-link-wrapper">
            <div className="host-van-single">
                <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                <div className="host-van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}/day</p>
                </div>
            </div>
        </Link>
    ));

    //Final rendering 
    return (
        <section>
            <h1 className="host-vans-title">Your listed vans</h1>
            <div className="host-vans-list">
                {vans.length > 0 ? (
                    <section>{hostVansEls}</section>
                ) : (
                    <h2>No vans found</h2>
                )}
            </div>
        </section>
    );
}

//Exporting of hostVans component 
export default HostVans;