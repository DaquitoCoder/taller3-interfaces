import '../css/Plano.css';

const Plano = () => {
  const mostrarCamera = () => {
    const camera = document.getElementById('camera') as HTMLDivElement;
    camera.style.display = 'flex';
  };

  const mostrarChat = () => {
    const chat = document.getElementById('chat') as HTMLDivElement;
    chat.style.display = 'flex';
  }

  return (
    <div className='plano'>
      <div className='ventana cocina' id='ventana-cocina'></div>
      <div className='ventana sala' id='ventana-sala'></div>
      <div className='ventana comedor' id='ventana-comedor'></div>
      <div className='ventana habitacion-1' id='ventana-hab1'></div>
      <div className='ventana habitacion-2' id='ventana-hab2'></div>
      <div className='ventana habitacion-3' id='ventana-hab3'></div>
      <div className='puerta bano-principal' id='puerta-bano-principal'></div>
      <div className='puerta bano-habitacion' id='puerta-bano-habitacion'></div>
      <div className='puerta hab-1' id='puerta-hab1'></div>
      <div className='puerta hab-2' id='puerta-hab2'></div>
      <div className='puerta hab-3' id='puerta-hab3'></div>
      <div className='puerta lavado' id='puerta-lavado'></div>
      <div className='puerta principal' id='puerta-principal'></div>
      {/* chat button */}
      <div className='chat-btn' id='chat-btn-esi'>
        <button
          className='chat-button btn btn-success'
          onClick={() => {
            mostrarChat();
          }}
        >Asistente</button>
      </div>
      {/* camera buttons */}
      <div className='camera-btn esi' id='camera-btn-esi'>
        <button
          className='camera-button'
          onClick={() => {
            mostrarCamera();
          }}
        ></button>
      </div>
      <div className='camera-btn esd'>
        <button
          className='camera-button'
          onClick={() => {
            mostrarCamera();
          }}
        ></button>
      </div>
      <div className='camera-btn principal'>
        <button
          className='camera-button'
          onClick={() => {
            mostrarCamera();
          }}
        ></button>
      </div>
      <div className='bombillo-cocina' id='bombillo-cocina'></div>
      <div className='bombillo-comedor' id='bombillo-comedor'></div>
      <div className='bombillo-sala' id='bombillo-sala'></div>
      <div className='bombillo-bano-habitacion' id='bombillo-bano-habitacion'></div>
      <div className='bombillo-lavado' id='bombillo-lavado'></div>
      <div className='bombillo-bano-principal' id='bombillo-bano-principal'></div>
      <div className='bombillo-cuarto1' id='bombillo-cuarto1'></div>
      <div className='bombillo-cuarto2' id='bombillo-cuarto2'></div>
      <div className='bombillo-cuarto3' id='bombillo-cuarto3'></div>
    </div>
  );
};

export default Plano;
