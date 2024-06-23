import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function ApiCall() {
//###################################
// State
    const [APIState, setAPIState] = useState({
        loading: false,
        error: false,
        data: undefined
    })

    let content;
//###################################
// Behaviour
    useEffect(() => {
        setAPIState({...APIState, loading: true});

        async function fetchUsers() {
            try {
                const userResponse = await axios.get('https://jsonplaceholder.typicode.com/users');

                console.log(userResponse.data);
                setAPIState({loading: false, error: false, data: userResponse.data});
            } catch (error) {
                console.error('Error:', error);
                setAPIState({ loading: false, error: true, data: undefined });
            } finally {
                // !! Dans tous les cas !!
                // console.log('et encore ici');
            }
        }

        fetchUsers();
    }, [])

    if(APIState.loading) content = <div>Loading...</div>
    else if(APIState.error) content = <p>Une erreur est survenue...</p>
    else if(APIState.data?.length > 0) {
        // Si on a notre liste et qu'elle est supérieur à zéro
        content = <ul>
            { APIState.data.map(item => (
                <li key={ item.id }>
                    <span>{ item.name }</span>
                    <span>{ item.email }</span>
                    <span>{ item.phone }</span>
                </li>
            )) }
        </ul>
    }
    else if(APIState.data?.length === 0) {
        // Si on a les données et qu'elles sont vide
        content = <p>Votre requête ne correspond à aucune données !</p>
    }

//###################################
// Display
  return (
    <div>
        <h1>Api Call</h1>
        { content }
        {/* Autre manière de faire qu'avec le if dans Behavior */}
        {/* { APIState.loading && <div>Loading...</div> } */}
    </div>
  )
}
