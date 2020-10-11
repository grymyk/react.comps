import React, {useState, useEffect} from 'react'

function Hook() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    useEffect( () => {
        document.title = `You clicked ${count} times`
    });

    const handlerClick = () => {
        setCount(count + 1)
    };

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick = {handlerClick}>
                Click Me by HOOK
            </button>
        </div>
    )
}

export default Hook


