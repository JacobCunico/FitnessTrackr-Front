import React, { useState, useEffect } from 'react';
import { usersRoutines, usersMe } from '../Requests';

function myRoutines() {
const [user, setUser] = useState({});
const [token, setToken] = useState({});

function tokenCheck() {
    if (window.localStorage.getItem('token')) {
        setToken(window.localStorage.getItem('token'));
    }}

async function getUser() {
    const results = await usersMe(token);
    if (results.success) {
        setUser(results)
    }
}

const username = getUser();

async function renderRoutines() {
    const results = await usersRoutines({username, token})
    return (
        console.log("FROM MY ROUTINES", results)
    )
};}

export default myRoutines