import React from "react";

function Card(props){
    //console.log(props);
    return(
    <>
    <div className="cards">
      <div className="card">
        <img src={props.imgsrc} alt="NetflixSeriesPosters" className="card_img" />
        <div className="card_info">
          <h3 className="card_title">{props.sname}</h3>
          <span className="card_category"> {props.title} </span>
          <a href={props.link} target="_blank">
            <button>Watch Now</button>
          </a>
        </div>
      </div>
    </div>
    </>
  );
}

export default Card;