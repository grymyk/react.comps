import React, { Component } from 'react';

const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'react-three-fiber';

class Fetch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hits: [],
            isLoading: false,
            error: null
        };
    }

    componentDidMount() {
        this.setState({isLoading: true});


        fetch(API + DEFAULT_QUERY)
            .then( (response) => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error('Error ...')
                }
            })
            .then(response => {
                console.log(response)
                return response;
            })
            .then(data => this.setState({
                hits: data.hits,
                isLoading: false
            }));
    }

    render() {
        const { hits, isLoading, error } = this.state;

        if (error) {
            return <p>{error.message}</p>
        }

        if (isLoading) {
            return <p>Loading... </p>
        }

        let hit =  hits.map( (hit) =>
            <li key={hit.objectID}>
                <a href={hit.url}>{hit.title}</a>
            </li>
        )

        return (
            <ul>
                {hit}
            </ul>
        );
    }
}

export default Fetch;
