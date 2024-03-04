import React from 'react'
import { useLocation } from 'react-router-dom';

const Defaultitems = () => {
    const location = useLocation();
    const { filteredData} = location.state;
  return (
    <>
    <div className="phone-section"  style={{ width: '100%', maxWidth: '420px', margin: 'auto', backgroundColor: '#01131B', padding: '2px', color:'#fff', minHeight:'300px'}}>
	<div className="text-left mb-4 margin-btm-10 indicator-header" style={{paddingLeft: '1rem', paddingBottom: '1rem'}}>{filteredData.name}</div>
	<div className="text-left mb-4 margin-btm-10 indicator-sub-header" style={{paddingLeft: '1rem'}} >Set Parameters</div>
	<div className="mb-4 indicator-variable-section" style={{display:'flex', backgroundColor: '#fff', color: 'black', margin: '1rem', padding: '2rem'}}>
		<div className="left" style={{paddingRight: '2rem'}}>Period</div>
		<input type="text" name="" value='14' className="right"/>
	</div>
</div>
    </>
  )
}

export default Defaultitems
