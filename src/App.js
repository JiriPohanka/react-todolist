import './App.css';
import Attribution from './Components/Attribution';
import {
  BrowserRouter as Browser,
  Switch,
  Route
} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';

function App() {

  return (
    <Browser>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/about" component={About} />
      </Switch>

      <Attribution />

    </Browser>
  );
}

export default App;
