import React from "react";
import ReactDOM from "react-dom";

import Simplebutton from "./Simplebutton";
import "./simplebutton.css";
// import "./index.css";
// import Application from './Application';
// import Calculateapp from './Calculateapp';
// import Card from "./Cards";
// import "./indexseries.css";
// import Sdata from "./Seriesdata";
// import Slotapp from "./Slotapp";
// import "./slotcss.css";





// console.log(Sdata);
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
// ReactDOM.render(
//     <Calculateapp />, document.getElementById("root")
// )

//Practice Problem - 6 -> Netflix series cards using react props, Arrays, ArrayMap, Fat Arrow Function

// function ncard(val){
//     console.log(val);
//     return (
//         <Card
//       imgsrc={val.imgsrc}
//       title={val.title}
//       sname={val.sname}
//       link={val.link}
//     />
//     );
// }


// ReactDOM.render(
  // <>
  //   <h1 className="heading_style">Best Netflix Series To Binge Watch </h1>
    // {/* Using map function (without repeating the calling the card components for n-times) */}
    // {/* {Sdata.map(ncard)}    */}
    // {/* Using arrow function */}
    // {Sdata.map((val, index)=>{
    //     return (
    //     <Card
    //   imgsrc={val.imgsrc}
    //   title={val.title}
    //   sname={val.sname}
    //   link={val.link}
    // />
    //     )
    // })}
    {/* <Card
      imgsrc={Sdata[1].imgsrc}
      title={Sdata[1].title}
      sname={Sdata[1].sname}
      link={Sdata[1].link}
    />
    <Card
      imgsrc={Sdata[2].imgsrc}
      title={Sdata[2].title}
      sname={Sdata[2].sname}
      link={Sdata[2].link}
    />
    <Card
      imgsrc={Sdata[3].imgsrc}
      title={Sdata[3].title}
      sname={Sdata[3].sname}
      link={Sdata[3].link}
    />
    <Card
      imgsrc={Sdata[4].imgsrc}
      title={Sdata[4].title}
      sname={Sdata[4].sname}
      link={Sdata[4].link}
    />
    <Card
      imgsrc={Sdata[5].imgsrc}
      title={Sdata[5].title}
      sname={Sdata[5].sname}
      link={Sdata[5].link}
    /> */}
  // </>,
  // document.getElementById("root")
// );


// Practice Problem - 7 -> Slot Machine Game in Reactjs using if-else stmts also
// ReactDOM.render(
//   <>
//   <Slotapp />
//   </>, document.getElementById("root")
// )


// Practice Problem - 8 -> 
ReactDOM.render(
  <>
  <Simplebutton />
  </>, document.getElementById("root")
)