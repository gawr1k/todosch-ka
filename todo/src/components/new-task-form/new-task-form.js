import React, {useState} from "react";

const NewTaskForm = ({onAdd}) => {

    const [text, setText] = React.useState('');

    return (
        <input className="new-todo"
        value={text}
        placeholder="What needs to be done?" 
        onChange={(e) => setText(e.target.value)} 
        autoFocus
        onKeyPress={(e) => {
            if (e.key === 'Enter') {
              onAdd(text);
              setText('');}}}
        />
    )
}

export default NewTaskForm;