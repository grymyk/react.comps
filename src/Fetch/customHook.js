import React, {useState} from 'react'
import useDataApi from './News'

function CustomHook() {
    const queryValue = 'redux';
    const pass = 'https://hn.algolia.com/api/v1/search?query=' + queryValue;
    const url = pass + queryValue;

    const [query, setQuery] = useState('redux');
    const [{
        data,
        isLoading,
        isError }, doFetch] = useDataApi( url, { hits: [] },
    );

    console.log(data)

    return (
        <>
            <form onSubmit={event => {
                doFetch(pass + query);

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

export default CustomHook;
