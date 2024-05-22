import React from "react";
import { useState } from "react";

const Simplebutton = () => {
  const state = useState();
  // console.log(state);

  const [count, setCount] = useState(0);

  const IncNum = () => {
    setCount(count + 1);
    // console.log("Button Clicked " + count++);
  };
  return (
    <>
      <h1 className="simpleclickbutton"> {count} </h1>
      <button onClick={IncNum}>Click Me!</button>
    </>
  );
};

export default Simplebutton;
