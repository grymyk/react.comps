import React from 'react'

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Myk',
    lastName: 'Gry'
};

const element = (
    <h1>
        Hello, {formatName(user)}!
    </h1>
);

export default function Element() {
    return element
}
