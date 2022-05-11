import {Link} from "react-router-dom"

function Index() {
  return (
    <div>
    <h1>Algorithm Index Page</h1>
    <Link className = "algo-home-link" to="/">
            <div>Algorithm Home Page</div>
    </Link>
    </div>
    )
}
  
export default Index;