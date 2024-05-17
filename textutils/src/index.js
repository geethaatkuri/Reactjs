// var React = require("react");
import React from "react";
// var ReactDOM = require("react-dom");
import ReactDOM from "react-dom";
//import "./index.css"; //Connecting External CSS to Reactjs file.

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


const flName = "Geetha Atkuri";
const age = 23;
let country = 'India';
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";
const links = "https://picsum.photos/";
const heading = {
    color: "#fa9191", 
    textTransform: "capitalize", 
    textAlign: "center",
    fontWeight: "bold",
    textShadow: "0px 2px 4px #ffe9c5",
    margin: "60px 0px",

};

ReactDOM.render(
<>
<h1>JSX in React</h1>
<p>My name is {`${flName}`} and my age is {`${age}`}</p>
<p>The result of the expression is {2+5}</p>
<p>Generating random number of {Math.random()}</p>
</>,
document.getElementById("root")
);
//Inside the pair of curly braces we cannot use if,if-else,.... statements 

ReactDOM.render(
<>
    {/* Inline styling by using style attribute inside element <h1 className="heading" style={{ color: "green", textTransform: "capitalize", textAlign: "center"}}>I am from {country}</h1> */}

    {/* or the other way is creating object for an element and adding that object inside {} like below */}
    <h1 className="heading" style={heading}>I am from {country}</h1>
    <div className="img_div" style={{display: "flex", justifyContent: "center"}}>
    <img src= {img1} alt="Random Images" style={{width: "300px", height: "350px"}} />
    <img src= {img2} alt="Random Images" style={{width: "300px", height: "350px"}}/>
    <a href= {links} target="_blank">
    <img src= {img3} alt="Random Images" style={{width: "300px", height: "350px"}}/>
    </a>
    </div>
</>, 
document.getElementById("root")
);



//Basic JS
// var h1 = document.createElement('h1');
// h1.innerHTML = 'Hi, Helloworld'; 
// document.getElementById("root").appendChild(h1);