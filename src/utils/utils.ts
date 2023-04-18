
export const commands = [
  {
    indexes: ['abrir ventana cocina'],
    action: () => {
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
    }
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
    }        
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
    }
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
    }
  }
]