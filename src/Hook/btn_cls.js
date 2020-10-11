import React, { Component } from "react";

export default class Button extends Component {
    state = {
        buttonText: "Click me"
    }

    handleClick = () => {
        this.setState(() => {
            return { buttonText: "clicked!" };
        });
    }

    render() {
        const { buttonText } = this.state;

        return (
            <button onClick={this.handleClick}>
                {buttonText}
            </button>
        );
    }
}
