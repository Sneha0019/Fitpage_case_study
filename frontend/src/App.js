import Home from "./components/Home";
import Select from "./components/Select";
import StockscanState from "./context/StockscanState";
import Selectitem from "./components/Selectitem"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Defaultitems from "./components/Defaultitems";

function App() {
  return(
    <>
      <StockscanState>
       <BrowserRouter>
       <div className="container">
       <Routes>
       <Route exact path="/" element={<Home/>} />
       <Route exact path="/Top gainers" element={<Select name={"Top gainers"}/>}/>
       <Route exact path="/Intraday buying seen in last 15 minutes" element={<Select name={"Intraday buying seen in last 15 minutes"}/>}/>  
       <Route exact path="/Open = High" element={<Select name={"Open = High"}/>}/>      
       <Route exact path="/CCI Reversal" element={<Select name={"CCI Reversal"}/>}/>  
       <Route exact path="/RSI Overbought" element={<Select name={"RSI Overbought"}/>}/>  
       <Route exact path="/otherpage" element={<Selectitem/>}/>
       <Route exact path="/defaultitems" element={<Defaultitems/>}/>
       </Routes>
       </div>
       </BrowserRouter>
       </StockscanState>
    </>
  );
  
}

export default App;