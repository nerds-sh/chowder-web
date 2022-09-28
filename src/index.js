import React from 'react'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://localhost::5000/api/graphql/',
    cache: new InMemoryCache(),
});

const root = createRoot(document.getElementById('root'))

root.render(<BrowserRouter>
    <ApolloProvider client={client}>
        <App />
     </ApolloProvider>
</BrowserRouter>)
