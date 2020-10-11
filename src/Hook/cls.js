import React from 'react'

class Cls extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    handlerClick = () => {
        this.setState({ count: this.state.count + 1})
    };

    render() {
        return (
            <div>
                <p>You clicked {this.state.count} times</p>
                <button onClick={this.handlerClick}>
                    Click me by Class
                </button>
            </div>
        );
    }
}

export default Cls;
