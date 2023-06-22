import React from "react";
import { useEffect, useState } from 'react';
import { routinesData } from "../Requests";

 function Routines() {
    const [activities, setActivities] = useState([]);
    useEffect(() => {
      const getActivities = async () => {
        const result = await routinesData();
        setActivities(result);
      };
      getActivities();
    }, []);
    
    return (
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
        {activities.map((activity) => (
          <div key={activity.id} style={{ marginLeft: '10px' }}>
            <h2>{activity.name}</h2>
            <p>{activity.description}</p>
          </div>
        ))}
      </div>
    );
  }

export default Routines