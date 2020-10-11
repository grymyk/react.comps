import React from 'react'

const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';

class Axios extends React.Component {
    state = {
        hits: [],
        isLoading: false,
        error: null
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        axios.get(API + DEFAULT_QUERY)
            .then(result => this.setState({
                hits: result.data.hits,
                isLoading: false
            }))
            .catch(error => this.setState({
                error,
                isLoading: false
            }));
    }
}
