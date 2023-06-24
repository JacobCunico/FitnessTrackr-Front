import React, { useState } from "react";
import { login } from '../Requests';

function Login({ setToken, navigate }) {
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        
    
        async function handleSubmit(event) {
            event.preventDefault();
            const user = {username, password};
            
            const results = await login(user);
    
            if (!results.error) {
                console.log("LOG FROM LOGIN", results)
                setToken(results.token);
                window.localStorage.setItem('token', results.token);
                navigate('/');
                alert('Login Successfull');
            } else {alert('incorrect Username or Password')};

        }
    
        return (
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Enter Username'
                    onChange={(event) => setUsername(event.target.value)}
                />
                <input
                    type='password'
                    placeholder='Enter Password'
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button type='submit'>Submit</button>
            </form>
        )
    }

export default Login;