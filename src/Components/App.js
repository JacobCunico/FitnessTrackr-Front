// functionally the homepage, has room for the other nav routes
import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Register, Login, Routines } from './';



function App() {
    const [token, setToken] = useState('');

    console.log("LOG FROM APP", token);

    return (
        <div>
            <Routes>
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
                    element={<Routines setToken={setToken} />}
                />
            </Routes>
        </div>
        );
    };

export default App;