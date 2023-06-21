// functionally the homepage, has room for the other nav routes
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Register, Login, Routines, Activites } from './';
import { routinesData, usersMe } from '../Requests';



function App() {
    const [token, setToken] = useState('');
    const [routines, setRoutines] = useState([]);
    const [user, setUser] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    console.log("LOG FROM APP", token);

        function tokenCheck() {
        if (window.localStorage.getItem('token')) {
            setToken(window.localStorage.getItem('token'));
        }}

        async function getRoutines() {
            const results = await routinesData();
            if (results.success) {
                setRoutines(results.data.routines);
            }
        }
    
        async function getUser() {
            const results = await usersMe(token);
            if (results.success) {
                setUser(results.data)
            }
        }

        useEffect(() => {
            tokenCheck();
        }, [])
    
        useEffect(() => {
            getRoutines();
            if (token) {
                getUser();
                setIsLoggedIn(true);
            }
        }, [token])
    
        if (isLoggedIn) {
            console.log('user is logged in')
        } else ( 
            console.log('user is logged out')
        )

    return (
        <div>
            <Routes>
            <Route 
                    path='/' 
                    element={<Routines />}
                />
                <Route 
                    path='/register' 
                    element={<Register setToken={setToken} />}
                />
                <Route 
                    path='/login' 
                    element={<Login setToken={setToken} />}
                />
                <Route 
                    path='/routines' 
                    element={<Routines />}
                />
                <Route 
                    path='/activities' 
                    element={<Activites />}
                />
            </Routes>
        </div>
        );
    };

export default App;