import React,{useState} from 'react';
import AppHeader from '../app-header/app-header';
import TaskList from '../task-list';
import Footer from '../footer/footer';
import NewTaskForm from "../new-task-form"

function App() {

    const [tasks, setTasks] = useState([]);
  
    const addTask = (text) => {
      setTasks([...tasks, {text, id: Date.now()}]);
    }
  
    return (
      <>
        <AppHeader/>
        <NewTaskForm onAdd={addTask} />
        <TaskList tasks={tasks} />
        <Footer/>
      </>
    )
  }


export default App;