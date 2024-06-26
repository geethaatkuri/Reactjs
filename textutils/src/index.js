// var React = require("react");
import React from "react";
// var ReactDOM = require("react-dom");
import ReactDOM from "react-dom";
//import "./index.css"; //Connecting External CSS to Reactjs file.
// import Application from "./Application";
// import Forms from "./Forms";
// import "./Forms.css";
import Npmdigitalclock from "./Npmdigitalclock";

//In react v16 or above it is possible for render() to return an array of elements
// So instead of <div> tag we can also use [], 


//Topics learnt
//1. Rendering multiple elements inside ReactDOM.render() 
//2. React Fragment

//Fragments are needed when we want to render a group of elements without a parent element or component. To use it, we either use the Fragment component or <></> for short, to just render the h1 and h2 elements without the div around them.

//3. JavaScript Expressions in JSX  -> JavaScript - HTML - JavaScript{}
//4. ES6 Template literals in JSX 
//5. Attributes in JSX
//6. External CSS Styling & Importing CSS files in Reactjs And also 
//class vs className -> In React there is a reserved keyword named 'class' so instead we should use 'className'
//7. Internal CSS & Inline CSS styling in Reactjs 
//8. React Components -> In react everything is a component

// ReactDOM.render(<Application />, document.getElementById("root"));

//9. ES6 Modules Import and Export in Reactjs 
//10. React props -> Stands for Properties. React Props are like funcions arguments in JavaScript and attributes in HTML
//11. if-else stmts in Reactjs

//12. React Hooks -> Hooks are the new feature introducedin react in react 16.8 version
// It allows you to use state and other React features without writing a class. Hooks are functions which "hook into" React state and lifecycle featues from function components. 
// It does not work inside classes.
// Hooks should always be used at the top level of the react functions.
// Requirements to use hooks in reactjs -> Node version 6 or above. NPM version 5.2 or above

//13. Handling Events in Reactjs -> Event handlers are your own functions that will be triggered in response to interactions like clicking, hovering, focusing form inputs, and so on.   
// For further reference on responding to events -> https://react.dev/learn/responding-to-events 

//14. Forms in Reactjs -> Just like in HTML, React uses forms to allow users to interact with the web page.
//In react we have two types of components controlled and uncontrolled.
// For further reference on Forms in Reactjs -> https://www.w3schools.com/react/react_forms.asp

// ReactDOM.render(
//     <>
//       <Forms />
//     </>, document.getElementById("root")
//   )

//15. Spread operator(...) in Reactjs -> The three dots.
//The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object. 
// Example: 
// const numbersOne = [1, 2, 3];
// const numbersTwo = [4, 5, 6];
// const numbersCombined = [...numbersOne, ...numbersTwo];


// The spread operator is often used in combination with destructuring. 
// Example: 
// Assign the first and second items from numbers to variables and put the rest in an array:
// const numbers = [1, 2, 3, 4, 5, 6];
// const [one, two, ...rest] = numbers;


// We can use the spread operator with objects too
// Example:
// const myVehicle = {
//   brand: 'Ford',
//   model: 'Mustang',
//   color: 'red'
// }
// const updateMyVehicle = {
//   type: 'car',
//   year: 2021, 
//   color: 'yellow'
// }
// const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}

// NOTE: Notice the properties that did not match were combined, but the property that did match, color, was overwritten by the last object that was passed, updateMyVehicle. The resulting color is now yellow.

//16. NPM -> Node Package Manager
// i) NPM is the world's largest software registry.
// ii) This registry contains over 800,000 code packages.
// iii) Open-source developers use npm to share software. 

//Installing npm :
// i) npm is installed using Node.js

//Software Package Manager
// i) All the npm packages are defined in files called "package.json" -> example : npm init
// ii) The content of package.json must be written in JSON.
// iii) Atleast two fields must be present in the definition file: name and version. 

// Coomand Line Client(CLI)
// i) npm includes a CLI that can be used to download and install software.
// ii) npm can manage dependencies.

ReactDOM.render(
  <>
    <Npmdigitalclock />
  </>,
  document.getElementById("root")
);





















//ReactDOM.render( //Rendering mltiple elements inside ReactDOM.render() -> Example using <,> tag below
/* <div>
<h1>Hello World... This is JSX</h1>
<p> Lorem ipsum dolar sit </p>
<h2> Rendering multiple elements inside ReactDOM.render() </h2>
</div>, */
/* <React.Fragment><h1>Hello World... This is JSX</h1> */
/* <p> Lorem ipsum dolar sit </p> */
/* <h2> React Fragment </h2> */
// </React.Fragment>,   
// document.getElementById("root"));    //This render element takes three parts 'what to show', 'where to show', 'callback function'


// ReactDOM.render(React.createElement("h1", null, "All about JSX"),
// document.getElementById("root"));


// const flName = "Geetha Atkuri";
// const age = 23;
// let country = 'India';
// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/250/300";
// const img3 = "https://picsum.photos/300/300";
// const links = "https://picsum.photos/";
// const heading = {
//     color: "#fa9191", 
//     textTransform: "capitalize", 
//     textAlign: "center",
//     fontWeight: "bold",
//     textShadow: "0px 2px 4px #ffe9c5",
//     margin: "60px 0px",

// };

// ReactDOM.render(
// <>
// <h1>JSX in React</h1>
// <p>My name is {`${flName}`} and my age is {`${age}`}</p>
// <p>The result of the expression is {2+5}</p>
// <p>Generating random number of {Math.random()}</p>
// </>,
// document.getElementById("root")
// );

//Inside the pair of curly braces we cannot use if,if-else,.... statements 


// ReactDOM.render(
// <>
//     {/* Inline styling by using style attribute inside element <h1 className="heading" style={{ color: "green", textTransform: "capitalize", textAlign: "center"}}>I am from {country}</h1> */}

//     {/* or the other way is creating object for an element and adding that object inside {} like below */}
//     <h1 className="heading" style={heading}>I am from {country}</h1>
//     <div className="img_div" style={{display: "flex", justifyContent: "center"}}>
//     <img src= {img1} alt="Random Images" style={{width: "300px", height: "350px"}} />
//     <img src= {img2} alt="Random Images" style={{width: "300px", height: "350px"}}/>
//     <a href= {links} target="_blank">
//     <img src= {img3} alt="Random Images" style={{width: "300px", height: "350px"}}/>
//     </a>
//     </div>
// </>, 
// document.getElementById("root")
// );



//Basic JS
// var h1 = document.createElement('h1');
// h1.innerHTML = 'Hi, Helloworld'; 
// document.getElementById("root").appendChild(h1);