import React from 'react'
import { useLocation } from 'react-router-dom';

const Selectitem = (props) => {
    const location = useLocation();
    const { data } = location.state;
  return (
    <>
       <div className="phone-section" style={{ width: '100%', maxWidth: '420px', margin: 'auto', backgroundColor: '#01131B', padding: '2px' }}>
                    <ul className="text-left mb-4 headers" style={{ padding: '10px', listStyle: 'none' }}>
                    {data.map((num, index) => (
                        <li style={{ borderBottom: '1px dotted #ececec', padding: '10px', color: '#fff' }}>
                            <div>{num}</div>
                        </li>
                    ))}
                    </ul>
                </div>
    </>
  )
}

export default Selectitem
