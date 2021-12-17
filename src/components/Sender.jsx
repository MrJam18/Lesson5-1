import React, { useRef } from 'react';
import { useEffect, useState } from 'react';

const Sender = (props) => {
    const input = useRef(null);
  const inputHandler = (ev) => {
    ev.preventDefault();
    const message = input.current.value;
    props.handleMessage(message);
    input.current.value = '';
  }
    return (
        <form type = 'submit' onSubmit={inputHandler}>
        <div className="sender">
          <input type="text" className="sender-input" ref={input} />
          <div className="sender-button" onClick={inputHandler}><i className="fas fa-paper-plane"></i></div>
        </div>
      </form>
    );
};

export default Sender;