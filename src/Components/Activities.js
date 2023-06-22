// will handle the front end functions and interactions from the ajax requests
//the componeents bascially interact with the practicle aplications of the ajax requests
// alot of interacting with the token

import React from 'react';

import { useEffect, useState } from 'react';
import { activitiesPost, activitiesData } from '../Requests';

  


  export default function activities(token) {

    const [activities, setActivities] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('')

    useEffect(() => {

      const getActivities = async () => {
        const result = await activitiesData();
        setActivities(result);
      };

      getActivities();

    }, []);


    async function handleSubmit(event) {
      event.preventDefault();
      const newActivity = {name, description}

      const results = await activitiesPost(token, newActivity)
      console.log("LOG FROM MY", results)

      if (results.success) {
          activitiesData();
      } else (
          alert("Activity Already Exists (make sure you are logged in)")
      )
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
                placeholder="Enter Description"
                value={description}
                onChange={(event) => {setDescription(event.target.value)}}
            />
            <button type='submit'>Create activity</button>
        </form>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
        {activities.map((activity) => (
          <div key={activity.id} style={{ marginLeft: '10px' }}>
            <h2>Name: {activity.name}</h2>
            <p>Description: {activity.description}</p>
          </div>
        ))}
      </div>
      </>
    );
};
