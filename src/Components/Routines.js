import React from "react";
import { useEffect, useState } from 'react';
import { routinesData } from "../Requests";

 function Routines() {
    const [activities, setActivities] = useState([]);
    useEffect(() => {
      const getActivities = async () => {
        const result = await routinesData();
        setActivities(result);
        console.log(result);
      };
      getActivities();
    }, []);

    return (
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', border: "solid black"  }}>
        {activities.map((routine) => (
          <div key={routine.id} style={{ marginLeft: '10px' }}>
            <h2>HELLO{ routine.name}</h2>
            <p>{routine.goal}</p>
          </div>
        ))}
      </div>
    );
  }

export default Routines