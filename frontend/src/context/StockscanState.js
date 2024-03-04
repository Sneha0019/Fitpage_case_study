import React, { useState } from 'react'
import StockScanContext from './stockscanContext';

const StockscanState = (props) => {
    const host = 'http://localhost:5000';
    const [stockData, setStockData] = useState([]);

    const getStockData = async()=>{
        try{
            const response = await fetch(`${host}/api/fetchdata`, {
                method: "GET",
                headers:{
                    "content-Type" : "application/json",
                },
            })
            const data = await response.json();
            setStockData(data);
       
           
        }catch(error){
            return console.log("error in fetching", error);
        }
    }
  return (
    <div>
      <StockScanContext.Provider value={{stockData, getStockData}}>
        {props.children}
      </StockScanContext.Provider>
    </div>
  )
}

export default StockscanState
