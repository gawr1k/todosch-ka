import React from 'react';
import ReactDom from 'react-dom';

const el = (
    <div>
        <h1>Hello World</h1>
        <input placeholder='search' />
        <ul>
            <li>Learn React</li>
            <li>Build Awesome App</li>
        </ul>
    </div>
);


ReactDom.render(el,
    document.getElementById('root'));