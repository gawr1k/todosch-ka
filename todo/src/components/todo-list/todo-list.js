import React from "react";
import TodoListItem from "../todo-list-item/todo-list-item";
import "./todo-list.css"


const TodoList = ({ todos }) => {

    const elements = todos.map((item) => {

        return (
            <li key={item.id}>
                <TodoListItem {...item}/>
            </li>
        )
    })

    return (
        <ul className={"list-group toto-list"}>
            {elements}
        </ul>
    );
};

export default TodoList;

