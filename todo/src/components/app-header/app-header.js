import React from "react";
import NewTaskForm from "../new-task-form";

const AppHeader = () => {
    return (
        <section className="todoapp">
            <h1>todos</h1>
            <NewTaskForm/>
        </section>
    );
};

export default AppHeader;
