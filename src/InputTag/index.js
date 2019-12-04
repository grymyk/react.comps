import React from 'react';

export default class NameForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {value: 'Please, type text'};
    }

    handleSubmit = (event) => {
        console.log('A name was submitted: ' + this.state.value);
        event.preventDefault();
    };

    handleChange = (event) => {
        this.setState({value: event.target.value});
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text"
                            value={this.state.value}
                            onChange={this.handleChange}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
