import React, { useContext, useState, useEffect } from 'react'
import stockscanContext from '../context/stockscanContext'
import {  useNavigate } from 'react-router-dom'

const Select = (props) => {
    const navigate = useNavigate();
    const stockScanContext = useContext(stockscanContext);
    const { stockData, getStockData } = stockScanContext;
    const [loading, setLoading] = useState(true);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (stockData.length === 0) {
                    await getStockData();
                } else {
                    const filtered = stockData.filter(item => item.name === props.name);
                    if (filtered.length === 0) {
                        await getStockData();
                    } else {
                        setFilteredData(filtered);
                    }
                }
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
        //eslint-disable-next-line
    }, [getStockData, props.name, stockData]);


   const checkForVariable = (text, idx)=>{
    let valText 
    for(let i=0 ; i<text.length; i++){
         if(text[i]==="$"){
            const num = text[i+1];
            const variableData = filteredData[0].criteria[idx].variable[`$${num}`];
            let data;
            if (variableData && variableData.values) {
              data = variableData.values[0];
            } else if (variableData && variableData.default_value) {
              data = variableData.default_value; 
            } else {
              data = ""; 
            }
          const before = text.substring(0, i); 
           const after = text.substring(i + 2); 
           text = before + `${data}` + after;
         valText = { before: text.substring(0, i), data: `(${data})`, after: text.substring(i + 3) };
        }
        
    }
       
       return valText;
   }

   const handleTextClick= (text, idx, e)=>{
    e.preventDefault();
   let data;
   for(let i=0 ; i<text.length; i++){
    if(text[i]==="$"){
       const num = text[i+1];
       const variableData = filteredData[0].criteria[idx].variable[`$${num}`];
       if (variableData && variableData.values) {
         data = variableData.values;
       } else if(variableData && variableData.default_value){
        data = variableData.default_value; 
        return navigate("/defaultitems", { state: { data: data, filteredData:filteredData[0]} });
       }
       
   }
   
}

navigate("/otherpage", { state: { data: data } });
   
}


  return (
    <>
     <div className="container" style={{ display: 'flex' }}>
            <div className="phone-section" style={{ width: '100%', maxWidth: '420px', padding: '15px', margin: 'auto', backgroundColor: '#01131B', color: '#fff', minHeight: '300px' }}>
                <div className="header-section" style={{ minHeight: '60px', backgroundColor: '#1686b0', padding: '10px' }}>
                    {filteredData.map((item, index) => (
                        <div key={index}>
                            <div className="header">{item.name}</div>
                            <div className="subtext green" style={{ fontSize: '10px', color: item.color}}>{item.tag}</div>
                        </div>
                    ))}
                </div>
                <div className="body-section" style={{ padding: '10px', color: '#fff' }}>
                    {filteredData.map((item, index) => (
                        <div key={index}>
                            {item.criteria.map((criterion, idx) => (
                                <div key={idx} style={{marginTop: '0.5rem'}}>
                                      {criterion.type === "plain_text" ? (
                                            <div>{criterion.text}</div>
                                        ) : (
                                            <>
                                            {checkForVariable(criterion.text, idx).before}
                                               <a href="/otherpage" style={{color: 'blue'}} onClick={(e)=>handleTextClick(criterion.text, idx, e)}>{checkForVariable(criterion.text, idx).data}</a>
                                            {checkForVariable(criterion.text, idx).after}
                                            </>
                                        )}                               
                                    {idx < item.criteria.length - 1 && <div style={{fontSize: '10px', marginTop: '0.5rem'}}> and </div>}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}



export default Select
