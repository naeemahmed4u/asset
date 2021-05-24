import React from 'react';
import { Signup } from './components/Signup';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { ApolloProvider } from  '@apollo/react-hooks';

const httpLink = createHttpLink({
    uri: 'http://localhost:4000/naeem'
})

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
})

export default (
    <ApolloProvider client={client}>
        <Signup />
    </ApolloProvider>
)