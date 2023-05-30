import { useChatGPT } from '../hooks/useChatGPT';
import { useState } from 'react';
import Message from './chat/Message';
import { MessageProps } from './chat/Message';

const ChatGPT = () => {
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [inputValue, setInputValue] = useState('');
  const { error, loading, getGPTResponse } = useChatGPT();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (inputValue === '') return;
    const newMessage: MessageProps = {
      emissor: 'user',
      messageText: inputValue,
      date: new Date().toLocaleTimeString(),
    };
    const newArray = [...messages, newMessage];
    setMessages(newArray);
    setInputValue('');
    const response = await getGPTResponse(newArray);
    const newMessages: MessageProps = {
      emissor: 'assistant',
      messageText: response,
      date: new Date().toLocaleTimeString(),
    };
    setMessages((prevState) => [...prevState, newMessages]);
  };


  return (
    <div className='card chat'>
      <div className='card-header d-flex justify-content-center align-items-center p-3 bg-dark text-white'>
        <h5 className='mb-0'>¡Bienvenido a HomeGenius!</h5>
      </div>
      <div
        className='card-body overflow-auto bg-dark'
        data-mdb-perfect-scrollbar='true'
        style={{ position: 'relative', height: '400px' }}
      >
        <div className='divider d-flex align-items-center justify-content-center mb-4'>
          <p
            className='text-center mx-3 mb-0 text-white'
            style={{ color: '#a2aab7' }}
          >
            Today - {new Date().toLocaleDateString()}
          </p>
        </div>
        {messages.map((message, index) => (
          <Message
            key={index}
            emissor={message.emissor}
            messageText={message.messageText}
            date={message.date}
          />
        ))}
        {loading && (
          <Message emissor='loading' messageText='Escribiendo...' date={new Date().toLocaleTimeString()} />
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <div className='card-footer text-muted d-flex justify-content-start align-items-center p-3 bg-dark'>
          <img
            src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp'
            alt='avatar 3'
            style={{ width: '45px', height: '100%' }}
            className='me-2'
          />
          <input
            type='text'
            className='form-control form-control-lg'
            id='exampleFormControlInput1'
            autoFocus={true}
            placeholder='Escribe aquí...'
            autoComplete='off'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            type='submit'
            className={
              loading
                ? 'btn btn-danger btn-sm ms-2'
                : 'btn btn-success btn-sm ms-2'
            }
            data-mdb-ripple-color='dark'
            disabled={loading}
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatGPT;
