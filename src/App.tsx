import Navbar from './components/Navbar';
import Plano from './components/Plano';
import SpeechRecognition from './components/SpeechRecognition';
import { useStatesStore } from './store/StatesStore';
import './App.css';
import FacialRecognition from './components/FacialRecognition';
import ChatGPT from './components/ChatGPT';

function App() {
  const { username, setUserName } = useStatesStore();

  const onSubmitName = (e: any) => {
    e.preventDefault();
    setUserName(e.target.nameInput.value);
  };

  return (
    <>
      <Navbar />
      <br />
      <div className='container'>
        {username === '' ? (
          <div className='alert alert-warning' role='alert'>
            <h4 className='alert-heading'>
              ¡Bienvenid@! Ingresa tu nombre en el campo a la izquierda.
            </h4>
          </div>
        ) : (
          <div className='alert alert-success' role='alert'>
            <h4 className='alert-heading'>¡Bienvenid@ {username}!</h4>
          </div>
        )}
      </div>
      <div className='container-fluid d-flex' id='container-main'>
        <div className='name-form'>
          <form action='post' id='name-form' onSubmit={onSubmitName}>
            <label className='form-label'>
              Nombre:
              <br />
              <input
                type='text'
                className='form-control'
                name='nameInput'
                placeholder='Ingresa nombre'
                id='name-input'
                autoComplete='off'
                required
              />
              <button type='submit' className='btn btn-success mt-2'>
                Cambiar nombre
              </button>
            </label>
          </form>
          <br />
          <ChatGPT />
        </div>
        <Plano />
        <SpeechRecognition />
        <FacialRecognition />
      </div>
    </>
  );
}

export default App;
