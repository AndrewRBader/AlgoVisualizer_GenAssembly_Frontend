import {Link} from "react-router-dom"

function Home(props) {
    return (
    <div>
    <h1>Home</h1>
    <Link className = "algo-index-link" to="/algorithms/">
            <div>Algorithm Index Page</div>
    </Link>
    </div>
    )
  }
  
  export default Home;