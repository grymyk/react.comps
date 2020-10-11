import React, { useState, useEffect } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    let clickHandler = () => {
        setCount(count + 1)
    };

    useEffect( () => {
        document.title = `${count} number`;
    })

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick = {clickHandler}>
                Click me
            </button>
        </div>
    );
}

export default Counter
