
import { onValue } from "firebase/database"
import { profileRef } from "../../service/firebase"

export const changeProfileData = (data) => ({
    type: 'PROFILE::CHANGE_DATA',
    payload: {name: data.name, surname: data.surname, birthDate: data.birthDate, gender: data.gender, showData: data.showData}
})
export const doLogIn = {
    type: 'PROFILE::LOG_IN'
}
export const doLogOut = {
    type: 'PROFILE::LOG_OUT'
}

export const initProfileTracking = () => (dispatch) => {
        onValue(profileRef, (snapshot) => {
        dispatch(changeProfileData(snapshot.val()));
    })
}
// export const createNewUserAction = (userID, name, surname, birthDate, gender) => ({
//     type: 'PROFILE::CREATE_USER',
//     payload: {userID, name, surname, birthDate, gender, showData: true}
// })

// export const signUpThunk = (email, pass, name, surname, birthDate, gender) => (dispatch) => {
//     const regData = async () => await createUserWithEmailAndPassword(auth, email, pass);
//     dispatch(createNewUserAction(regData().user.uid, name, surname, birthDate, gender))
//  };