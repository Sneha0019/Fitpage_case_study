import React, { useContext, useEffect, useState } from 'react';
import StockScanContext from '../context/stockscanContext';

const Home = () => {
    const stockScanContext = useContext(StockScanContext);
    const { stockData, getStockData } = stockScanContext;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await getStockData();
                setLoading(false);
            } catch (error) {
            }
        };

        fetchData();
        //eslint-disable-next-line
    }, [getStockData]);

    return (
        <>
                <div className="phone-section" style={{ width: '100%', maxWidth: '420px', margin: 'auto', backgroundColor: '#01131B', padding: '2px' }}>
                    <ul className="text-left mb-4 headers" style={{ padding: '10px', listStyle: 'none' }}>
                        {stockData.map((stock, index) => (
                            <li key={index} style={{ borderBottom: '1px dotted #ececec', padding: '10px' }}>
                                <a href={`${stock.name}`}>
                                    <div>{stock.name}</div>
                                    <div className={`subtext ${stock.color}`} style={{ color: stock.color, fontSize: '10px' }}>{stock.tag}</div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            
        </>
    );
};

export default Home;
