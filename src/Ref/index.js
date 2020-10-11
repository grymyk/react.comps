import React from 'react'

class Ref extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    render() {
        const node = this.myRef.current;
        console.log(node)

        return <div ref={this.myRef}>Ref</div>
    }
}

export default Ref
