import React from 'react'

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

function Cursor(props) {
    const mouse = props.mouse;
    return (
        <p style={{ position: 'absolute', left: mouse.x, top: mouse.y }}>
            cursor
        </p>
    );
}

function withMouse(Component) {
    return class extends React.Component {
        render() {
            return(
                <Mouse render={ mouse =>
                        <Component {...this.props} mouse={mouse} />
                    }
                />
            )
        }
    }
}

export default withMouse(Cursor)
