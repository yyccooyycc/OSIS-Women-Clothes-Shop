import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


function Login(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogin = () => {
        dispatch(login());
        navigate('/home');
    };
    const { t } = useTranslation();

    return (
        <div>
            <button onClick={handleLogin}>{t('Login')}</button>
            <h2>{t('Home')}</h2>
            <p>{t('Welcome')}</p>
        </div>
    );
}

export default Login;