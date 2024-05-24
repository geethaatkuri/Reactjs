import React, { useState } from "react";

const Digitalclock = () => {

    let newTime = new Date().toLocaleTimeString();

    const [ctime, setCtime] = useState(newTime);

    const UpdateTime = () =>{
    newTime = new Date().toLocaleTimeString();
    setCtime(newTime);          
};
    setInterval(UpdateTime, 1000);

    return(
    <>
        <h1 className="simpleclickbutton"> {ctime} </h1>
    </>    
    );
}

export default Digitalclock;