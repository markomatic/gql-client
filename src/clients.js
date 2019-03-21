import createClient from './create-client';

const clients = { };

export const registerClient = (
    {
        alias,
        apiUrl
    }) => {
    clients[alias] = createClient({
        apiUrl
    });
};

export const getClient = alias => clients[alias];
