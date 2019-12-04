import React from 'react'

import ToDoListKeyId from "./ToDoListKeyId/";
import ToDoListKeyIndex from "./ToDoListKeyIndex";

export default class ToDoList extends React.Component {
    render() {
        return (
            <>
                <ToDoListKeyId />
                {/*<ToDoListKeyIndex />*/}
            </>
        )
    }
}
