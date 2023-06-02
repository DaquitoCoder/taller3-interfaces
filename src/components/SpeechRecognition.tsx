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
          artyom.say('abriendo ventana de la sala');
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
          artyom.say('cerrando ventana de la sala');
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
          artyom.say('abriendo ventana del comedor');
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
          artyom.say('cerrando ventana del comedor');
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
          artyom.say('abriendo ventana de la habitación uno');
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
          artyom.say('cerrando ventana de la habitación uno');
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
          artyom.say('abriendo cámara');
          let camera = document.getElementById('camera') as HTMLDivElement;
          camera.style.display = 'flex';
        },
      },
      {
        indexes: ['cerrar cámara'],
        action: () => {
          artyom.say('cerrando cámara');
          let camera = document.getElementById('camera') as HTMLDivElement;
          camera.style.display = 'none';
        },
      },
      {
        indexes: ['abrir asistente'],
        action: () => {
          artyom.say('abriendo asistente');
          let asistente = document.getElementById('chat') as HTMLDivElement;
          asistente.style.display = 'flex';
        },
      },
      {
        indexes: ['cerrar asistente'],
        action: () => {
          artyom.say('cerrando asistente');
          let asistente = document.getElementById('chat') as HTMLDivElement;
          asistente.style.display = 'none';
        },
      },
      {
        indexes: ['abrir puerta habitación uno'],
        action: () => {
          artyom.say('abriendo puerta habitación uno');
          let puerta = document.getElementById('puerta-hab1');
          if (puerta) {
            puerta.style.rotate = '120deg';
            puerta.style.left = '359px';
            puerta.style.top = '-365px';
          }
        },
      },
      {
        indexes: ['cerrar puerta habitación uno'],
        action: () => {
          artyom.say('cerrando puerta habitación uno');
          let puerta = document.getElementById('puerta-hab1');
          if (puerta) {
            puerta.style.rotate = '90deg';
            puerta.style.left = '355px';
            puerta.style.top = '-356px';
          }
        },
      },
      {
        indexes: ['abrir puerta baño habitación uno'],
        action: () => {
          artyom.say('abriendo puerta baño habitación uno');
          let puerta = document.getElementById('puerta-bano-habitacion');
          if (puerta) {
            puerta.style.rotate = '30deg';
            puerta.style.left = '176px';
            puerta.style.top = '-335px';
          }
        },
      },
      {
        indexes: ['cerrar puerta baño habitación uno'],
        action: () => {
          artyom.say('cerrando puerta habitación uno');
          let puerta = document.getElementById('puerta-bano-habitacion');
          if (puerta) {
            puerta.style.rotate = '0deg';
            puerta.style.left = '166px';
            puerta.style.top = '-338px';
          }
        },
      },
      {
        indexes: ['abrir puerta habitación dos'],
        action: () => {
          artyom.say('abriendo puerta habitación dos');
          let puerta = document.getElementById('puerta-hab2');
          if (puerta) {
            puerta.style.rotate = '30deg';

            puerta.style.left = '405px';
            puerta.style.top = '-368px';
          }
        },
      },
      {
        indexes: ['cerrar puerta habitación dos'],
        action: () => {
          artyom.say('cerrando puerta habitación dos');
          let puerta = document.getElementById('puerta-hab2');
          if (puerta) {
            puerta.style.rotate = '0deg';
            puerta.style.left = '394px';
            puerta.style.top = '-372px';
          }
        },
      },
      {
        indexes: ['abrir puerta habitación tres'],
        action: () => {
          artyom.say('abriendo puerta habitación tres');
          let puerta = document.getElementById('puerta-hab3');
          if (puerta) {
            puerta.style.rotate = '30deg';
            puerta.style.left = '405px';
            puerta.style.top = '-331px';
          }
        },
      },
      {
        indexes: ['cerrar puerta habitación tres'],
        action: () => {
          artyom.say('cerrando puerta habitación tres');
          let puerta = document.getElementById('puerta-hab3');
          if (puerta) {
            puerta.style.rotate = '0deg';
            puerta.style.left = '394px';
            puerta.style.top = '-335px';
          }
        },
      },
      {
        indexes: ['abrir puerta baño principal'],
        action: () => {
          artyom.say('abriendo puerta baño principal');
          let puerta = document.getElementById('puerta-bano-principal');
          if (puerta) {
            puerta.style.rotate = '30deg';
            puerta.style.left = '313px';
            puerta.style.top = '-246px';
          }
        },
      },
      {
        indexes: ['cerrar puerta baño principal'],
        action: () => {
          artyom.say('cerrando puerta baño principal');
          let puerta = document.getElementById('puerta-bano-principal');
          if (puerta) {
            puerta.style.rotate = '0deg';
            puerta.style.left = '323px';
            puerta.style.top = '-243px';
          }
        },
      },
      {
        indexes: ['abrir puerta lavado'],
        action: () => {
          artyom.say('abriendo puerta lavado');
          let puerta = document.getElementById('puerta-lavado');
          if (puerta) {
            puerta.style.rotate = '120deg';
            puerta.style.left = '165px';
            puerta.style.top = '-370px';
          }
        },
      },
      {
        indexes: ['cerrar puerta lavado'],
        action: () => {
          artyom.say('cerrando puerta lavado');
          let puerta = document.getElementById('puerta-lavado');
          if (puerta) {
            puerta.style.rotate = '90deg';
            puerta.style.left = '162px';
            puerta.style.top = '-359px';
          }
        },
      },
      {
        indexes: ['abrir puerta principal'],
        action: () => {
          artyom.say('abriendo puerta principal');
          let puerta = document.getElementById('puerta-principal');
          if (puerta) {
            puerta.style.rotate = '120deg';
            puerta.style.left = '356px';
            puerta.style.top = '-125px';
          }
        },
      },
      {
        indexes: ['cerrar puerta principal'],
        action: () => {
          artyom.say('cerrando puerta principal');
          let puerta = document.getElementById('puerta-principal');
          if (puerta) {
            puerta.style.rotate = '90deg';
            puerta.style.left = '351px';
            puerta.style.top = '-106px';
          }
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

    artyom.when('NOT_COMMAND_MATCHED', () => {
      artyom.say(
        'Perdona, no entendí tu mensaje. Repitelo otra vez por favor.'
      );

      setTimeout(function () {
        artyom.shutUp();
      }, 7000);
    });

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
