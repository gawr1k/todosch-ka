import React from "react";

import Task from "../task/task";

const TaskList = ( {todos} ) => {

    const elements = todos.map((item) => {
        return (
            <li className="completed">
                <Task {...item } />
            </li>
        );
    });

    return (
        <ul className="todo-list">
            { elements }
        </ul>
    );
};

export default TaskList;
