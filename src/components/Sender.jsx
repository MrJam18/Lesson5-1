import React, { useRef } from 'react';
// import { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
const useStyles = makeStyles({
  button: {
    cursor: 'pointer',
    marginRight: '2.5%',
    marginLeft: '2.5%',
  },
  input: {
    marginBottom: '10px',
    width: '90%',
    fontSize: '150%',
    marginLeft: '1.5%'
  }
})

const Sender = ({handleMessage}) => {
    const input = useRef(null);
    const classes = useStyles();
    const inputHandler = (ev) => {
    ev.preventDefault();
    const message = input.current.value;
    handleMessage(message);
    input.current.value = '';
  }
    return (
        <form type = 'submit' onSubmit={inputHandler} className="sender">
          {/* <input type="text" className="sender-input" ref={input} /> */}
          <Input className={classes.input} inputRef={input} autoFocus = {true}></Input>
          <Button onClick={inputHandler} className= {classes.button}
        variant="contained"
        color="primary"
        endIcon={<Icon>send</Icon>}>
        Send
      </Button>
      </form>
    );
};

export default Sender;