
import { Routes, Route } from "react-router-dom";
// IMPORT PAGES
import Home from "./pages/AlgoHome";
import Index from "./pages/AlgoIndex";

function App() {

  const URL = "https://algoapi-project3-backend.herokuapp.com/algorithmsJSON/";

  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/algorithms/" element={<Index href = {URL}/>} />  
      </Routes>
    </div>
  );
}

export default App;