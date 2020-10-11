import React from 'react'

export const themes = {
    light: {
        color: '#000',
        background: '#eee',
    },

    dark: {
        color: '#fff',
        background: '#222',
    },
};

// Make sure the shape of the default value passed to
// createContext matches the shape that the consumers expect!
export const ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme: () => {},
});

