import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export default function Tasks() {
//###################################
//State
    const [tasks, setTasks] = useState({
        loading: true,
        error: false,
        data: undefined
    });

    // Get id in URL
    const {listId} = useParams();
    let content;
    // console.log(listId);

//###################################
//Behavior
    useEffect(() => {
        setTasks({...tasks, loading: true});
        async function fetchTasks() {
            try {
                // configuration du header de la requete
                const config = {
                    headers: {Authorization: `Bearer ${localStorage.token}`}
                };

                const taskResponse = await axios.get(`http://127.0.0.1:8000/api/list/${listId}`, config);

                // console.log(taskResponse.data.tasks);
                setTasks({loading: false, error: false, data: taskResponse.data})
            } catch (error) {
                console.log(error);
                setTasks({...tasks, loading: false, error: true});
            }
        }
        fetchTasks();

    }, [])

    if(tasks.loading) content = <div>Loading...</div>
    else if(tasks.error) content = <div>Une erreur est survenue...</div>
    else if(tasks.data?.tasks.length > 0) {
        console.log('lalal');
        content = <div>
            <h2>Liste: { tasks.data.name }</h2>
            <ul>
                {tasks.data ? tasks.data.tasks.map(task => (
                    <li key={task.id}>
                        {task.name}
                    </li>
                )) : "Vous n'avez aucune tâche dans cette liste !"}
            </ul>
        </div>
    }
    else if(tasks.data?.tasks.length === 0) content = <p>Votre requête ne correspond à aucune données !</p>

//###################################
//Display
  return (
    <div>
        <Link to={`../listes/${listId}/nouvelle-tache`}><button>Créer une nouvelle tâche</button></Link>
        { content }
    </div>
  )
}
