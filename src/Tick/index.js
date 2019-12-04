import React from 'react'
//
// export default function tick() {
//     return (
//         <div>
//             <h1>Hello, React!</h1>
//             <h2>It is {new Date().toLocaleTimeString()}.</h2>
//         </div>
//     );
// }

function Clock(props) {
    return (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {props.date.toLocaleTimeString()}.</h2>
        </div>
    );
}

export default function tick() {
    return (
        <Clock date={new Date()} />
    )
}
