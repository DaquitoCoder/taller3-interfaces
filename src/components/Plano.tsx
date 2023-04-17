import React from 'react'

const Plano = () => {
  
  return (
    <div className="container">
        <div className="plano">
          <div className="ventana cocina" onClick={() => alert('ventana cocina')}></div>
          <div className="ventana sala"></div>
          <div className="ventana comedor"></div>
          <div className="ventana habitacion-1"></div>
          <div className="ventana habitacion-2"></div>
          <div className="ventana habitacion-3"></div>
          <div className="puerta bano-principal"></div>
          <div className="puerta bano-habitacion"></div>
          <div className="puerta hab-1"></div>
          <div className="puerta hab-2"></div>
          <div className="puerta hab-3"></div>
          <div className="puerta lavado"></div>
          <div className="puerta principal"></div>
        </div>
      </div>
  )
}

export default Plano