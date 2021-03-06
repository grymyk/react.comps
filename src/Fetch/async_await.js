import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    let pass = 'https://hn.algolia.com/api/v1/search?query=redux'

    const [data, setData] = useState({ hits: [] });
    const [query, setQuery] = useState('redux');
    const [url, setUrl] = useState(pass);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);

            try {
                const result = await axios(url);

                setData(result.data);
            } catch (error) {
                setIsError(true);
            }

            setIsLoading(false);
        };
    }, [url]);

    return (
        <>
            <form onSubmit={event => {

                console.log('xcd')
                setUrl(`http://hn.algolia.com/api/v1/search?query=${query}`);

                event.preventDefault();
            }}>
            <input
                type="text"
                value={query}
                onChange={event => setQuery(event.target.value)}
            />

                <button type="submit">Search</button>
            </form>

            {isError && <div>Something went wrong ...</div>}

            {isLoading ? (
                <div>Loading ...</div>
            ) : (
                <ul>
                    {data.hits.map(item => (
                        <li key={item.objectID}>
                            <a href={item.url}>{item.title}</a>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}

export default App;
