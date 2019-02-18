import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { getApiUrl } from './api-url';

let client;

export default () => {
    if (client) {
        return client;
    }

    const defaultOptions = {
        watchQuery: {
            fetchPolicy: 'no-cache',
            errorPolicy: 'ignore'
        },
        query: {
            fetchPolicy: 'no-cache',
            errorPolicy: 'all'
        }
    };

    const httpLink = createHttpLink({
        uri: getApiUrl()
    });

    return (client = new ApolloClient({
        link: httpLink,
        cache: new InMemoryCache(),
        defaultOptions
    }));
};
