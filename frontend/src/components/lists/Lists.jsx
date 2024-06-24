import axios from "axios";
import { useEffect, useState } from "react"


export default function Lists() {
// #####################################
// State
    const [lists, setLists] = useState({
        loading: false,
        error: false,
        data: undefined
    });

    let content;

// #####################################
// Behavior
    // console.log(localStorage.token);
    useEffect(() => {
        setLists({...Lists, loading: true});
        async function fetchLists() {
            try{
                const config = {
                    headers: {Authorization: `Bearer ${localStorage.token}`}
                };
                const listsResponse = await axios.get('http://127.0.0.1:8000/api/list', config);

                console.log(listsResponse);
            } catch(error) {
                console.log('Error: ', error);
            }
        }

        fetchLists()
    }, [])

// #####################################
// Display
    return (
        <div>Mes listes</div>
    )
}