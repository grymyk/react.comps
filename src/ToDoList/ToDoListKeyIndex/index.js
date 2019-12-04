import React from 'react'

import helpers from "../helpers";

const ToDo = (props) => (
    <tr>
        <td>
            <label>{props.id}</label>
        </td>
        <td>
            <input />
        </td>
        <td>
            <label>{props.createdAt.toTimeString()}</label>
            {/*<label></label>*/}
        </td>
    </tr>
);

const DiffAdd = (props) => (
    <tr>
        <td>
            <label>Diff:</label>
        </td>
        <td></td>
        <td>
            <label>Adding:{props.time + ' ms'}</label>
        </td>
    </tr>
);

export default class ToDoListKeyIndex extends React.Component {
    constructor() {
        super();

        const date = new Date();
        const todoCounter = 1;
        const timeDiffAdd = 0;

        this.state = {
            todoCounter: todoCounter,
            list: [{
                id: todoCounter,
                createdAt: date,
            }],
            diffAdd: timeDiffAdd
        };
    }

    sortByEarliest() {
        const sortedList = this.state.list.sort((a, b) => {
            return a.createdAt - b.createdAt;
        });

        this.setState({
            list: [...sortedList],
        });
    }

    sortByLatest() {
        const sortedList = this.state.list.sort((a, b) => {
            return b.createdAt - a.createdAt;
        });

        this.setState({
            list: [...sortedList],
        });
    }

    addToEnd() {
        const date = new Date();
        const timeDiffAdd = this.getTimeDiff(date);

        const nextId = this.state.todoCounter + 1;

        const newList = [
            ...this.state.list,
            {
                id: nextId,
                createdAt: date
            }
        ];

        this.setState({
            list: newList,
            todoCounter: nextId,
            diffAdd: +timeDiffAdd
        });
    }

    addToStart() {
        const date = new Date();
        const timeDiffAdd = helpers.getTimeDiff(date);

        const nextId = this.state.todoCounter + 1;
        const newList = [{
                id: nextId,
                createdAt: date
            },
            ...this.state.list,
        ];

        this.setState({
            list: newList,
            todoCounter: nextId,
            diffAdd: +timeDiffAdd
        });
    }

    render() {
        return (
            <div>
                <code>key=index</code>
                <div>
                    <button onClick={this.addToStart.bind(this)}>
                        Add New to Start
                    </button>
                    <button onClick={this.addToEnd.bind(this)}>
                        Add New to End
                    </button>
                    <button onClick={this.sortByEarliest.bind(this)}>
                        Sort by Earliest
                    </button>
                    <button onClick={this.sortByLatest.bind(this)}>
                        Sort by Latest
                    </button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th />
                            <th>created at</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.list.map((todo, index) => (
                            <ToDo key={index} {...todo} />
                        ))}
                    </tbody>
                    <tfoot>
                        <DiffAdd time = {this.state.diffAdd} />
                        {/*<DiffSort time = {this.state.diff} />*/}
                    </tfoot>
                </table>
            </div>
        );
    }
}
