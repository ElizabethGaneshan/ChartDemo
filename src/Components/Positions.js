import React from 'react'
import editSign from "../Assets/editSign.png";
import Dropdown from "react-dropdown"
import "../Components/Positions.css";


const options = [
  "one","two","three"
]
const Positions = () => {
  return (
    <div className="">
      <Dropdown options={options} className='dropDown'/>
     
          
    </div>
  );
}

export default Positions