import './App.css'
import { Menu } from './menu'
import {configureStore} from './configure-store'
import {Provider} from 'react-redux'

function App() {
  return (
    <div className="App">
        <Provider store={configureStore()}>
            <Menu />
        </Provider>
    </div>
  );
}

export default App;
