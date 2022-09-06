import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getAuthed } from '../store/profile/selectors';

const PublicAccess = ({wrapped}) => {
    const authorization = useSelector(getAuthed);
    return !authorization ? wrapped : <Navigate to= '/chats' />
};

export default PublicAccess;