import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import About from './About.js'
import Users from './Users.js'
import Home from './Home.js'

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/about">
                        about
                        <About />
                    </Route>
                    <Route path="/users">
                        Users
                        <Users />
                    </Route>
                    <Route path="/">
                        Home
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
