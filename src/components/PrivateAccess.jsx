import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getAuthed } from '../store/profile/selectors';

const PrivateAccess = ({Wrapped}) => {
    const authorization = useSelector(getAuthed);
    return authorization ? Wrapped : <Navigate to= '/' />
};

export default PrivateAccess;