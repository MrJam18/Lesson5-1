import { Button, FormControl, FormControlLabel, FormLabel, makeStyles, Radio, RadioGroup, TextField } from '@material-ui/core';
import { set } from 'firebase/database';
import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from '../css/register.module.css'
import { profileRef, signUp } from '../service/firebase';

const useStyles = makeStyles({
    input: {
        display: 'block',
        marginTop: '10px',
        maxWidth: '220px'
    },
    password: {
        display: 'block',
        marginTop: '5px',
        width: '100px',
        height: '50px'
        
    },
    radio: {
        display: 'flex',
        flexDirection: 'row'
    },
    radio__root: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    radio__label: {
        textAlign: 'center'
    },
    button: {
        marginTop: '20px',
        width: '50%',
        borderRadius: '20px'
    }
});
let gender = '';
const Register = () => {
    const classes = useStyles();
    const email = useRef();
    const name = useRef();
    const surname = useRef();
    const birthDate = useRef();
    const password = useRef();
    const confirmPassword = useRef();
    const [error, setError] = useState(null);
    const registerHadler = async (ev) => {
        setError(null);
        ev.preventDefault();
        if (email.current.value === '' || name.current.value === '' || surname.current.value === '' || birthDate.current.value === '' || gender === '' || password.current.value === '') {
            setError('you have not filled all the required fields')
        }
        else if (password.current.value !== confirmPassword.current.value) {
            setError("Your passwords don't match")
        }
        else {
            try {
                set(profileRef, {name: name.current.value, surname: surname.current.value, birthDate: birthDate.current.value, gender, showData: true})
                await signUp(email.current.value, password.current.value); 
            }
            catch(err) {
                setError(err.message);
            }
        }
    }
    return (
        <div className= 'background'>
            <h3 className={styles.label}>REGISTER</h3>
            <div >
            <form onSubmit={registerHadler} className={styles.registerBlock + ' block-on-background'}>
            <div className="flex__center">Please enter your personal infomation for continue.</div>
            <TextField  type = 'email' label = 'Email' className = {classes.input} inputRef={email} fullWidth variant="outlined"/>
            <TextField  label = 'Name' className = {classes.input} inputRef={name} fullWidth variant="outlined"/>
            <TextField  label = 'Surname' className = {classes.input} inputRef={surname} fullWidth variant="outlined"/>
            <TextField  type = 'date' label = 'Birth Date' className = {classes.input} inputRef={birthDate} fullWidth variant="outlined" />
            <div className= {'flex__center ' + styles.gender}>
                <FormControl component="fieldset">
                    <FormLabel component="legend" className = {classes.radio__label}>Gender</FormLabel>
                    <RadioGroup aria-label="gender" name="gender" className = {classes.radio} onChange={(ev) => {gender = ev.target.value}} >
                        <FormControlLabel value="Женский" control={<Radio />} label="Female" />
                        <FormControlLabel value="Мужской" control={<Radio />} label="Male" />
                        <FormControlLabel value="Другое" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>
            </div>
            <TextField  label = 'Password' type = 'password' className = {classes.input} inputRef={password} fullWidth variant="outlined"/>
            <TextField  type = 'password' label = 'Confirm Password' inputRef={confirmPassword} className = {classes.input} fullWidth variant="outlined" />
            <div className="flex__center">
            <Button variant="contained" color="primary" className={classes.button} type='submit'>Register now</Button>
            </div>
                {error && <div className={styles.error + ' flex__center'}>Error! {error}.</div>}
            <div className= {styles.signIn + ' flex__center'}>
                Already have an account? <Link to="/" className= {styles.signInLink}> Sign in</Link>
            </div>
            </form>
            </div>
        </div>
    );
};

export default Register;