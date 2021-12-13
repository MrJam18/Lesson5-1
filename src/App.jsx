import { useEffect, useState } from 'react';
import './App.css';
import Message from './components/Message.jsx';

function App() {
  let [message, setMessage] = useState();
  let input = 0;
  useEffect(()=>{
    input = document.querySelector('.sender-input');
  })
  const handleInput = (ev) => {
    ev.preventDefault();
    setMessage(input.value);
  }
  return (
    <>
    <div className="container">
    <Message message = {message} />
      <form type = 'submit' onSubmit={handleInput}>
        <div className="sender">
          <input type="text" className="sender-input" />
          <div className="sender-button" onClick={handleInput}><i className="fas fa-paper-plane"></i></div>
        </div>
      </form>
    </div>
    </>
  );
}

export default App;
