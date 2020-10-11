import React from 'react'

import {ThemeContext, themes} from './theme_context';
import Content from './Content';

class App extends React.Component {
    toggleTheme = () => {
        this.setState(state => ({
            theme:
                state.theme === themes.dark
                    ? themes.light
                    : themes.dark,
        }));
    };

    state = {
        theme: themes.light,
        toggleTheme: this.toggleTheme,
    };

    render() {
        // The entire state is passed to the provider
        return (
            <ThemeContext.Provider value={this.state}>
                <Content />
            </ThemeContext.Provider>
        );
    }
}

export default App;
