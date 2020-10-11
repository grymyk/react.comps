import React from 'react'
import {ThemeContext} from './theme_context';

function ThemeTogglerButton() {
    // The Theme Toggler Button receives not only the theme
    // but also a toggleTheme function from the context
    return (
        <ThemeContext.Consumer>
            { ({theme, toggleTheme} ) => (
                <button
                    onClick = {toggleTheme}
                    style = {{
                        backgroundColor: theme.background,
                        color: theme.color
                    }}>
                    Toggle Theme by Click
                </button>
            )}
        </ThemeContext.Consumer>
    );
}

export default ThemeTogglerButton;
