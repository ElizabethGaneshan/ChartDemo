// import React from "react";
// import "../Components/Select.css";

// const Select = () => {

//   return (
//     <div className="dropdown">
//       <input
//         type="text"
//         className="textBox"
//         placeholder="DropDown Menu"
//       />
//       <div className="option">

//         <div className="HTML">HTML</div>
//         <div className="CSS">CSS</div>
//         <div className="JavaScript">JavaScript</div>
//         <div className="ReactJs">ReactJs</div>
//         <div className="Figma">Figma</div>
//       </div>
//     </div>
//   );
// };

// export default Select;

import React, { useState } from "react";
import "../Components/Select.css";
import dropDownIcon from "../Assets/dropDownIcon.png";

const Select = ({ selected, setSelected }) => {
  const [isActive, setisActive] = useState(false);
  const options = ["React", "Vue", "Angular"];
  return (
    <div className="dropdown">
      <div
        className="dropdown-btn"
        onClick={(e) => {
          setisActive(!isActive);
        }}>
        {selected}
        <img src={dropDownIcon} alt="" />
      </div>

      {isActive && (
        <div className="dropdown-content">
          {options.map((option) => {
            return (
              <div
                onClick={(e) => {
                  setSelected(option);
                  setisActive(false);
                }}
                className="dropdown-item">
                {option}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Select;
