import React from 'react'

function Parent() {
    return 'Parent'
}

function Child() {
    return 'Child'
}

function MyButton(props) {
    let color = props.color;

    return (
        <p style = {{color: color}}>
            props.children
        </p>
    )
}

function Children() {
    return (
        <>
            <MyButton color="blue" shadowSize={2}>
                Click Me
            </MyButton>
            {/*<Parent />*/}
            {/*<Child />*/}
        </>
    )
}

export default Children
