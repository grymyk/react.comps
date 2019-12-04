import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Behavior from './Behavior';

import * as serviceWorker from './serviceWorker';
//
// const numbers = [1, 2, 3 , 4, 5];
// ReactDOM.render(<List numbers = {numbers} />, document.getElementById('root'));

ReactDOM.render(
    <Behavior />,
    document.getElementById('root')
);

// setInterval( () => {
//     ReactDOM.render(<Tick />, document.getElementById('root'));
// }, 1000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
