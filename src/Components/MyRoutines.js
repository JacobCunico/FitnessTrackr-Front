import React, { useState } from "react";
import { routinesPost } from "../Requests"; 

function MyRoutines({ token, getRoutines }) {
    const [name, setName] = useState('');
    const [goal, setGoal] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();
        const newRoutine = {name, goal}

        const results = await routinesPost(token, newRoutine)
        console.log("LOG FROM MY", results)

        if (results.success) {
            getRoutines();
        } else (
            alert("Routine Name Already Exists")
        )
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Enter Name'
                value={name}
                onChange={(event) => {setName(event.target.value)}}
            />
            <input
                type='text'
                placeholder="Enter Goal"
                value={goal}
                onChange={(event) => {setGoal(event.target.value)}}
            />
            <button type='submit'>Create Routine</button>
        </form>
        
    )
}

export default MyRoutines;