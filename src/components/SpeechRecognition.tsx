import React, { useEffect, useState } from 'react';
import Artyom from 'artyom.js/source/artyom';

const MyComponent = () => {
  const [isListening, setIsListening] = useState(false);
  
  useEffect(() => {
    // Crear una instancia de Artyom
    const artyom = new Artyom();

    // Configurar comandos de voz
    artyom.addCommands([
      {
        indexes: ['abrir ventana cocina'],
        action: () => {
          artyom.say('Abriendo ventana de la cocina');
          let ventana = document.getElementById('ventana-cocina');
          if (ventana) {
            ventana.style.left = '50px';
            ventana.style.top = '450px';
            ventana.style.rotate = '26deg';
          }
        },
      },
      {
        indexes: ['cerrar ventana cocina'],
        action: () => {
          artyom.say('Cerrando ventana de la cocina');
          let ventana = document.getElementById('ventana-cocina');
          if (ventana) {
            ventana.style.rotate = '0deg';
            ventana.style.left = '66px';
            ventana.style.top = '450px';
          }
        },
      },
      {
        indexes: ['abrir ventana sala'],
        action: () => {
          let ventana = document.getElementById('ventana-sala');
          if (ventana) {
            ventana.style.rotate = '70deg';
            ventana.style.left = '493px';
            ventana.style.top = '610px';
          }
        },
      },
      {
        indexes: ['cerrar ventana sala'],
        action: () => {
          let ventana = document.getElementById('ventana-sala');
          if (ventana) {
            ventana.style.rotate = '90deg';
            ventana.style.left = '492px';
            ventana.style.top = '597px';
          }
        },
      },
      {
        indexes: ['abrir ventana comedor'],
        action: () => {
          let ventana = document.getElementById('ventana-comedor');
          if (ventana) {
            ventana.style.rotate = '70deg';
            ventana.style.left = '168px';
            ventana.style.top = '615px';
          }
        },
      },
      {
        indexes: ['cerrar ventana comedor'],
        action: () => {
          let ventana = document.getElementById('ventana-comedor');
          if (ventana) {
            ventana.style.rotate = '90deg';
            ventana.style.left = '166px';
            ventana.style.top = '603px';
          }
        },
      },
      {
        indexes: ['abrir ventana habitación uno'],
        action: () => {
          let ventana = document.getElementById('ventana-hab1');
          if (ventana) {
            ventana.style.rotate = '70deg';
            ventana.style.left = '280px';
            ventana.style.top = '-181px';
          }
        },
      },
      {
        indexes: ['cerrar ventana habitación uno'],
        action: () => {
          let ventana = document.getElementById('ventana-hab1');
          if (ventana) {
            ventana.style.rotate = '90deg';
            ventana.style.left = '280px';
            ventana.style.top = '-181px';
          }
        },
      },
    ]);

    // Iniciar el reconocimiento de voz
    if (isListening) {
      artyom.initialize({
        lang: 'es-ES',
        continuous: true,
        listen: true, // Activar el reconocimiento de voz
        debug: true
      });
    } else {
      artyom.fatality(); // Detener el reconocimiento de voz
    }

    // Limpiar la instancia de Artyom al desmontar el componente
    return () => {
      artyom.fatality();
    };
  }, [isListening]);

  const toggleVoiceRecognition = () => {
    setIsListening(!isListening); // Invertir el estado de isListening
  };

  return (
    // Renderizar tu componente de React
    <div>
      <button onClick={toggleVoiceRecognition}>
        <i className='fas fa-microphone'></i>
        {isListening
          ? ' Desactivar reconocimiento de voz'
          : ' Activar reconocimiento de voz'}
      </button>
    </div>
  );
};

export default MyComponent;
