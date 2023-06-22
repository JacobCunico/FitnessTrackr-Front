import React from "react";
import { useEffect, useState } from 'react';
import { routinesData } from "../Requests";

 function Routines() {
    const [routines, setRoutines] = useState([]);
    useEffect(() => {
      const getRoutines = async () => {
        const result = await routinesData();
        setRoutines(result);
      };
      getRoutines();
    }, []);

    return (
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', border: "solid black"  }}>
        {routines.map((routine) => (
          <div key={routine.id} style={{ marginLeft: '10px' }}>
            <h2>{ routine.name}</h2>
            <p>{routine.goal}</p>
          </div>
        ))}
      </div>
    );
  }

export default Routines