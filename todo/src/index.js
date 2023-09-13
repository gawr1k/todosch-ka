import React from 'react';
import ReactDom from 'react-dom';

import AppHeader from "./components/app-header";
import TaskList from "./components/task-list";
import Footer from "./components/footer";
import "./style/index.css"



const App = () => {
    return (
        <div>
            <AppHeader/>
            <TaskList/>
            <Footer/>
        </div>
    );
};




ReactDom.render(<App/>,
    document.getElementById('root'));