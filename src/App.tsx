import Navbar from './components/Navbar';
import Plano from './components/Plano';
import SpeechRecognition from './components/SpeechRecognition';
import { useStatesStore } from './store/StatesStore';
import './App.css';

function App() {
  const { username, setUserName } = useStatesStore();
  const nameInput = document.getElementById('name-input') as HTMLInputElement;

  const onSubmitName = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUserName(nameInput?.value);
  };

  return (
    <>
      <Navbar />
      <br />
      <div className='container'>
        {username === '' ? (
          <div className='alert alert-warning' role='alert'>
            <h4 className='alert-heading'>
              ¡Bienvenido! Ingresa tu nombre en el campo a la izquierda.
            </h4>
          </div>
        ) : (
          <div className='alert alert-success' role='alert'>
            <h4 className='alert-heading'>¡Bienvenido {username}!</h4>
          </div>
        )}
      </div>
      <div className='container-fluid d-flex'>
        <div className='name-form'>
          <form action='post' id='name-form' onSubmit={onSubmitName}>
            <label className='form-label'>
              Nombre:
              <br />
              <input
                type='text'
                className='form-control'
                placeholder='Ingresa nombre'
                id='name-input'
                autoComplete='off'
                defaultValue={username}
                required
              />
              <button type='submit' className='btn btn-success mt-2'>
                Cambiar nombre
              </button>
            </label>
          </form>
        </div>
        <Plano />
        <SpeechRecognition />
      </div>
    </>
  );
}

export default App;
