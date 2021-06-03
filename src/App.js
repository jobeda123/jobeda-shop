import './App.css';
import { createContext, useState } from 'react';
import HomePage from './pages/HomePage/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export const UserContext = createContext();

function App() {

  const [drawer, setDrawer] = useState(false);

  return (
    <UserContext.Provider value={[drawer, setDrawer]}>
      <div className="App">
        <Router>
          <Switch>

            <Route path="/home">
              <HomePage />
            </Route>

            <Route path="/womenClothing">
              <HomePage />
            </Route>

            <Route path="/">
              <HomePage />
            </Route>
            
          </Switch>
        </Router>
      </div>
    </UserContext.Provider >
  );
}

export default App;


