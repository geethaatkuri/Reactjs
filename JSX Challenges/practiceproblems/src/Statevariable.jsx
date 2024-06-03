import React, { useState } from "react";
// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";

const Statevariable = () => {
  const [num, setNum] = useState(0);

  const incNum = () => {
    setNum(num + 1);
  };

  const decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    } else {
      alert("The Limit has reached, can't decrement to negative values!");
      setNum(0);
    }
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1> {num} </h1>
          <div className="btn_div">
            <button onClick={incNum} className="btn_green">
            {/* <AddIcon /> */} Increment
            </button>
            <button onClick={decNum} className="btn_red">
            {/* <RemoveIcon /> */} Decrement 
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statevariable;
