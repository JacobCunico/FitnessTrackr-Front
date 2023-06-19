// functionally the homepage, has room for the other nav routes
import React, { useState } from 'react';
import { Register } from './users';

function App() {
    const [token, setToken] = useState('');

    console.log("LOG FROM APP", token);

    return (
        <div>
            <Register setToken={setToken}/>
        </div>
    )
}

export default App;