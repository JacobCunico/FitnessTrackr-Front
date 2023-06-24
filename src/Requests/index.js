// ajax requests make the requests to the api to be used by the files in componenets
const BASE_URL = `http://fitnesstrac-kr.herokuapp.com/api`;


//-------------USERS----
export const registerUser = async (user) => {
    try {
      const response = await fetch(
        `${BASE_URL}/users/register`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          user,
        )
      });
      const result = await response.json();
      console.log("REGISTER RESULT", result);
      return result;
    } catch (err) {
      console.error(err);
    }
};

//registerUser({username: "username12345", password: "12345678"});

export const login = async (user) => {
      
    try {
      const response = await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            user,
        )
      });
      const result = await response.json();
      console.log("LOGIN RESULT", result);
      return result
    } catch (err) {
      console.error(err);
    }
};

//login({username: "username12345", password: "12345678"});
// when set up features will most likely have a stateful variable 
// it should be one token per session

export const usersMe = async (token) => {
    try {
      const response = await fetch(`${BASE_URL}/users/me`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });
      const result = await response.json();
      console.log("USERSME", result);
      return result
    } catch (err) {
      console.error(err);
    }
};

//usersMe();

export const usersRoutines = async (username, token) => {

  try {
    const response = await fetch(`${BASE_URL}/users/${username}/routines`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    });
    const result = await response.json();
    console.log("USERSROUTINE", result);
    return result
  } catch (err) {
    console.error(err);
  }
}

//usersRoutines();

//-------------ACTIVITIES----
export const activitiesData = async () => {
  try {
    const response = await fetch(`${BASE_URL}/activities`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await response.json();

    console.log("ACTIVITIESDATA", result);
    return result
  } catch (err) {
    console.error(err);
  }
};

//activitiesData();

export const activitiesPost = async (token, newActivity) => {
  try {
    const response = await fetch(`${BASE_URL}/activities`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(
        newActivity
    ) 
    });

    const result = await response.json();

    console.log("ACTIVITIESPOST", result);
    return result
  } catch (err) {
    console.error(err);
  }
};

//activitiesPost({name: "test", description: "test"});

export const activitiesUpdate = async (token, changes) => {
  try {
    const response = await fetch(`${BASE_URL}/activities`, {
      headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
      },
      method: "PATCH",
      body: JSON.stringify(
        changes
      )
    });

      const result = await response.json();
      console.log("ACTIVITIESUPDATE", result);
      return result
    } catch (err) {
    console.error(err);
    }
}


//activitiesUpdate();

export const activitiesRoutines = async (activityId) => {
  try {
    const response = await fetch(`${BASE_URL}/activities/${activityId}/routines`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const result = await response.json();
    console.log("ACTIVITIESROUTINES", result);
    return result
  } catch (err) {
    console.error(err);
  }
}

//activitiesRoutines();

//-------------ROUTINES----

export const routinesData = async () => {
  try {
  const response = await fetch(`${BASE_URL}/routines`, {
    headers: {
    'Content-Type': 'application/json',
    },
  });
  
  const result = await response.json();
  //console.log(result);
  return result
  } catch (err) {
  console.error(err);
  }
}

//routinesData();

export const routinesPost = async (token, newRoutine) => {
  try {
    const response = await fetch(`${BASE_URL}/routines`, {
      method: "POST",
      headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(
        newRoutine
    )
    });
    const result = await response.json();
    console.log(result);
    return result
  } catch (err) {
    console.error(err);
  }
}

//routinesPost();

export const routinesUpdate = async (routineId, token, changes) => {
  try {
    const response = await fetch(`${BASE_URL}/routines/${routineId}`, {
      method: "PATCH",
      headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(
        changes
      )
    });
    const result = await response.json();
    console.log(result);
    return result
  } catch (err) {
    console.error(err);
  }
}

//routinesUpdate();

export const routinesDelete = async (routineId, token) => {
  try {
    const response = await fetch(`${BASE_URL}/routines/${routineId}`, {
      method: "DELETE",
      headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
      },
    });
    const result = await response.json();
    console.log(result);
    return result
  } catch (err) {
    console.error(err);
  }
}

//routinesDelete();

export const attachActivityToRoutine = async (routineId, newActivity) => {
  try {
    const response = await fetch(`${BASE_URL}/routines/${routineId}/activities`, {
      method: "POST",
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        newActivity
      )
    });
    const result = await response.json();
    console.log(result);
    return result
  } catch (err) {
    console.error(err);
  }
}

//attachActivityToRoutine(6, {activityId: 1234567, count: 6, duration:6});

//-------------ROUTINE_ACTIVITIES----

export const routineActivitiesUpdate = async (routineActivityId, token, changes) => {
  try {
    const response = await fetch(`${BASE_URL}/routine_activities/${routineActivityId}`, {
      method: "PATCH",
      headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(
        changes
      )
    });
    const result = await response.json();
    console.log(result);
    return result
  } catch (err) {
    console.error(err);
  }
}

//routineActivitiesUpdate();

export const routineActivityDelete = async (routineActivityId, token) => {
  try {
    const response = await fetch(`${BASE_URL}/routine_activities/${routineActivityId}`, {
      headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
      },
    });
    const result = await response.json();
    console.log(result);
    return result
  } catch (err) {
    console.error(err);
  }
}

//routineActivityDelete();