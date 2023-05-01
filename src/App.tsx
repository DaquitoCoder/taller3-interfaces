import Navbar from './components/Navbar';
import Plano from './components/Plano';
import SpeechRecognition from './components/SpeechRecognition';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <br />
      <div className='container-fluid d-flex'>
        <div className='name-form'>
          <label className='form-label'>
            Nombre:
            <input
              type='text'
              className='form-control'
              placeholder='Ingresa nombre'
            />
            <button type='button' className='btn btn-success'>
              Cambiar nombre
            </button>
          </label>
        </div>
        <Plano />
        <SpeechRecognition />
      </div>
    </>
  );
}

export default App;
