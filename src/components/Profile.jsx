import { Checkbox, FormControlLabel, Radio, RadioGroup, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { useState } from 'react';
import { useRef } from 'react';
import styles from './profile.module.css';
import {useSelector, useDispatch} from 'react-redux';
import { changeShowName } from '../store/profile/actions';
const useStyles = makeStyles({
    radio: {
        fontSize: '10px'
    },
    input: {
        marginTop: '10px',
        width: '150px'
    },
    input_birthDate: {
        marginTop: '10px',
        width: '150px'
    }
})
const Profile = ()=> {
    let userData = useSelector((store)=> store);
    let [profileToggler, setProfileToggler] = useState(true);
    const viewerButtonHandler = ()=> {
        setProfileToggler((old)=> !old)
    }
    return (
        <div className={styles.profile}>
            <h3>Мой профиль</h3>
            {profileToggler ? <ProfileViewer userData = {userData} viewerButtonHandler = {viewerButtonHandler} /> : <ProfileChanger userData = {userData} viewerButtonHandler = {viewerButtonHandler} />}
        </div>
    )
}


const ProfileViewer = ({userData, viewerButtonHandler}) => {
    
    return (
            <div className={styles.content}>
                <div className={styles.box_flex}>
                    <div className={styles.box}><div className={styles.header}>Имя</div><div className={styles.text}>{userData.name}</div></div>
                    <div className={styles.box}><div className={styles.header}>Фамилия</div> <div className={styles.text}>{userData.surname}</div> </div>
                </div>
                <div className={styles.box_flex}>
                    <div className={styles.box}><div className={styles.header}>Пол</div><div className={styles.text}>{userData.gender}</div></div>
                    <div className={styles.box}><div className={styles.header}>Дата рожения</div> <div className={styles.text}>{userData.birthDate}</div></div>
                </div>
                <div className={styles.box_center}><button className={styles.button + ' ' + styles.text} onClick={viewerButtonHandler}>Изменить </button></div>
                
                </div>
    );
};
const ProfileChanger = ({userData, viewerButtonHandler}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const nameRef = useRef(); //for future, watch from showNameCheckbox(67).
    const surNameRef = useRef();
    const birthDateRef = useRef();
    const showNameCheckbox = useRef();
    let showName = useSelector((state)=> state.showName)
    const checkBoxHandler = () => {
        viewerButtonHandler();
        if (showName === showNameCheckbox.current.checked) {
            return;
        }
        else {
            dispatch(changeShowName);
        }
    }
    return (
    <div className={styles.content}>
                <div className={styles.box_flex}>
                    <div className={styles.box_changer}><div className={styles.header}>Имя</div><TextField className={classes.input} id="standard-basic" defaultValue= {userData.name} inputRef={nameRef}/></div>
                    <div className={styles.box_changer}><div className={styles.header}>Фамилия</div><TextField className={classes.input} id="standard-basic" defaultValue= {userData.surname} inputRef={surNameRef}/></div>
                </div>
                <div className={styles.box_flex}>
                    <div className={styles.box_changer}><div className={styles.header}>Пол</div><RadioGroup row aria-label="position" name="position" defaultValue="top" className= {classes.radio}>
        <FormControlLabel
          value="male"
          control={<Radio size='small' color="primary"/>}
          label="Муж."
          labelPlacement="bottom" />
          <FormControlLabel
          value="female"
          control={<Radio size='small' color="primary" />}
          label="Жен."
          labelPlacement="bottom" />
      </RadioGroup></div>
                    <div className={styles.box_changer}><div className={styles.header}>Дата рожения</div> <TextField id="standard-basic" size='small' defaultValue= {userData.birthDate} className={classes.input_birthDate} type= 'date' inputRef={birthDateRef}/></div>
                </div>
                <div className={styles.box_flex + ' ' + styles.box_flex_center}>
                <div className={styles.text + ' margin-0'}>Показывать данные</div><Checkbox inputRef={showNameCheckbox} defaultChecked= {showName}/></div>
                <div className={styles.box_center}><button className={styles.button + ' ' + styles.text} onClick={checkBoxHandler}>Подтвердить </button></div>
                </div>)
}

export default Profile;