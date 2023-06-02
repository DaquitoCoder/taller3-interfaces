import { useStatesStore } from '../store/StatesStore';

const Navbar = () => {
  const {
    voiceRecognition,
    setVoiceRecognition,
  } = useStatesStore();

  return (
    <nav className='navbar navbar-expand-lg bg-dark-subtle'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='/'>
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
            <br />
            <button
              type='button'
              className={
                voiceRecognition ? 'btn btn-danger' : 'btn btn-success'
              }
              onClick={() => setVoiceRecognition(!voiceRecognition)}
            >
              <i className='fas fa-microphone'></i>
              {voiceRecognition
                ? ' Desactivar reconocimiento de voz'
                : ' Activar reconocimiento de voz'}
            </button>
            <br />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
