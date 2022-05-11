
import { Routes, Route } from "react-router-dom";
// IMPORT PAGES
import Home from "./pages/AlgoHome";
import Index from "./pages/AlgoIndex";

function App() {
  // URL should have YOUR HEROKU URL for your backend, make sure you include the trailing slash
  const URL = "https://project3-algovis-backend.herokuapp.com/";

  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home href = {URL}/>} />
      <Route path="/algorithms/" element={<Index href = {URL}/>} />  
      </Routes>
    </div>
  );
}

export default App;