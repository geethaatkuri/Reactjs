import React, { useState } from "react";

const Handlingevents = () => {

    const purple = "#8e44ad";
const [bg, setBg] = useState(purple);

const [name, setName] = useState("Click Me!");

    const bgChange = () => {
        // console.log("Button Clicked");
     let newBg = "#34495e";
     setBg(newBg);
     setName("Hello 😄");
    };

    const bgBack = () =>{
    setBg(purple);
    setName("Welcome🤝");
    };

    return(
    <>
        <div style={{backgroundColor: bg}}>
            <button onClick={bgChange} onDoubleClick={bgBack}> {name} </button>
        </div>
    </>    
    );
}

export default Handlingevents;