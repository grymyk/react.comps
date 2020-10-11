import React from 'react'

export const themes = {
    light: {
        foreground: '#ece5e5',
        background: '#3e6297',
    },

    dark: {
        foreground: '#fff',
        background: '#222',
    },
};

export const ThemeContext = React.createContext(themes.dark);

