import React from "react";

const SlotM = (props) => {
    // let x = '😄';
    // let y = '😄';
    // let z = '🐱';

    // let x = props.x;
    // let y = props.y;
    // let z = props.z;

    let {x, y, z} = props; //Object destructuring

    if( (x===y) && (y===z) ){
        return(
            <>
                <div className="slot_inner">
                <h1>
                 {x} {y} {z} 
                 </h1>
                <h1>It's a match!</h1>
                <hr />
                </div>
            </>
        )
    }else{
        return(
            <>
                <div className="slot_inner">
                <h1>
                 {x} {y} {z} 
                 </h1>
                <h1>It's  not a match!</h1>
                <hr />
                </div>
            </>
        ) 
    }
};

export default SlotM;