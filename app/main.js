import React from 'react';
import ReactDOM from 'react-dom';
import {TITLE} from './constants.js';

function Main(){
    return (
        <h1>Hello React</h1>
    )
}

ReactDOM.render(<Main />, document.getElementById('root'));