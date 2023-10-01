import Task from "../task/task";
import React from "react";

function TaskList ({tasks}) {
    return (
        <ul className="todo-list">
            {tasks.map(task => (
                <Task key={task.id} text={task.text} />  
            ))}
        </ul>
    )
}

export default TaskList;
