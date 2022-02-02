import React, { useState } from 'react';

const Profile = () => {
    let [name, setName] = useState('Джамиль');
    let [surname, setSurname] = useState('Мамедов');
    let [birthDate, setBirthDate] = useState('17.04.1994');
    let [gender, setGender] = useState('Мужской');
    return (
        <div className='profile'>
            <h3>Мой профиль</h3>
            <div className="profile-content">
                <div className="profile-photo"><div className="profile-header profile-header-photo">Фото</div><img src="img/myPhoto.jpg" alt="" className="profile-photo" /></div>
                <div className="profile-box-flex">
                    <div className="profile-box"><div className="profile-header">Имя</div><div className="profile-text">{name}</div></div>
                    <div className="profile-box"><div className="profile-header">Фамилия</div> <div className="profile-text">{surname}</div> </div>
                </div>
                <div className="profile-box-flex">
                    <div className="profile-box"><div className="profile-header">Пол</div><div className="profile-text">{gender}</div></div>
                    <div className="profile-box"><div className="profile-header">Дата рожения</div> <div className="profile-text">{birthDate}</div></div>
                </div>
                <div className="profile-box-center"><button className="profileChanger">Изменить </button></div>
                
                </div>
            
            
        </div>
    );
};

export default Profile;