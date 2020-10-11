import React from 'react'

// An intermediate component that uses the ThemedButton
import ThemedButton from "./themed_button";

function Toolbar(props) {
    return (
        <ThemedButton onClick={props.changeTheme}>
            Change Theme
        </ThemedButton>
    );
}

export default Toolbar
