import React from 'react';
import ReactDOM from 'react-dom';
// import "./index.css";
// import Application from './Application';
import Calculateapp from './Calculateapp';


// Practice Problem 1 -> Series list in an ordered list

// ReactDOM.render(
//   <>
//   <h1>5 Fav Netflix Series Pick</h1>
//   <p>Here goes the list...</p>
//   <ol>
//     <li>Stranger Things</li>
//     <li>Friends</li>
//     <li>Fruit Basket</li>
//     <li>Death-note</li>
//     <li>Over the sky</li>
//   </ol>
//   </>,
//   document.getElementById("root")
  
// );


// Practice Problem 2 -> Displaying current date and time
// const currDate = new Date().toLocaleDateString();
// const currTime = new Date().toLocaleTimeString();
// ReactDOM.render(
// <>
//   <h1>Displaying current date and time</h1>
//   <p>Current Date : {currDate}</p>
//   <p>Current Time : {currTime}</p>
// </>,
// document.getElementById("root")

// );


//Practice Problem 3 -> Creating a simple greeting website using Reactjs

// let curDate = new Date();
// curDate = curDate.getHours();
// let greeting = '';
// const cssStyle = {};

// if(curDate >=0 && curDate <12){
//   greeting = 'Good Morning!';
//   cssStyle.color = 'green';
// }else if(curDate >=12 && curDate <16){
//   greeting = 'Good Afternoon!';
//   cssStyle.color = 'brown';
// }else if(curDate >=16 && curDate <19){
//   greeting = 'Good Evening!';
//   cssStyle.color = 'orange';
// }else{
//   greeting = 'Good Night!';
//   cssStyle.color = 'skyblue';
// }

// ReactDOM.render(
// <>
//   <div>
//   <h1>Hello User, <span style={cssStyle}>{greeting}</span></h1>
//   </div>
// </>,
// document.getElementById("root")
// );


//Practice Problem 4 -> Rewriting the greeting website project in react components
// ReactDOM.render(<Application />,document.getElementById("root"));

//Practice Problem 5 -> Creating a simple calculator App in Reactjs
ReactDOM.render(
    <Calculateapp />, document.getElementById("root")
)