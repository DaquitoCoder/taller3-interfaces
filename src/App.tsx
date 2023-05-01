import Navbar from './components/Navbar';
import Plano from './components/Plano';
import './App.css';
import SpeechRecognition from './components/SpeechRecognition';

function App() {
  return (
    <>
      <Navbar />
      <div className='container-fluid'>
        <Plano />
        <SpeechRecognition />
      </div>
    </>
  );
}

export default App;
