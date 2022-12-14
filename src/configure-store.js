import { applyMiddleware, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from './reducers'
import { rootEpic } from './epics'

export const configureStore = () => {
    const epicMiddleware = createEpicMiddleware()
    const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(epicMiddleware)))
    epicMiddleware.run(rootEpic)

    return store
}
