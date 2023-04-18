import { createContext, useState } from 'react';
import Navbar from './components/Navbar';
import Plano from './components/Plano';
import './App.css';
import ConfigMenu from './components/ConfigMenu';
import Context from './components/Context';
import SpeechRecognition from './components/SpeechRecognition';

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className='container'>
      <Context.Provider value={openModal}>
        <Navbar setOpenModal={setOpenModal} />
        <Plano />
      </Context.Provider>
      <ConfigMenu isOpen={openModal} />
      <SpeechRecognition />
    </div>
  );
}

export default App;
