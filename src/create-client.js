import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';

export default (
    {
        apiUrl
    }) => {
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

    const httpLink = createHttpLink({ uri: apiUrl });

    return new ApolloClient({
        link: httpLink,
        cache: new InMemoryCache(),
        defaultOptions
    });
};
