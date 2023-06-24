import React, { useState, useEffect } from "react";
import { routinesPost, usersRoutines } from "../Requests"; 

function MyRoutines( { token, user }  ) {
    const [routines, setRoutines] = useState([])
    const [name, setName] = useState('');
    const [goal, setGoal] = useState('');

    const getUserRoutines = async () => {
        const result = await usersRoutines(token, user.username);
        setRoutines(result);
        console.log("TOKEN", token) 

      };
  
      useEffect(() => {
  
        getUserRoutines();
  
      }, []);

    async function handleSubmit(event) {
        event.preventDefault();
        const newRoutine = {name, goal}

        const results = await routinesPost(token, newRoutine)
        console.log("LOG FROM MYROUTINES", results)

        if (results.error) {
            alert("Routine Name Already Exists")
        } else {
            getUserRoutines();
            alert("Routine Created")
        }
    };

    return (
        <>
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
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', border: "solid black"  }}>
        {
        routines.map((routine) => (
          <div key={routine.id} style={{ marginLeft: '10px' }}>
            <h2>{routine.name}</h2>
            <p>Goal: {routine.goal}</p>
            <p>Count/Duration: {routine.count}{routine.duration}</p>
            <p>Creator: {routine.creatorName}</p>
          </div>
        ))}
      </div>
        </>
        
    )
}

export default MyRoutines;