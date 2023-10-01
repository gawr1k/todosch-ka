

import React from "react";




const Task = ({text}) => {
    return (
        <li>
            <div className="view">
              <input className="toggle" type="checkbox"/>
              <label>
                <span className="description">{text}</span>
              </label>
              <button className="icon icon-edit"></button>
              <button className="icon icon-destroy"></button>
            </div>
          </li>
    );

};




export default Task;