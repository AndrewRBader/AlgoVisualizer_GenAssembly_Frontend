import { useState, useEffect } from "react";
import {Link} from "react-router-dom"

function Index(props) {

  console.log(props.href)

    // create state to hold projects
    const [algorithms, setAlgorithms] = useState(null);
    //create function to make api call
    const getAlgorithmsData = async () => {
      //make api call and get response
      const response = await fetch(props.href);
      // turn response into javascript object
      const data = await response.json();
      // set the projects state to the data
      setAlgorithms(data);
    };
  
    // make an initial call for the data inside a useEffect, so it only happens once on component load
    useEffect(() => getAlgorithmsData(), []);

    console.log(algorithms)
  
  const loaded = () => {
  return (
    <div>
    <Link className = "algo-home-link" to="/">
          <div>Algorithm Home Page</div>
    </Link>
    <h1>Algorithm Index Page</h1>
    </div>
    )
  }
  return algorithms ? loaded() : <h1>Loading...</h1>;
}
  
export default Index;