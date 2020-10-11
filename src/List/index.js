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

// Calls the children callback numTimes to produce a repeated component
function Repeat(props) {
    let items = [];

    for (let i = 0; i < props.numTimes; i++) {
        items.push(props.children(i));
    }
    return <div>{items}</div>;
}

function ListOfTenThings() {
    return (
        <Repeat numTimes={10}>
            { (index) => <div key={index}>This is item {index} in the list</div>}
        </Repeat>
    );
}

// export default List;
export default ListOfTenThings;
