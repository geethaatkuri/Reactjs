import React, { useState } from "react";

const Hooksproject = () => {

    let newTime = new Date().toLocaleTimeString();

    const [ctime, setCtime] = useState(newTime);

    const UpdateTime = () => {
    let  newCTime = new Date().toLocaleTimeString();
    setCtime(newCTime);
    }

    return (
        <>
            <h1 className="simpleclickbutton"> {ctime} </h1>
            <button onClick={UpdateTime}>Get Time</button>
        </>
    );
}

export default Hooksproject;