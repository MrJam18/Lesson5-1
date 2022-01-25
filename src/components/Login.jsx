import { Button, makeStyles, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import styles from '../css/home.module.css'
import { logIn } from '../service/firebase';
import { doLogIn } from '../store/profile/actions';

const useStyles = makeStyles({
    input: {
        display: 'block',
        marginTop: '10px',
        maxidth: '220px'
    },
    button: {
        marginTop: '20px',
        width: '100%'
    }
})

const Login = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [error, setError] = useState();
    const email = useRef();
    const password = useRef();
    const logInHandler = async (ev) => {
        ev.preventDefault();
        if (email.current.value === '' || password.current.value === '') {
            setError('Please enter Login and password');
        } else {
            try {
                await logIn(email.current.value, password.current.value);
                dispatch(doLogIn);
            }
            catch(err) {
                if (err.name === "FirebaseError"){
                    setError('Login or Password was incorrect');
                }
                else {
                    setError(err.message);
                }
            }
        }
    }
    return (
        <div className= {styles.home}>
            <div className={styles.logIn}>
                <div className="small-header">Log in for start use this app.</div> 
                    <form action="" onSubmit={logInHandler}>           
                        <TextField  type = 'email' label = 'Email' inputRef = {email} className = {classes.input} fullWidth variant="outlined"/>
                        <TextField  type = 'password' label = 'Password' inputRef={password} className = {classes.input} fullWidth variant="outlined"/>
                        <Button variant="contained" color="primary" className={classes.button} type='submit'>log in</Button>
                        {error && <div className={styles.error}>{error}.</div>}
                    </form> 
            <div className= {"text-small " + styles.textForRegister}>don't registered yet? <a href="/register">Register now</a></div>
            </div>
        </div>
    );
};

export default Login;