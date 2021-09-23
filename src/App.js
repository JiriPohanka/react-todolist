import Attribution from './Components/Attribution';
import {
  BrowserRouter as Browser,
  Switch,
  Route
} from 'react-router-dom';
import Home from './Pages/Home';

function App() {

  return (
    <>
      <div className="bgr-strip" />
      <Browser>
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
        <div className="drag-drop">drag and drop to reorder list</div>
        <Attribution />

      </Browser>
    </>
  );
}

export default App;
