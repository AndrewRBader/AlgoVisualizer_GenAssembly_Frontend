
import { Routes, Route } from "react-router-dom";
// IMPORT PAGES
import Home from "./pages/AlgoHome";
import Index from "./pages/AlgoIndex";

function App() {

  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/algorithms/" element={<Index/>} />  
      </Routes>
    </div>
  );
}

export default App;