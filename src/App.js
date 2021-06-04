import './App.css';
import { createContext, useState } from 'react';
import HomePage from './pages/HomePage/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import WomenClothingPage from './pages/WomenClothingPage/WomenClothingPage';
import MenClothingPage from './pages/MenClothingPage/MenClothingPage';
import ElectronicsPage from './pages/ElectronicsPage/ElectronicsPage';
import JewelleryPage from './pages/JewelleryPage/JewelleryPage';

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
              <WomenClothingPage />
            </Route>

            <Route path="/menClothing">
              <MenClothingPage />
            </Route>

            <Route path="/jewellery">
              <JewelleryPage />
            </Route>

            <Route path="/electronics">
              <ElectronicsPage />
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


