import React from 'react'

const NumberContext = React.createContext();

function App() {
    return (
        <NumberContext.Provider value={45}>
            <div>
                <Display />
            </div>
        </NumberContext.Provider>
    );
}

function Display() {
    return (
        <NumberContext.Consumer>
            {value => <div>The answer to the question is {value}.</div>}
        </NumberContext.Consumer>
    );
}

export default App;
