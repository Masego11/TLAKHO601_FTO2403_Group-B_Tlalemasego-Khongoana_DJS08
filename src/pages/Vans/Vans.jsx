//The vans component fetches and displays a list of vans 
//Imports
import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getVans } from "../../../api";

// State and query parameters 
function Vans() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [vans, setVans] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    const typeFilter = searchParams.get("type")

//Effect hook for fetching vans
    React.useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try{
                const data = await getVans()
            setVans(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
          loadVans()
    },[])

//Filtering of vans by type
    const displayedVans = typeFilter
    ? vans.filter(van => van.type === typeFilter)
    : vans
    
//Rendering of van elements
    const vanElements = displayedVans.map(van => (
        <div key={van.id} className="van-tile">
            <Link to={van.id}
                    state={{ search: `?${searchParams.toString()}`,
                    type: typeFilter}}>

                <img src={van.imageUrl} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
    </div> 
    ))

    //Function for handling of filter changes 
function handleFilterChange(key, value) {
    setSearchParams(prevParams => {
        if (value === null) {
            prevParams.delete(key)
        } else {
            prevParams.set(key, value)
        }
        return prevParams
    })
}

//Loading and error states
if (loading) {
    return <h1>Loading...</h1>
}
if (error) {
    return <h1>There was an error: {error.message}</h1>
}

//Rendering of the UI
 return (
    <div className="van-list-container">
        <h1>Explore our van options</h1>
        <div className="van-list-filter-buttons">
            <button onClick={() => handleFilterChange("type", "simple")}
            className={`van-type simple ${typeFilter === "simple" ? "selected" : ""}`}
            >
            Simple
            </button>
            <button onClick={() => handleFilterChange("type", "luxury")}
            className={`van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`}
            >
            Luxury
            </button>
            <button onClick={() => handleFilterChange("type", "rugged")}
            className={`van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`}
            >
            Rugged
            </button>

            {typeFilter ? (
                  <button onClick={() => handleFilterChange("type", null)}
                  className="van-type clear-filters">
                  Clear filter
                  </button>          
            ) : null}
        </div>
        <div className="van-list">
            {vanElements}
        </div>
    </div>
 ) 
}
//Exporting of vans components
export default Vans
