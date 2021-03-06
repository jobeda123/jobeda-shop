import './App.css';
import Header from './components/Header/Header';
import HeaderMain from './components/HeaderMain/HeaderMain';
import { createContext, useState } from 'react';

export const UserContext = createContext();

function App() {

  const [drawer, setDrawer] = useState(false);

  return (
    <UserContext.Provider value={[drawer, setDrawer]}>
    <div className="App">
      <Header></Header>
      <HeaderMain></HeaderMain>
    </div>
    </UserContext.Provider >
  );
}

export default App;
