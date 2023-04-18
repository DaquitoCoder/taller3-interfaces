import '../css/ConfigMenu.css';
import React, { useState } from 'react';

type ConfigMenuProps = {
  isOpen: boolean;
};

const ConfigMenu = ({ isOpen }: ConfigMenuProps) => {
  // Declaración de la variable de estado "nombre" y su función "setNombre"

  const [nombre, setNombre] = useState('');

  // Manejador del evento "onChange" para actualizar el estado "nombre"
  const handleChange = (event: any) => {
    setNombre(event.target.value);
  };

  // Manejador del evento "onSubmit" para el formulario
  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Aquí puedes realizar acciones con el nombre, como enviarlo a un servidor o mostrar un mensaje
    alert('Nombre ingresado: ' + nombre);
  };

  return (
    <>
      <div className={'config-menu ' + (isOpen ? 'mostrar' : 'ocultar')}>
        <h2>Configuración</h2>
        <div className='user-name'>
          <form action='' id='form-name' onSubmit={handleSubmit}>
            <label htmlFor='name'>Nombre: </label>
            <input type='text' name='name' value={nombre} id='name' onChange={handleChange}/>
            <input type='submit' value={'Establecer nombre'} />
          </form>
        </div>
      </div>
    </>
  );
};

export default ConfigMenu;
