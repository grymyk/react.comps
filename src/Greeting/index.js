import React from 'react'

function User() {
    return <h1>Welcome back!</h1>
}

function Guest() {
    return <h1>Please, sign up</h1>
}

export default function Greeting(props) {
    const isLogin = props.isLogin;

    if (isLogin) {
        return <User />;
    }

    return <Guest />;
}
