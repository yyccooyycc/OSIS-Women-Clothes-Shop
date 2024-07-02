import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';


function Login(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogin = () => {
        dispatch(login());
        navigate('/home');
    };

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <h2>Home</h2>
            <p>Welcome to our restaurant</p>
        </div>
    );
}

export default Login;