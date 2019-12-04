import React from 'react'

function Hello(props) {
    return (<h1>hello, {props.name}</h1>)
}

export default function Welcome(props) {
    // return <h1>hello, {props.name}</h1>
    return <Hello name = {props.name} />
}
