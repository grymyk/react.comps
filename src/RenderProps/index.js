import React from 'react'

function Cursor(props) {
    const mouse = props.mouse;
  return (
        <p style={{ position: 'absolute', left: mouse.x, top: mouse.y }}>
            cursor
        </p>
    );
}

class Mouse extends React.Component {
    state = {
        x: 20,
        y: 45
    };

    handleMouseMove = (event) => {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    };

    render() {
        return (
            <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
                {this.props.render(this.state)}
            </div>
        );
    }
}

function MouseTracker() {
    return (
        <>
            <p>The current mouse position is</p>
            <Mouse render = { (mouse) => (<Cursor mouse = {mouse} />) } />
        </>
    );
}

export default MouseTracker
