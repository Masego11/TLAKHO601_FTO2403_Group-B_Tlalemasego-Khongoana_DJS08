//THE home component is an entry point to the website 
import { Link } from "react-router-dom";

//Function returning Headline and description content 
function Home() {
    return (
        <div className="home-container">
          <h1>You got the travel plans, we got the travel vans.</h1>
          <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make the trip your perfect toad trip.</p>
          <Link to="vans">Find your van</Link> 
        </div>
        
    )
}
//Exporting home component
export default Home