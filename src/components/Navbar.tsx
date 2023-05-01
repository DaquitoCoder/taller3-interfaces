import '../css/Navbar.css';
import { useStatesStore } from '../store/StatesStore';

const Navbar = () => {
  const { voiceRecognition, setVoiceRecognition } = useStatesStore();

  return (
    <nav className='navbar navbar-expand-lg bg-dark-subtle'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>
          Smart House
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav'>
            <button type="button" className="btn btn-secondary" onClick={() => (setVoiceRecognition(!voiceRecognition))}>
              <i className='fas fa-microphone'></i>
              {voiceRecognition
                ? ' Desactivar reconocimiento de voz'
                : ' Activar reconocimiento de voz'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
