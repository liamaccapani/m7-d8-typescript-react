import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* <Route exact path="/" render={(routerProps)=> <Search />} /> */}
      </header>
    </div>
  );
}

export default App;
