import React from 'react'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import {ApolloClient, InMemoryCache} from '@apollo/client'

export const client = () => new ApolloClient({
    uri: 'http://localhost:5001/api/graphql',
    cache: new InMemoryCache(),
})

const root = createRoot(document.getElementById('root'))

root.render(<BrowserRouter>
        <App />
</BrowserRouter>)
