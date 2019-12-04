import React from 'react'

export default class Toggle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {isToggle: true};
    }

    handleClick = (e) => {
        console.log(e.target.tagName);
        console.log(e.type);

        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    };

    render() {
        return (
            <button onClick = {this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}
