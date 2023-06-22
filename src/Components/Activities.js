// will handle the front end functions and interactions from the ajax requests
//the componeents bascially interact with the practicle aplications of the ajax requests
// alot of interacting with the token

import React from 'react';

import { useEffect, useState } from 'react';

const BASE_URL = `http://fitnesstrac-kr.herokuapp.com/api`
const list = ['Routines', 'Activities', 'Users'];

const fetchActivities = async () => {
    try {
      const response = await fetch(`${BASE_URL}/activities`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = await response.json();
      return result;
    } catch (err) {
      console.error(err);
    }
  };


    export default function activities() {
    const [activities, setActivities] = useState([]);
    useEffect(() => {
      const getActivities = async () => {
        const result = await fetchActivities();
        setActivities(result);
      };
      getActivities();
    }, []);
    return (
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
        {activities.map((activity) => (
          <div key={activity.id} style={{ marginLeft: '10px' }}>
            <h2>Name: {activity.name}</h2>
            <p>Description: {activity.description}</p>
          </div>
        ))}
      </div>
    );
  }