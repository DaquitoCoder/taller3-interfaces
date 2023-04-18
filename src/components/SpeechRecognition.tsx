import React, { useEffect } from 'react';
import Artyom from 'artyom.js/source/artyom';
import { commands } from '../utils/utils';

const MyComponent = () => {
  useEffect(() => {
    // Crear una instancia de Artyom
    const artyom = new Artyom();

    // Configurar comandos de voz
    artyom.addCommands(commands);

    // Iniciar el reconocimiento de voz
    artyom.initialize({
      lang: 'es-ES',
      continuous: true,
      listen: true,
      debug: false,
    });

    // Limpiar la instancia de Artyom al desmontar el componente
    return () => {
      artyom.fatality();
    };
  }, []);

  return (
    // Renderizar tu componente de React
    <div></div>
  );
};

export default MyComponent;
