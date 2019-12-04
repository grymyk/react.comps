import React from 'react'

function Login(props) {
    return (
        <button onClick={props.onClick}>Login</button>
    );
}

function Logout(props) {
    return (
        <button onClick={props.onClick}>Logout</button>
    );
}

export {
    Login,
    Logout
}
