// will handle the front end functions and interactions from the ajax requests
//the componeents bascially interact with the practicle aplications of the ajax requests
// alot of interacting with the token

import { activitiesData } from "../Requests";

async function Activities() {
    const results = await activitiesData();
    if (results.success) {
        
    }

    return(
        <h1>hello</h1>
    )
}

export default Activities