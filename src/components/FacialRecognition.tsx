const FacialRecognition = () => {
  const cerrarCamera = () => {
    const camera = document.getElementById('camera') as HTMLDivElement;
    camera.style.display = 'none';
  };

  return (
    <div className='camera' id='camera'>
      <button
        className='btn btn-danger'
        id='btn-camera'
        onClick={() => {
          cerrarCamera();
        }}
      >
        Cerrar cámara
      </button>
      <iframe
        src='http://127.0.0.1:5500/index.html'
        allow='camera; microphone'
        className='iframe-camera'
      ></iframe>
    </div>
  );
};

export default FacialRecognition;
