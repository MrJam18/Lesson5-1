import { Checkbox, FormControlLabel, Radio, RadioGroup, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { useState } from 'react';
import { useRef } from 'react';
import styles from '../css/profile.module.css';
import {useSelector, useDispatch} from 'react-redux';
import { initProfileTracking } from '../store/profile/actions';
import { getProfileData } from '../store/profile/selectors';
import { profileRef } from '../service/firebase';
import { useEffect } from 'react';
import { set } from "firebase/database";

let gender = 'Мужской';

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
    // let userData = useSelector(getProfileData);
    // let [userData, setUserData] = useState({showData: true,
    //     name: 'User',
    //     surname: 'Default',
    //     birthDate: '1994-04-17',
    //     gender: "Мужской",
    //     isAuthed: true});
    const dispatch = useDispatch();
    const userData = useSelector(getProfileData);

 
    let [profileToggler, setProfileToggler] = useState(true);
    const viewerButtonHandler = ()=> {
        setProfileToggler((old)=> !old)
    }

    useEffect(() => {dispatch(initProfileTracking())}, []);

    return (
        <div className={styles.profile}>
            <h3>Мой профиль</h3>
            {profileToggler ? <ProfileViewer userData = {userData} viewerButtonHandler = {viewerButtonHandler} /> : <ProfileChanger userData = {userData} viewerButtonHandler = {viewerButtonHandler} />}
        </div>
    )
}


const ProfileViewer = ({userData, viewerButtonHandler}) => {
    // const storeBirthDate = useSelector((store)=> store.profile.birthDate);
    const chandeDateFormat = (date) => {
        const dateArray = date.split('-');
        const rightDate = dateArray.reduce((acc, date)=> {
            acc = date + '.' + acc;
            return acc;
        })
    return rightDate;
    }    
    const birthDate = chandeDateFormat(userData.birthDate);
    return (
            <div className={styles.content}>
                <div className={styles.box_flex}>
                    <div className={styles.box}><div className={styles.header}>Имя</div><div className={styles.text}>{userData.name}</div></div>
                    <div className={styles.box}><div className={styles.header}>Фамилия</div> <div className={styles.text}>{userData.surname}</div> </div>
                </div>
                <div className={styles.box_flex}>
                    <div className={styles.box}><div className={styles.header}>Пол</div><div className={styles.text}>{userData.gender}</div></div>
                    <div className={styles.box}><div className={styles.header}>Дата рожения</div> <div className={styles.text}>{birthDate}</div></div>
                </div>
                <div className={styles.box_center}><button className={styles.button + ' ' + styles.text} onClick={viewerButtonHandler}>Изменить </button></div>
                
                </div>
    );
};
const ProfileChanger = ({userData, viewerButtonHandler}) => {
    const classes = useStyles();
    const nameRef = useRef();
    const surNameRef = useRef();
    const birthDateRef = useRef();
    const showDataCheckbox = useRef();
    const profileChangerHandler = () => {
        viewerButtonHandler();
        set(profileRef, {name: nameRef.current.value, surname: surNameRef.current.value, birthDate: birthDateRef.current.value, gender, showData: showDataCheckbox.current.checked})
    }
    const radioHandler = (ev) => {
        gender = ev.target.value
    }
    return (
        <form className={styles.content} onSubmit={profileChangerHandler}>
                    <div className={styles.box_flex}>
                        <div className={styles.box_changer}><div className={styles.header}>Имя</div><TextField className={classes.input} id="standard-basic" defaultValue= {userData.name} inputRef={nameRef}/></div>
                        <div className={styles.box_changer}><div className={styles.header}>Фамилия</div><TextField className={classes.input} id="standard-basic" defaultValue= {userData.surname} inputRef={surNameRef}/></div>
                    </div>
                    <div className={styles.box_flex}>
                        <div className={styles.box_changer}><div className={styles.header}>Пол</div>
                        <RadioGroup row aria-label="position" name="gender" defaultValue={userData.gender} className= {classes.radio} onChange={radioHandler} >
                <FormControlLabel
                value="Мужской"
                control={<Radio size='small' color="primary"/>}
                label="Муж."
                labelPlacement="bottom" />
                <FormControlLabel
                value="Женский"
                control={<Radio size='small' color="primary" />}
                label="Жен."
                labelPlacement="bottom" />
            </RadioGroup>
            </div>
                        <div className={styles.box_changer}><div className={styles.header}>Дата рожения</div> <TextField id="standard-basic" size='small' defaultValue= {userData.birthDate} className={classes.input_birthDate} type= 'date' inputRef={birthDateRef}/></div>
                    </div>
                    <div className={styles.box_flex + ' ' + styles.box_flex_center}>
                    <div className={styles.text + ' margin-0'}>Показывать данные</div><Checkbox inputRef={showDataCheckbox} defaultChecked= {userData.showData}/></div>
                    <div className={styles.box_center}><button className={styles.button + ' ' + styles.text} onClick={profileChangerHandler}>Подтвердить </button></div>
                    </form>)
    }

export default Profile;