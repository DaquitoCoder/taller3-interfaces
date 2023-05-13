const FacialRecognition = () => {
  return (
    <div className="hola">
      <h1 style={{color: 'white'}}>Facial Recognition</h1>
      <iframe src="http://127.0.0.1:5500/index.html" allow="camera; microphone" className="iframe-camera"></iframe>
    </div>
  );
};

export default FacialRecognition;
