import './App.css'
import { configureStore } from './configure-store'
import {Provider} from 'react-redux'
import { Routes } from './routes'

function App() {
  return (
    <div className="App">
        <Provider store={configureStore()}>
            <Routes />
        </Provider>
    </div>
  );
}

export default App
