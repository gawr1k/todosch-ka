import React from 'react';
import ReactDom from 'react-dom';
import AppHeader from "./components/appheader";
import SearchPanel from "./components/serch-panel";
import TodoList from "./components/todo-list";





const App = () => {

    const todoData = [
        {label: 'Drink Cofee', important:false},
        {label: 'Make Awesome App', important:true},
        {label: 'Have a lunch', important:false}
    ]
    return (
        <div>
            <AppHeader/>
            <SearchPanel/>
            <TodoList todos={todoData}/>
        </div>
    );
};




ReactDom.render(<App/>,
    document.getElementById('root'));