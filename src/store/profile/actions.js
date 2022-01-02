// export const SHOW_NAME = 'CHANGE_SHOW_NAME';
export const changeShowName = {
    type: 'CHANGE_SHOW_NAME',
}
export const changeProfileData = (name, surname, birthDate, gender, showData) => ({
    type: 'PROFILE::CHANGE_DATA',
    payload: {name, surname, birthDate, gender, showData}

})