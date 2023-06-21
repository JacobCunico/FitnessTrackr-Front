import { routinesData } from '../Requests';

async function Routines() {
    const results = await routinesData();
    if (results.success) {
        setPosts(results.data.posts);
    }

    return(
        <h1>hello</h1>
    )
}

export default Routines