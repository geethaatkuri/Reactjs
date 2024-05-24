import React, { useState } from "react";

const Forms = () => {  //An input form element whose value is controlled by react is called controlled component. It's like react component that renders a form also controls what happens in that form on subsequent user input. 
    // In contrast, where the form data is handled by the DOM itself is known as uncontrolled component.

    const [name, setName] = useState("");

    const [fullName, setfullName] = useState();

    const onSubmit = () => {
        setfullName(name);
    }


const inputEvent = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
}
    return(
        <>
        <div>
            <h1>Hello {fullName} !</h1>
            <input type="text" placeholder="Enter Your Name" onChange={inputEvent} value={name}/>
            <button onClick={onSubmit}>Submit Form</button>
        </div>
        </>
    )
}

export default Forms;