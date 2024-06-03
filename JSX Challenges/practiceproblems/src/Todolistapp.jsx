import React from "react";

const Todolistapp = () => {
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>Todo List</h1>
          <br />
          <input type="text" placeholder="Add the items"/>
          <button>+</button>
          <ol>
            <li>Buy Apple</li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Todolistapp;
