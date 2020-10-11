import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import ScrollToTop from './ScrollToTop'

function App() {
    return (
        <Router>
            <ScrollToTop />
            <App />
        </Router>
    );
}

export default App;
