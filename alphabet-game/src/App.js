import { useContext } from 'react';
import './App.css';
import { Body } from './components/Body/Body';
import { gameContext } from './components/Context/GameContext';
import { Keyboard } from './components/Keyboard/Keyboard';
import { Navbar } from './components/Navbar/Navbar';

function App() {

  const {theme} = useContext(gameContext);


  return (
    <div className={ theme==="light"? "AppLight" : "AppDark"}>
      <Navbar/>
      <Body />
      <Keyboard/>
    </div>
  );
}

export default App;
