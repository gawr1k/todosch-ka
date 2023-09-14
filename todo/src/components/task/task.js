import React from "react";

const Task = ({ label, important = false }) => {

    return (
            <div className="view">
                <input className="toggle" type="checkbox"/>
                    <label>
                        <span className="description">{ label }</span>
                        <span className="created">created 17 seconds ago</span>
                    </label>
                    <button className="icon icon-edit"></button>
                    <button className="icon icon-destroy"></button>
            </div>
    );//<span> { label }</span>;

};

export default Task;
