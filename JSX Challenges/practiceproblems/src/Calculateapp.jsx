import React from "react";
import {add, sub, mult, div} from './Calculate';

function Calculateapp(){
    return(
        <>
        <ul>
            <li>The sum of two numbers is {add(30,3)}</li>
            <li>The diff of two numbers is {sub(95,8)}</li>
            <li>The product of two numbers is {mult(25,9)}</li>
            <li>The remainder of two numbers is {div(101,33)}</li>
        </ul>
    </>
    )
}

export default Calculateapp;