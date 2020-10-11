import React from 'react'

import {ThemeContext, themes} from './theme_context.js';
import ThemedButton from './themed_button.js';

import Toolbar from './Toolbar.js';

class App extends React.Component {
    state = {
        theme: themes.light,
    };

    toggleTheme = () => {
        this.setState(state => ({
            theme:
                state.theme === themes.dark
                    ? themes.light
                    : themes.dark,
        }));
    };

    render() {
        // The ThemedButton button inside the ThemeProvider
        // uses the theme from state while the one outside uses
        // the default dark theme
        return (
            <div>
                <ThemeContext.Provider value={this.state.theme}>
                    <Toolbar changeTheme={this.toggleTheme} />
                </ThemeContext.Provider>

                <div>
                    <ThemedButton />
                </div>
            </div>
        );
    }
}

export default App;
