import React from 'react';
import ReactDom from 'react-dom';
import AppHeader from "./components/appheader";
import SearchPanel from "./components/serch-panel";
import TodoList from "./components/todo-list";





const App = () => {
    return (
        <div>
            <AppHeader/>
            <SearchPanel/>
            <TodoList/>
        </div>
    );
};




ReactDom.render(<App/>,
    document.getElementById('root'));