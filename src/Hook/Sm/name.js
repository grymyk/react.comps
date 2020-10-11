import React, {useState, useEffect} from 'react';

function App() {
    let initalStateName = {
        firstName: 'name',
        surname: 'surname'
    };

    let initialStateTitle = 'BIO'


    const [title, setTitle] = useState(initialStateTitle);
    const [name, setName] = useState(initalStateName);

    useEffect( () => {
        setTitle('My full name');

        setName({
            firstName: 'Sergiy',
            surname: 'Stas'
        })
    }, []);

    return(
        <div>
            <h1>Title: {title}</h1>
            <h3>Name: {name.firstName}</h3>
            <h3>Surname: {name.surname}</h3>
        </div>
    );
};

export default App
