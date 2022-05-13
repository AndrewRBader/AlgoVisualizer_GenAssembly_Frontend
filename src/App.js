
import { Routes, Route } from "react-router-dom";
// IMPORT PAGES
import Home from "./pages/AlgoHome";
import Index from "./pages/AlgoIndex";
import FunctionIndex from "./pages/FunctionIndex";

function App() {

  const URL_Index = "https://algoapi-project3-backend.herokuapp.com/algorithmsJSDB/";
  const URL_Function = "https://algoapi-project3-backend.herokuapp.com/functions/";

  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/algorithms/" element={<Index href = {URL_Index}/>} />
      <Route path="/functions/" element={<FunctionIndex href = {URL_Function}/>} />  
      </Routes>
    </div>
  );
}

export default App;