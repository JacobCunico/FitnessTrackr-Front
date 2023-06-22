import React from "react";
import { Link } from 'react-router-dom';


function Nav({ setToken, setIsLoggedIn, isLoggedIn }) {
    function logout() {
        setToken('');
        setIsLoggedIn(false);
        window.localStorage.removeItem('token');
        alert('You have been logged out');

    }

    return(
        <nav style={{backgroundColor: "Green",  
        border: "solid black", 
        display: "flex",
        justifyContent: "space-around"
        }}>
            <h1>Fitness Trackr</h1>
            <button style={{padding: "1px 40px", backgroundColor: "green", fontSize: "20px"}}><Link to= '/'>Home</Link></button>
            <button style={{padding: "1px 40px", backgroundColor: "green", fontSize: "20px"}}><Link to= '/Activities'>Activities</Link></button>
            <button style={{padding: "1px 40px", backgroundColor: "green", fontSize: "20px"}}><Link to= '/Routines'>Routines</Link></button>
            {
                isLoggedIn ? (
                    <>
                    <button  style={{padding: "1px 40px", backgroundColor: "green", fontSize: "20px"}} onClick={logout}>Log Out</button>
                    <button style={{padding: "1px 40px", backgroundColor: "green", fontSize: "20px"} }><Link to='/MyRoutines'>My Routines</Link></button>
                    </>
                ) : (
                    <>
                    <button style={{padding: "1px 40px", backgroundColor: "green", fontSize: "20px"}}><Link to='/login'>Login</Link></button>
                    <button style={{padding: "1px 40px", backgroundColor: "green", fontSize: "20px"}}><Link to='/Register'>Register</Link></button>
                    </>
                )
            }
        </nav>
    )
}

export default Nav;