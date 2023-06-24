import React, { useEffect, useState } from 'react';
import { activitiesPost, activitiesData } from '../Requests';

  


  export default function activities({ token }) {

    const [activities, setActivities] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('')

    const getActivities = async () => {
      const result = await activitiesData();
      setActivities(result);
    };

    useEffect(() => {

      getActivities();

    }, []);


    async function handleSubmit(event) {
      event.preventDefault();
      const newActivity = {name, description}

      const results = await activitiesPost(token, newActivity)
      console.log("LOG FROM ACTIVITIES", results)

      if (results.error) {
        alert("Activity Already Exists (make sure you are logged in)")
      } else {
        getActivities();
        alert("Activity Created")
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
