import '../css/ConfigMenu.css';

type ConfigMenuProps = {
  isOpen: boolean;
};

const ConfigMenu = ({ isOpen }: ConfigMenuProps) => {
  return (
    <>
      <div className={'config-menu ' + (isOpen ? 'mostrar' : 'ocultar') }>
        <h2>Configuración</h2>
        <div className='user-name'>
          <label htmlFor='name'>Nombre: </label>
          <input type='text' name='name' id='name' />
        </div>
      </div>
    </>
  );
};

export default ConfigMenu;
