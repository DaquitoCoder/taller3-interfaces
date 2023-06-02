import React, { useEffect, useState } from 'react';
import Artyom from 'artyom.js/source/artyom';
import { useStatesStore } from '../store/StatesStore';

const MyComponent = () => {
  const { voiceRecognition } = useStatesStore();

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
            ventana.style.left = '494px';
            ventana.style.top = '599px';
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
            ventana.style.left = '168px';
            ventana.style.top = '606px';
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
      {
        indexes: ['abrir cámara'],
        action: () => {
          let camera = document.getElementById('camera') as HTMLDivElement;
          camera.style.display = 'flex';
        },
      },
      {
        indexes: ['cerrar cámara'],
        action: () => {
          let camera = document.getElementById('camera') as HTMLDivElement;
          camera.style.display = 'none';
        },
      },
      {
        indexes: ['abrir asistente'],
        action: () => {
          let asistente = document.getElementById('chat') as HTMLDivElement;
          asistente.style.display = 'flex';
        },
      },
      {
        indexes: ['cerrar asistente'],
        action: () => {
          let asistente = document.getElementById('chat') as HTMLDivElement;
          asistente.style.display = 'none';
        },
      },
      {
        indexes: ['encender luz cocina'],
        action: () => {
          artyom.say('encendiendo luz de la cocina');
          let luz = document.getElementById('bombillo-cocina');
          if (luz) {
            luz.style.backgroundPosition = 'right';
          }
        },
      },
      {
        indexes: ['apagar luz cocina'],
        action: () => {
          artyom.say('apagando luz de la cocina');
          let luz = document.getElementById('bombillo-cocina');
          if (luz) {
            luz.style.backgroundPosition = 'left';
          }
        },
      },
      {
        indexes: ['encender luz comedor'],
        action: () => {
          artyom.say('encendiendo luz del comedor');
          let luz = document.getElementById('bombillo-comedor');
          if (luz) {
            luz.style.backgroundPosition = 'right';
          }
        },
      },
      {
        indexes: ['apagar luz comedor'],
        action: () => {
          artyom.say('apagando luz del comedor');
          let luz = document.getElementById('bombillo-comedor');
          if (luz) {
            luz.style.backgroundPosition = 'left';
          }
        },
      },
      {
        indexes: ['encender luz sala'],
        action: () => {
          artyom.say('encendiendo luz de la sala');
          let luz = document.getElementById('bombillo-sala');
          if (luz) {
            luz.style.backgroundPosition = 'right';
          }
        },
      },
      {
        indexes: ['apagar luz sala'],
        action: () => {
          artyom.say('apagando luz de la sala');
          let luz = document.getElementById('bombillo-sala');
          if (luz) {
            luz.style.backgroundPosition = 'left';
          }
        },
      },
      {
        indexes: ['encender luz habitación uno'],
        action: () => {
          artyom.say('encendiendo luz de la habitación uno');
          let luz = document.getElementById('bombillo-cuarto1');
          if (luz) {
            luz.style.backgroundPosition = 'right';
          }
        },
      },
      {
        indexes: ['apagar luz habitación uno'],
        action: () => {
          artyom.say('apagando luz de la habitación uno');
          let luz = document.getElementById('bombillo-cuarto1');
          if (luz) {
            luz.style.backgroundPosition = 'left';
          }
        },
      },
      {
        indexes: ['encender luz habitación dos'],
        action: () => {
          artyom.say('encendiendo luz de la habitación dos');
          let luz = document.getElementById('bombillo-cuarto2');
          if (luz) {
            luz.style.backgroundPosition = 'right';
          }
        },
      },
      {
        indexes: ['apagar luz habitación dos'],
        action: () => {
          artyom.say('apagando luz de la habitación dos');
          let luz = document.getElementById('bombillo-cuarto2');
          if (luz) {
            luz.style.backgroundPosition = 'left';
          }
        },
      },
      {
        indexes: ['encender luz habitación tres'],
        action: () => {
          artyom.say('encendiendo luz de la habitación tres');
          let luz = document.getElementById('bombillo-cuarto3');
          if (luz) {
            luz.style.backgroundPosition = 'right';
          }
        },
      },
      {
        indexes: ['apagar luz habitación tres'],
        action: () => {
          artyom.say('apagando luz de la habitación tres');
          let luz = document.getElementById('bombillo-cuarto3');
          if (luz) {
            luz.style.backgroundPosition = 'left';
          }
        },
      },
      {
        indexes: ['encender luz baño habitación'],
        action: () => {
          artyom.say('apagando luz del baño de la habitación');
          let luz = document.getElementById('bombillo-bano-habitacion');
          if (luz) {
            luz.style.backgroundPosition = 'right';
          }
        },
      },
      {
        indexes: ['apagar luz baño habitación'],
        action: () => {
          artyom.say('encendiendo luz del baño de la habitación');
          let luz = document.getElementById('bombillo-bano-habitacion');
          if (luz) {
            luz.style.backgroundPosition = 'left';
          }
        },
      },
      {
        indexes: ['encender luz cuarto de lavado'],
        action: () => {
          artyom.say('apagando luz del cuarto de lavado');
          let luz = document.getElementById('bombillo-lavado');
          if (luz) {
            luz.style.backgroundPosition = 'right';
          }
        },
      },
      {
        indexes: ['apagar luz cuarto de lavado'],
        action: () => {
          artyom.say('encendiendo luz del cuarto de lavado');
          let luz = document.getElementById('bombillo-lavado');
          if (luz) {
            luz.style.backgroundPosition = 'left';
          }
        },
      },
      {
        indexes: ['encender luz baño principal'],
        action: () => {
          artyom.say('apagando luz del baño principal');
          let luz = document.getElementById('bombillo-bano-principal');
          if (luz) {
            luz.style.backgroundPosition = 'right';
          }
        },
      },
      {
        indexes: ['apagar luz baño habitación'],
        action: () => {
          artyom.say('encendiendo luz del baño principal');
          let luz = document.getElementById('bombillo-bano-principal');
          if (luz) {
            luz.style.backgroundPosition = 'left';
          }
        },
      },

    ]);

    // Iniciar el reconocimiento de voz
    if (voiceRecognition) {
      artyom.initialize({
        lang: 'es-ES',
        continuous: true,
        listen: true, // Activar el reconocimiento de voz
        debug: true,
      });
    } else {
      artyom.fatality(); // Detener el reconocimiento de voz
    }

    // Limpiar la instancia de Artyom al desmontar el componente
    return () => {
      artyom.fatality();
    };
  }, [voiceRecognition]);

  return <></>;
};

export default MyComponent;
