import React from 'react'

function Item(props) {
    return <li>{props.value}</li>
}

function List(props) {
    const numbers = [1, 4, 434, 55, 45, 33,] || props.numbers;

    // const numberToItem = (number, index) => <li key={index}>{number}</li>;
    const numberToItem = (number, index) => {
        return <Item key={number.id || index} value={number} />;
    };

    const listItem = numbers.map(numberToItem);

    return (
        <ul>{listItem}</ul>
    );
}

export default List;
