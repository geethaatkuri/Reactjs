import React, { useState } from "react";

const Forms = () => {
  //An input form element whose value is controlled by react is called controlled component. It's like react component that renders a form also controls what happens in that form on subsequent user input.
  // In contrast, where the form data is handled by the DOM itself is known as uncontrolled component.

  const [fullName, setfullName] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
  });

  // const [lastName, setlastName] = useState('');

  // const [fullName, setfullName] = useState();

  // const [newLastName, setnewLastName] = useState('');

  const inputEvent = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);
    // setName(event.target.value);

    // const value = event.target.value;
    // const name = event.target.name;

    //By using object destructuring writing the above two lines in a single line:
    const { value, name } = event.target;

    setfullName((preValue) => {
      // console.log(preValue);
      if (name === "fName") {
        return {
          fName: value,
          lName: preValue.lName,
        };
      } else if (name === "lName") {
        return {
          fName: preValue.fName,
          lName: value,
          email: preValue.email,
          phone: preValue.phone,
          
        };
      } else if (name === "email") {
        return {
          fName: preValue.fName,
          lName: preValue.lName,
          email: value,
          phone: preValue.phone,
          
        };
      } else if (name === "phone") {
        return {
          fName: preValue.fName,
          lName: preValue.lName,
          email: preValue.email,
          phone: value,
          
        };
      } 
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    alert("Form Submitted");
    // setfullName(name);
    // setnewLastName(lastName);
  };

  // const inputEventTwo = (event) => {
  //   console.log(event.target.value);
  //   setlastName(event.target.value);
  // };

  return (
    <>
      <div className="main_div">
        <form onSubmit={onSubmit}>
          <div>
            <h1>
              Hello {fullName.fName} {fullName.lName} !
            </h1>
            <p>{fullName.email}</p>
            <p>{fullName.phone}</p>

            <input
              type="text"
              placeholder="Enter Your First Name"
              name="fName"
              onChange={inputEvent}
              // value={fullName.fName}
            />
            <input
              type="text"
              placeholder="Enter Your Last Name"
              name="lName"
              onChange={inputEvent}
              // value={fullName.lName}
            />
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              onChange={inputEvent}
              value={fullName.email}
              autoComplete="off"
            />
            <input 
              type="number"
              placeholder="Enter Your Contact Number"
              name="phone"
              onChange={inputEvent}
              value={fullName.phone}
            />
            <br />
            <button>Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Forms;
