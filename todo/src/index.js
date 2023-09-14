import React from 'react';
import ReactDom from 'react-dom';

import AppHeader from "./components/app-header";
import TaskList from "./components/task-list";
import Footer from "./components/footer";
import "./style/index.css"



const App = () => {

    const todoData = [
        { label: 'Completed task', important: false },
        { label: 'Editing task', important: true },
        { label: 'Active task', important: false }
    ];

    return (
        <section className="todoapp">
            <AppHeader/>
            <TaskList todos={todoData} />
            <Footer/>
        </section >
    );
};




ReactDom.render(<App/>,
    document.getElementById('root'));